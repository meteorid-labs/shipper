import ShippingRatesListComponent from './ShippingRatesList.vue'

class ShippingRatesList {
  constructor({ wrapper, ...props }) {
    this.$wrapper = $(wrapper)

    Object.assign(this, props)

    let $vm = new Vue({
      el: this.$wrapper.get(0),
      render: (h) =>
        h(ShippingRatesListComponent, {
          props: props
        })
    })

    this.$component = $vm.$children[0]
  }
}

frappe.provide('frappe.ui')
frappe.ui.ShippingRatesList = ShippingRatesList
export default ShippingRatesList
