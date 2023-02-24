// Copyright (c) 2023, Aslam and contributors
// For license information, please see license.txt

let searchLogisticButton = null

frappe.ui.form.on('Shipper Order', {
  refresh: function (frm) {
    if (typeof frm.doc.order !== 'undefined') {
      console.log('frm.is_new() is undefined')

      // remove all tag that has visible-section class under form-page div except the first one
      frm.$wrapper
        .find('.form-page')
        .find('.visible-section')
        .not(':first')
        .remove()

      frappe.require('shipper.bundle.js').then(() => {
        frm.fields_dict.order_detail.$wrapper.html(
          frappe.render_template('order_detail')
        )

        new frappe.ui.Shipper({
          wrapper: '#order-detail',
          component: 'order_detail',
          frm: frm
        })
      })
    }

    searchLogisticButton = frm
      .get_field('cari_kurir_logistik')
      .$wrapper.find('.btn')

    searchLogisticButton.on('click', function () {
      const isValidated = validate(frm)

      if (isValidated) {
        return frm.events.fetch_shipping_rates(frm)
      }
    })
  },

  fetch_address: function (frm, fieldname) {
    console.log('Fetching address for', fieldname, '...')

    const address = frm.doc[fieldname]

    return frappe.call({
      method:
        'shipper.shipper.doctype.shipper_address.shipper_address.get_address_details',
      args: { address: address },
      callback: (r) => r.message
    })
  },

  fetch_shipping_rates: async function (frm) {
    console.log('Fetching shipping rates...')

    Promise.all([
      await frm.events.fetch_address(frm, 'origin_address'),
      await frm.events.fetch_address(frm, 'destination_address')
    ]).then(([origin_address, destination_address]) => {
      let origin = JSON.parse(origin_address.message.meta_address)
      let destination = JSON.parse(destination_address.message.meta_address)

      const args = {
        originAreaId: origin.id,
        originLat: origin.lat,
        originLng: origin.lng,
        destinationAreaId: destination.id,
        destinationLat: destination.lat,
        destinationLng: destination.lng,
        height: frm.doc.height,
        itemValue: frm.doc.item_value,
        length: frm.doc.length,
        weight: frm.doc.weight,
        width: frm.doc.width,
        validToOrder: true
      }

      frappe.call({
        method:
          'shipper.shipper.doctype.shipper_order.shipper_order.fetch_shipping_rates',
        freeze: true,
        freeze_message: __('Fetching Shipping Rates'),
        args: args,
        callback: function (r) {
          console.log('r', r)
          // searchLogisticButton.prop('disabled', false)

          if (r.message && r.message.length) {
            select_from_available_services(frm, r.message)
          } else {
            frappe.msgprint({
              message: __('No Shipment Services available'),
              title: __('Note')
            })
          }
        }
      })
    })
  }
})

function select_from_available_services(frm, available_services) {
  frm.render_available_services = function (dialog, available_services) {
    dialog.$wrapper.find('.modal-body').css({
      'max-height': 'calc(100vh - 210px)',
      'overflow-y': 'auto'
    })
    dialog.fields_dict.available_services.$wrapper.html(
      frappe.render_template('shipper_service_selector', {
        data: available_services
      })
    )
  }

  const dialog = new frappe.ui.Dialog({
    title: __('Select Service to Create Shipment'),
    fields: [
      {
        fieldtype: 'HTML',
        fieldname: 'available_services',
        label: __('Available Services')
      }
    ],
    on_page_show: () => {
      frappe.require('shipper.bundle.js').then(() => {
        new frappe.ui.Shipper({
          wrapper: '#shipping-rates',
          compoent: 'shipping_rates',
          dialog: dialog,
          frm: frm,
          pricings: available_services
        })
      })
    }
  })

  frm.render_available_services(dialog, headers, available_services)

  dialog.show()
}

// Validation

const validate = function (frm) {
  const run = function () {
    var has_errors = false
    frm.scroll_set = false

    if (frm.doc.docstatus == 2) return true // don't check for cancel

    var error_fields = []
    var folded = false

    $.each(
      frappe.meta.docfield_list[frm.doc.doctype] || [],
      function (i, docfield) {
        if (docfield.fieldname && docfield.fieldname !== 'kurir') {
          const df = frappe.meta.get_docfield(
            frm.doc.doctype,
            docfield.fieldname,
            frm.doc.name
          )

          if (df.fieldtype === 'Fold') {
            folded = frm.layout.folded
          }

          if (
            is_docfield_mandatory(frm.doc, df) &&
            !frappe.model.has_value(frm.doc.doctype, frm.doc.name, df.fieldname)
          ) {
            has_errors = true
            error_fields[error_fields.length] = __(df.label)
            // scroll to field
            if (!frm.scroll_set) {
              scroll_to(frm.doc.parentfield || df.fieldname)
            }

            if (folded) {
              frm.layout.unfold()
              folded = false
            }
          }
        }
      }
    )

    if (error_fields.length) {
      let meta = frappe.get_meta(frm.doc.doctype)
      if (meta.istable) {
        const table_field =
          frappe.meta.docfield_map[frm.doc.parenttype][frm.doc.parentfield]

        const table_label = __(
          table_field.label || frappe.unscrub(table_field.fieldname)
        ).bold()

        var message = __('Mandatory fields required in table {0}, Row {1}', [
          table_label,
          frm.doc.idx
        ])
      } else {
        var message = __(
          'Please fill all mandatory fields before fetching rates'
        )
      }
      message =
        message + '<br><br><ul><li>' + error_fields.join('</li><li>') + '</ul>'

      frappe.msgprint({
        message: message,
        indicator: 'red',
        title: __('Missing Fields')
      })
      frm.refresh()
    }

    return !has_errors
  }

  const scroll_to = (fieldname) => {
    frm.scroll_to_field(fieldname)
    frm.scroll_set = true
  }

  let is_docfield_mandatory = function (doc, df) {
    if (df.reqd) return true
    if (!df.mandatory_depends_on || !doc) return

    let out = null
    let expression = df.mandatory_depends_on
    let parent = frappe.get_meta(df.parent)

    if (typeof expression === 'boolean') {
      out = expression
    } else if (typeof expression === 'function') {
      out = expression(doc)
    } else if (expression.substr(0, 5) == 'eval:') {
      try {
        out = frappe.utils.eval(expression.substr(5), { doc, parent })
        if (parent && parent.istable && expression.includes('is_submittable')) {
          out = true
        }
      } catch (e) {
        frappe.throw(__('Invalid "mandatory_depends_on" expression'))
      }
    } else {
      var value = doc[expression]
      if ($.isArray(value)) {
        out = !!value.length
      } else {
        out = !!value
      }
    }

    return out
  }

  return run()
}
