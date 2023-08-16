import frappe
import requests


class ShipperUtils:
    def __init__(self):
        self.api_base_url, self.api_key = frappe.db.get_value(
            "Shipper Settings", "Shipper Settings", ["api_key", "api_base_url"]
        )

        if not self.api_base_url and self.api_key:
            frappe.throw("Please setup Shipper API Key and API Base URL")

        self.headers = {
            "accept": "application/json",
            "X-API-Key": self.api_key,
        }

    def location(self, params={}):
        url = self.api_base_url + "v3/location"
        return requests.get(url, headers=self.headers, params=params)

    def areas(self, params={}):
        url = self.api_base_url + "v3/location/areas"
        return requests.get(url, headers=self.headers, params=params)

    def pricing_dosmestic(self, data):
        url = self.api_base_url + "v3/pricing/domestic"
        return requests.post(url, headers=self.headers, json=data)

    def order(self):
        url = self.api_base_url + "v3/order"
        return requests.get(url, headers=self.headers)

    def order_by_id(self, orderId):
        url = self.api_base_url + "v3/order/" + orderId
        return requests.get(url, headers=self.headers)

    def create_order(self, payload):
        url = self.api_base_url + "v3/order"
        return requests.post(url, headers=self.headers, json=payload)

    def timeslots(self, params={}):
        url = self.api_base_url + "v3/pickup/timeslot"
        return requests.get(url, headers=self.headers, params=params)

    def create_pickup_order(self, data):
        url = self.api_base_url + "v3/pickup/timeslot"
        return requests.post(url, headers=self.headers, json=data)

    def convert_phone_number(self, phone_number):
        converted_number = phone_number.replace("+", "").replace("-", "")
        if converted_number.startswith("0"):
            country_code = {
                "62": "Indonesia",
                "60": "Malaysia",
                # Add more country codes here if needed
            }
            for code, country in country_code.items():
                if converted_number.startswith(code):
                    converted_number = converted_number.replace(code, "")
                    break
            else:
                frappe.throw("Unknown country code.")
        return converted_number


@frappe.whitelist(allow_guest=True, methods=["POST"])
def shipper_webhook(**kwargs):
    # Callback shipper
    webhook_shipper_order_id = kwargs.get("tracking_id")
    webhook_shipper_awb = kwargs.get("awb")

    # Order by shipper_order_id
    order = frappe.get_doc(
        "Order", {"shipper_order_id": webhook_shipper_order_id}
    ).as_dict()
    order_status = order.status

    # Update awb in order if shipper already return awb
    if (
        len(webhook_shipper_awb) > 0
        and order_status == "On Delivery"
        and kwargs["external_status"]["name"] == "Penjemputan Diajukan"
    ):        
        frappe.enqueue(
            order_update,
            now=False,
            order_name=order.name,
            order_status=order_status,
            webhook_shipper_awb=webhook_shipper_awb,
        )
    elif kwargs["external_status"]["name"] == "Paket Terkirim":
        frappe.enqueue(
            order_update,
            now=False,
            order_name=order.name,
            order_status="Order Completed",
        )


def order_update(order_name, order_status, webhook_shipper_awb=None):
    from ecommerce.oms.doctype.order.order import notify_order_status

    order = frappe.get_doc("Order", order_name)
    order.status = order_status

    notify_order_status(
        name=order_name,
        customer=order.customer,
        status=order_status,
        awb=webhook_shipper_awb,
    )

    order.save(ignore_permissions=True)