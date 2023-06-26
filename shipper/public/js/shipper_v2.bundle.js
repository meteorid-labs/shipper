import { createApp } from 'vue'
import ShippingRatesComponent from './ShippingRates.vue'
import OrderDetailComponent from './OrderDetail.vue'

class Shipper {
  constructor({ wrapper, component, ...props }) {
    this.$wrapper = wrapper.get ? wrapper.get(0) : wrapper

    const components = {
      order_detail: OrderDetailComponent,
      shipping_rates: ShippingRatesComponent
    }

    Object.assign(this, props)

    let app = createApp(components[component], props)
    SetVueGlobals(app)

    this.$component = app.mount(this.$wrapper)
  }
}

frappe.provide('frappe.ui')
frappe.ui.Shipper = Shipper
export default Shipper
