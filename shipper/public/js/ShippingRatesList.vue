<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: 'ShippingRatesList',

  props: {
    frm: Object,
    rates: Array
  },

  data: function () {
    return {
      name: 'Aslam'
    }
  },

  mounted() {
    console.log(this.frm, this.rates)
    this.frm.set_value('kurir', 'JNE')

    // frappe set value for field "kurir"
    // frappe.model.set_value('Shipping Order', 'Kurir', 'kurir', 'JNE')
  }
}
</script>
