# Copyright (c) 2023, Aslam and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import datetime
from shipper.shipper.shipper import ShipperUtils


class ShipperOrder(Document):
    def db_insert(self, *args, **kwargs):
        import json

        d = self.get_valid_dict()

        origin_address = frappe.get_doc('Shipper Address', d.origin_address)
        destination_address = frappe.get_doc(
            'Shipper Address', d.destination_address)

        origin_meta_address = json.loads(origin_address.meta_address)
        destination_meta_address = json.loads(destination_address.meta_address)

        package_types = {
            'document': 1,
            'small_package': 2,
            'medium_package': 3,
        }
        qty = 1
        package_price = d.item_value * qty
        payment_type = 'cash'

        payload = {
            'consignee': {
                'name': destination_address.name,
                'phone_number': ShipperUtils().convert_phone_number(destination_address.phone_number)
            },
            'consigner': {
                'name': origin_address.name,
                'phone_number': ShipperUtils().convert_phone_number(origin_address.phone_number)
            },
            'courier': {
                'cod': bool(d.cod),
                'rate_id': d.rate_id,
                'use_insurance': bool(d.use_insurance)
            },
            'coverage': d.coverage,
            'destination': {
                'address': destination_address.address,
                'area_id': destination_meta_address.get('id'),
                'lat': str(destination_meta_address.get('lat')),
                'lng': str(destination_meta_address.get('lng'))
            },
            'external_id': d.external_id,
            'origin': {
                'address': origin_address.address,
                'area_id': origin_meta_address.get('id'),
                'lat': str(origin_meta_address.get('lat')),
                'lng': str(origin_meta_address.get('lng'))
            },
            'package': {
                'height': float(d.height),
                'items': [
                    {
                        'name': d.item_type,
                        'price': int(d.item_value),
                        'qty': qty,
                    }
                ],
                'length': float(d.length),
                'package_type': package_types.get('small_package'),
                'price': int(package_price),
                'weight': float(d.weight),
                'width': float(d.width)
            },
            'payment_type': payment_type,
        }

        response = ShipperUtils().create_order(payload)

        result = frappe._dict(response.json())

        if result.metadata.get('http_status_code') == 200:
            # yeah, it's success
            pass

    def load_from_db(self):
        order_id = self.name

        response = ShipperUtils().order_by_id(order_id)

        # convert json to dict
        result = frappe._dict(response.json())

        # if http_status_code == 200 then it's for view
        if result.metadata.get('http_status_code') == 200:
            super(Document, self).__init__({'order': result.data})
        else:
            # other http_status_code is for create
            super(Document, self).__init__({'order': None, 'modified': ''})

    def db_update(self, *args, **kwargs):
        pass

    @staticmethod
    def get_list(args):
        order_list = []

        response = ShipperUtils().order()

        result = frappe._dict(response.json())

        if result.metadata.get('http_status_code') == 200:
            for order in result.data:
                dt = datetime.datetime.strptime(
                    order.get('creation_date')[:10], '%Y-%m-%d')

                order_list.append({
                    'id': str(order.get('payment_type')),
                    'name': order.get('order_id'),
                    'creation_date': dt.strftime('%d %B %Y'),
                    'origin': order.get('origin').get('city_name'),
                    'destination': order.get('destination').get('city_name'),
                    'courier': f"{order.get('courier').get('name')} - {order.get('courier').get('rate_name')}",
                    'currency': 'IDR',
                    'ongkir': order.get('courier').get('price_breakdown').get('final_price'),
                    'status': order.get('tracking').get('shipper_status').get('name'),
                })

        return order_list

    @staticmethod
    def get_count(args):
        return len({})

    @staticmethod
    def get_stats(args):
        return {}


@frappe.whitelist()
def fetch_shipping_rates(destinationAreaId, destinationLat, destinationLng, height, itemValue, length,
                         originAreaId, originLat, originLng, validToOrder,
                         weight, width):

    pricings = []

    payload = {
        'cod': False,
        'destination': {
            'area_id': int(destinationAreaId),
            'lat': str(destinationLat),
            'lng': str(destinationLng)
        },
        'origin': {
            'area_id': int(originAreaId),
            'lat': str(originLat),
            'lng': str(originLng)
        },
        'for_order': bool(validToOrder),
        'height': float(height),
        'length': float(length),
        'width': float(width),
        'weight': float(weight),
        'item_value': float(itemValue),
        'sort_by': ['final_price']
    }

    response = ShipperUtils().pricing_dosmestic(data=payload)

    result = frappe._dict(response.json())

    if result.metadata.get('http_status_code') == 200:
        for pricing in result.data.get('pricings'):
            pricings.append({
                **pricing,
            })

    return pricings
