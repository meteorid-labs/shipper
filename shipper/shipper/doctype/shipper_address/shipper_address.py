# Copyright (c) 2023, Aslam and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import json
from shipper.shipper.shipper import ShipperUtils

class ShipperAddress(Document):
	def validate(self):
		try:
			suburb = json.loads(self.suburb)
			self.suburb = suburb.get('display_txt')
		except ValueError:
			pass

		area = json.loads(self.area)

		self.area = area.get('name')
		self.meta_address = json.dumps(area)
		self.postcode = area.get('postcode')

@frappe.whitelist()
def get_address_details(address):
	return frappe.get_doc("Shipper Address", address)

@frappe.whitelist()
# @frappe.validate_and_sanitize_search_inputs
def get_location_projection(txt, level, limit, sort_by):
	locations = []

	response = ShipperUtils().location(params={
			'keyword': txt,
			'adm_level': level,
			'limit': limit,
			'sort_by': sort_by
		})

	result = frappe._dict(response.json())

	if result.metadata.get('http_status_code') == 200:
		for location in result.data:
			locations.append({
				'label': location.get('display_txt'),
				'value': json.dumps(location),
			})

	return locations

@frappe.whitelist()
def get_areas(suburb_id, limit, sort_by):
	areas = []

	params = {
		limit: limit,
		sort_by: sort_by
	}

	if (suburb_id):
		params['suburb_id'] = suburb_id

	response = ShipperUtils().areas(params=params)

	result = frappe._dict(response.json())

	if result.metadata.get('http_status_code') == 200:
		for area in result.data:
			areas.append({
				'label': area.get('name'),
				'value': json.dumps(area),
			})

	return areas