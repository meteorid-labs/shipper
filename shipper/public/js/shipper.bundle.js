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

    let $vm = new Vue({
      el: this.$wrapper.get(0),
      render: (h) =>
        h(components[component], {
          props: props
        })
    })

    this.$component = $vm.$children[0]
  }
}

frappe.provide('frappe.ui')
frappe.ui.Shipper = Shipper
export default Shipper
