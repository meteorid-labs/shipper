# Copyright (c) 2023, Aslam and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from peewee import *
from playhouse.mysql_ext import MariaDBConnectorDatabase
import datetime
from shipper.shipper.shipper import ShipperUtils

db = MariaDBConnectorDatabase('mcp', host='localhost', user='root')

class BaseModel(Model):
	class Meta:
		database = db

class ShipperAddress(BaseModel):
	address1 = CharField()
	address2 = CharField()
	contact = CharField()
	isDefault = BooleanField()
	lat = FloatField()
	lng = FloatField()
	name = CharField()
	postcode = CharField()
	status = CharField()

class ShipperOrder(Document):
	
	def db_insert(self, *args, **kwargs):
		pass

	def load_from_db(self):
		order_id = self.name
			
		response = ShipperUtils().order_by_id(order_id)

		# convert json to dict
		result = frappe._dict(response.json())
		
		# if http_status_code == 200 then it's for view
		if result.metadata.get('http_status_code') == 200:
			super(Document, self).__init__(result.data)
		else:
			# other http_status_code is for create
			super(Document, self).__init__({
				'coverage': '',
				'consignee_name': '',
				'consignee_phone_number': '',
				# frappe defaults
				'modified': '',
			})

	def db_update(self, *args, **kwargs):
		pass

	@staticmethod
	def get_list(args):
		order_list = []

		response = ShipperUtils().order()

		result = frappe._dict(response.json())

		if result.metadata.get('http_status_code') == 200:
			for order in result.data:
				dt = datetime.datetime.strptime(order.get('creation_date')[:10], '%Y-%m-%d')

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