import frappe
import requests

class ShipperUtils():
    def __init__(self):
        self.api_base_url, self.api_key = frappe.db.get_value(
            'Shipper Settings', 
            'Shipper Settings',
            ['api_key', 'api_base_url']
        )

        if not self.api_base_url and self.api_key:
            frappe.throw('Please setup Shipper API Key and API Base URL')
            
        self.headers = {
            'accept': 'application/json',
            'X-API-Key': self.api_key,
        }

    def location(self, params = {}):
        url = self.api_base_url + 'v3/location'
        return requests.get(url, headers=self.headers, params=params)

    def areas(self, params = {}):
        url = self.api_base_url + 'v3/location/areas'
        return requests.get(url, headers=self.headers, params=params)

    def pricing_dosmestic(self, data):
        url = self.api_base_url + 'v3/pricing/domestic'
        return requests.post(url, headers=self.headers, json=data)

    def order(self):
        url = self.api_base_url + 'v3/order'
        return requests.get(url, headers=self.headers)

    def order_by_id(self, orderId):
        url = self.api_base_url + 'v3/order/' + orderId
        return requests.get(url, headers=self.headers)