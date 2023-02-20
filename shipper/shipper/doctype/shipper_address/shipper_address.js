// Copyright (c) 2023, Aslam and contributors
// For license information, please see license.txt

let areaSelect = null
let postcodeInput = null

frappe.ui.form.on('Shipper Address', {
  refresh: function (frm) {
    if (!frm.is_new()) {
      const meta = JSON.parse(frm.doc.meta_address)
      getAreas(meta.suburb.id, frm.doc.area)
    }

    // set query for suburb
    frm.set_query('suburb', () => {
      return {
        query:
          'shipper.shipper.doctype.shipper_address.shipper_address.get_location_projection',
        params: {
          level: 4,
          limit: 100,
          sort_by: ['name']
        }
      }
    })

    // disabled select data-fieldname="area"
    areaSelect = frm.get_field('area').$input[0]
    areaSelect.disabled = true

    // disabled input data-fieldname="postcode"
    postcodeInput = frm.get_field('postcode').$input[0]
    postcodeInput.disabled = true

    // areaSelect if not disabled and on focus append options
    // areaSelect.addEventListener('focus', () => {
    //   if (!areaSelect.disabled) {
    //     frappe.ui.form.add_options(areaSelect, areas)
    //   }
    // })
  },

  suburb: (frm) => {
    if (frm.doc.suburb) {
      const value = JSON.parse(frm.doc.suburb)
      const adm_level_4 = value.adm_level_4

      getAreas(adm_level_4.id)
    } else {
      // frm.set_df_property('postcode', 'disabled', 1)
      frm.set_df_property('area', 'options', [])
      postcodeInput.value = ''
      areaSelect.disabled = true
      postcodeInput.disabled = true
    }
  },

  area: (frm) => {
    if (frm.doc.area) {
      const area = JSON.parse(frm.doc.area)
      postcodeInput.value = area.postcode
      // frm.set_value('postcode', area.postcode)
    }
  }
})

const getAreas = (suburbId, selected = null) => {
  frappe.call({
    method: 'shipper.shipper.doctype.shipper_address.shipper_address.get_areas',
    args: {
      limit: 100,
      sort_by: ['name'],
      suburb_id: suburbId
    },
    callback: function (res) {
      const { message } = res

      areaSelect.disabled = false

      // remove all options
      areaSelect.options.length = 0

      // append options
      frappe.ui.form.add_options(areaSelect, message)

      // remove postcode
      postcodeInput.value = ''

      if (selected) {
        for (let i = 0; i < areaSelect.options.length; i++) {
          if (areaSelect.options[i].text === selected) {
            areaSelect.options[i].selected = true
            postcodeInput.value = JSON.parse(
              areaSelect.options[i].value
            ).postcode
            break
          }
        }
      }

      // why not use this instead? because if user away from the browser tab and come back again
      // the options will be empty
      // frm.set_df_property('area', 'options', message)
    }
  })
}
