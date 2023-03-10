from . import __version__ as app_version
from frappe import __version__ as frappe_version

app_name = "shipper"
app_title = "Shipper"
app_publisher = "Aslam"
app_description = "Shipper API for Frappe"
app_email = "iupin5212@gmail.com"
app_license = "MIT"

frappe_v = int(frappe_version.split('.')[0])

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "file-preview.bundle.css"
app_include_js = ["shipper.bundle.js"] if frappe_v == 14 else [
    "shipper_v2.bundle.js"]

# include js, css files in header of web template
# web_include_css = "/assets/shipper/css/shipper.css"
# web_include_js = "/assets/shipper/js/shipper.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "shipper/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {
#     "Shipper Order": 'public/js/pricing.js'
# }
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# "Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# "methods": "shipper.utils.jinja_methods",
# "filters": "shipper.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "shipper.install.before_install"
# after_install = "shipper.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "shipper.uninstall.before_uninstall"
# after_uninstall = "shipper.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "shipper.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# "Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# "Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# "ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# "*": {
# "on_update": "method",
# "on_cancel": "method",
# "on_trash": "method"
# }
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# "all": [
# "shipper.tasks.all"
# ],
# "daily": [
# "shipper.tasks.daily"
# ],
# "hourly": [
# "shipper.tasks.hourly"
# ],
# "weekly": [
# "shipper.tasks.weekly"
# ],
# "monthly": [
# "shipper.tasks.monthly"
# ],
# }

# Testing
# -------

# before_tests = "shipper.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# "frappe.desk.doctype.event.event.get_events": "shipper.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# "Task": "shipper.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]


# User Data Protection
# --------------------

# user_data_fields = [
# {
# "doctype": "{doctype_1}",
# "filter_by": "{filter_by}",
# "redact_fields": ["{field_1}", "{field_2}"],
# "partial": 1,
# },
# {
# "doctype": "{doctype_2}",
# "filter_by": "{filter_by}",
# "partial": 1,
# },
# {
# "doctype": "{doctype_3}",
# "strict": False,
# },
# {
# "doctype": "{doctype_4}"
# }
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# "shipper.auth.validate"
# ]
