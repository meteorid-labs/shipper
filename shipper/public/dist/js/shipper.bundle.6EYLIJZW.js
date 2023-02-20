(() => {
  // ../shipper/shipper/public/js/ShippingRatesList.vue
  var __vue_script__ = {
    name: "ShippingRatesList",
    props: {
      frm: Object,
      rates: Array
    },
    data: function() {
      return {
        name: "Aslam"
      };
    },
    mounted() {
      console.log(this.frm, this.rates);
      this.frm.set_value("kurir", "JNE");
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_vm._v(_vm._s(_vm.name))]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = void 0;
  var __vue_scope_id__ = void 0;
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../shipper/shipper/public/js/ShippingRatesList.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__ = /* @__PURE__ */ __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, void 0, void 0, void 0);
  var ShippingRatesList_default = __vue_component__;

  // ../shipper/shipper/public/js/shipper.bundle.js
  var ShippingRatesList = class {
    constructor({ wrapper, frm, rates }) {
      this.$wrapper = $(wrapper);
      this.frm = frm;
      this.rates = rates;
      let $vm = new Vue({
        el: this.$wrapper.get(0),
        render: (h) => h(ShippingRatesList_default, {
          props: {
            rates: this.rates,
            frm: this.frm
          }
        })
      });
      this.$component = $vm.$children[0];
    }
  };
  frappe.provide("frappe.ui");
  frappe.ui.ShippingRatesList = ShippingRatesList;
  var shipper_bundle_default = ShippingRatesList;
})();
//# sourceMappingURL=shipper.bundle.6EYLIJZW.js.map
