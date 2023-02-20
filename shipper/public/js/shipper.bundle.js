import ShippingRatesListComponent from './ShippingRatesList.vue'

class ShippingRatesList {
  constructor({ wrapper, frm, rates }) {
    this.$wrapper = $(wrapper)
    this.frm = frm
    this.rates = rates

    let $vm = new Vue({
      el: this.$wrapper.get(0),
      render: (h) =>
        h(ShippingRatesListComponent, {
          props: {
            rates: this.rates,
            frm: this.frm
          }
        })
    })

    this.$component = $vm.$children[0]
  }
}

frappe.provide('frappe.ui')
frappe.ui.ShippingRatesList = ShippingRatesList
export default ShippingRatesList
