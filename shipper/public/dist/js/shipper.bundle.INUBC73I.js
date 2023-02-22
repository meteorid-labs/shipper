(() => {
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };

  // ../shipper/shipper/public/js/ShippingRatesList.vue
  var __vue_script__ = {
    name: "ShippingRatesList",
    props: {
      frm: Object,
      pricings: Array,
      dialog: Object
    },
    data: function() {
      return {
        activeLogisticTab: null,
        logistic: {
          rate: {
            id: null
          }
        }
      };
    },
    computed: {
      logisticTabs() {
        let tabs = this.pricings.map((pricing) => pricing.rate.type);
        tabs = [...new Set(tabs)];
        tabs.sort((a, b) => {
          if (a === "Regular")
            return -1;
          if (b === "Regular")
            return 1;
          if (a === "Express")
            return -1;
          if (b === "Express")
            return 1;
          if (a === "Trucking")
            return -1;
          if (b === "Trucking")
            return 1;
          return 0;
        });
        this.activeLogisticTab = tabs[0];
        return tabs;
      },
      currentPricings() {
        const pricing = this.pricings.filter((pricing2) => {
          return pricing2.rate.type === this.activeLogisticTab;
        });
        pricing.sort((a, b) => {
          return a.discounted_price - b.discounted_price;
        });
        return pricing;
      }
    },
    mounted() {
    },
    methods: {
      fmt_currency(v, c, d) {
        return window.format_currency(v, c, d);
      },
      getDuration(pricing) {
        if (pricing.min_day === pricing.max_day) {
          return `${pricing.min_day} Hari`;
        } else {
          return `${pricing.min_day} - ${pricing.max_day} Hari`;
        }
      },
      selectLogistic(pricing) {
        pricing = JSON.parse(JSON.stringify(pricing));
        this.logistic = pricing;
      },
      choose() {
        this.frm.set_value("kurir", `${this.logistic.logistic.name} - ${this.logistic.rate.name}`);
        this.frm.set_value("cod", false);
        this.frm.set_value("rate_id", this.logistic.rate.id);
        this.frm.set_value("use_insurance", this.logistic.insurance_applied);
        this.dialog.hide();
      }
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "more-courier_container" }, [
      _c("div", { staticClass: "tabs_container" }, [
        _c("ol", { staticClass: "tabs_title" }, _vm._l(_vm.logisticTabs, function(logisticTab) {
          return _c("li", {
            key: logisticTab,
            staticClass: "tab_item",
            class: {
              "tab_item-active": _vm.activeLogisticTab === logisticTab
            },
            attrs: { "aria-hidden": "true" },
            on: {
              click: function($event) {
                _vm.activeLogisticTab = logisticTab;
              }
            }
          }, [_vm._v("\n        " + _vm._s(logisticTab) + "\n      ")]);
        }), 0),
        _vm._v(" "),
        _c("div", { staticClass: "tabs_content" }, _vm._l(_vm.currentPricings, function(pricing) {
          return _c("div", {
            key: pricing.rate.id,
            staticClass: "logistic_wrapper",
            on: {
              click: function($event) {
                return _vm.selectLogistic(pricing);
              }
            }
          }, [
            _c("div", {
              staticClass: "logistic_item",
              class: {
                "logistic_item--active": _vm.logistic.rate.id === pricing.rate.id
              },
              attrs: { "aria-hidden": "true" }
            }, [
              _c("div", { staticClass: "logistic_item-content" }, [
                _c("div", { staticClass: "logistic_brand" }, [
                  _c("img", {
                    attrs: {
                      src: pricing.logistic.logo_url,
                      alt: pricing.logistic.name + " - " + pricing.rate.name
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "logistic_detail" }, [
                  _c("div", {}, [
                    _vm._v("\n                " + _vm._s(pricing.logistic.name) + " - " + _vm._s(pricing.rate.name) + "\n              ")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "logistic_detail-duration" }, [
                    _vm._v("\n                " + _vm._s(_vm.getDuration(pricing)) + "\n              ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "logistic_price" }, [
                  _c("div", [
                    _c("span", [
                      _vm._v("\n                  " + _vm._s(_vm.fmt_currency(pricing.discounted_price, "IDR")) + "\n                ")
                    ])
                  ]),
                  _vm._v(" "),
                  pricing.discounted_price < pricing.base_price ? _c("div", { staticClass: "logistic_price_original" }, [
                    _c("span", [
                      _vm._v("\n                  " + _vm._s(_vm.fmt_currency(pricing.base_price, "IDR")) + "\n                ")
                    ])
                  ]) : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _vm.logistic.rate.id === pricing.rate.id ? _c("div", { staticClass: "logistic_insurance" }, [
                _c("div", { staticClass: "logistic_insurance-action" }, [
                  _c("label", {
                    staticClass: "checkbox_container",
                    attrs: { for: "insurance" }
                  }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.logistic.insurance_applied,
                          expression: "logistic.insurance_applied"
                        }
                      ],
                      attrs: {
                        name: "insurance-checkbox",
                        type: "checkbox",
                        id: "insurance",
                        disabled: _vm.logistic.must_use_insurance
                      },
                      domProps: {
                        checked: Array.isArray(_vm.logistic.insurance_applied) ? _vm._i(_vm.logistic.insurance_applied, null) > -1 : _vm.logistic.insurance_applied
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.logistic.insurance_applied, $$el = $event.target, $$c = $$el.checked ? true : false;
                          if (Array.isArray($$a)) {
                            var $$v = null, $$i = _vm._i($$a, $$v);
                            if ($$el.checked) {
                              $$i < 0 && _vm.$set(_vm.logistic, "insurance_applied", $$a.concat([$$v]));
                            } else {
                              $$i > -1 && _vm.$set(_vm.logistic, "insurance_applied", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                            }
                          } else {
                            _vm.$set(_vm.logistic, "insurance_applied", $$c);
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "logistic_insurance-label" }, [_vm._v("Tambahkan Asuransi")])
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "logistic_insurance-rate",
                    class: {
                      "logistic_insurance-rate--checked": _vm.logistic.insurance_applied
                    }
                  }, [
                    _c("span", [
                      _vm._v("\n                  " + _vm._s(_vm.fmt_currency(pricing.insurance_fee, "IDR")) + "\n                ")
                    ])
                  ])
                ])
              ]) : _vm._e()
            ])
          ]);
        }), 0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal-footer" }, [
        _c("div", { staticClass: "modal-footer-action" }, [
          _c("button", {
            staticClass: "btn btn-secondary btn-sm btn-modal-secondary",
            on: {
              click: function($event) {
                return _vm.dialog.hide();
              }
            }
          }, [_vm._v("\n        Cancel\n      ")]),
          _vm._v(" "),
          _c("button", {
            staticClass: "btn btn-primary btn-sm btn-modal-primary",
            attrs: { disabled: !_vm.logistic.rate.id },
            on: {
              click: function($event) {
                return _vm.choose();
              }
            }
          }, [_vm._v("\n        Choose\n      ")])
        ])
      ])
    ]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-759d4d76_0", { source: '.modal-footer[data-v-759d4d76] {\n  background: white;\n  padding: var(--padding-md) var(--padding-lg);\n  bottom: -1rem;\n  margin: -15px -20px;\n}\n.modal-footer-action[data-v-759d4d76] {\n  margin-left: auto;\n}\n.more-courier_title[data-v-759d4d76] {\n  font-size: 16px;\n  font-weight: bold;\n  color: rgb(32, 32, 32);\n  cursor: pointer;\n  display: inline-block;\n  margin: 0px;\n}\n.more-courier_title svg[data-v-759d4d76] {\n  width: 16px;\n  height: 16px;\n  transform: rotate(0deg);\n  transition: transform 0.3s ease 0s;\n}\n\n/* tabs */\nol.tabs_title[data-v-759d4d76] {\n  list-style: none;\n  display: flex;\n  padding: 0px;\n  justify-content: flex-start;\n  position: sticky;\n  top: -1rem;\n  background: #fff;\n}\nli[data-v-759d4d76] {\n  margin-right: 30px;\n  cursor: pointer;\n  padding-bottom: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  gap: 8px;\n}\nli.tab_item[data-v-759d4d76] {\n  color: rgb(32, 32, 32);\n  position: relative;\n}\nli.tab_item-active[data-v-759d4d76] {\n  color: rgb(32, 32, 32);\n}\nli.tab_item-active[data-v-759d4d76]::before {\n  content: "";\n  height: 3px;\n  width: 100%;\n  background: rgb(240, 74, 65);\n  position: absolute;\n  bottom: -5px;\n  left: 0px;\n}\n.tabs_content[data-v-759d4d76] {\n  padding: 20px 0px;\n}\n.logistic_item-content[data-v-759d4d76] {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  padding: 0px 25px;\n  text-align: center;\n}\n.logistic_item-content img[data-v-759d4d76] {\n  max-width: 70px;\n}\n.logistic_detail[data-v-759d4d76] {\n  color: rgb(96, 96, 96);\n  text-align: center;\n}\n.logistic_detail-duration[data-v-759d4d76] {\n  color: rgb(32, 32, 32);\n  font-weight: 600;\n  margin-top: 10px;\n  display: inline-block;\n}\n.logistic_price[data-v-759d4d76] {\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 0px 8px;\n}\n.logistic_price_original[data-v-759d4d76] {\n  text-decoration: line-through;\n  font-weight: 400;\n  font-size: 15px;\n  color: rgb(157, 157, 157);\n  text-align: center;\n}\n.logistic_item[data-v-759d4d76] {\n  border: 1px solid rgb(239, 239, 239);\n  border-radius: 8px;\n  padding: 25px 0px;\n  cursor: pointer;\n  margin-bottom: 15px;\n}\n.logistic_item.logistic_item--active[data-v-759d4d76] {\n  border: 1px solid rgb(0, 162, 216);\n  padding: 25px 0px 0px;\n}\n.logistic_insurance[data-v-759d4d76] {\n  border-top: 1px solid rgb(239, 239, 239);\n  padding: 1rem;\n}\n.logistic_insurance-action[data-v-759d4d76] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox_container[data-v-759d4d76] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.logistic_insurance-rate[data-v-759d4d76] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  opacity: 0.4;\n}\n.logistic_insurance-rate.logistic_insurance-rate--checked[data-v-759d4d76] {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=ShippingRatesList.vue.map */', map: { "version": 3, "sources": ["../shipper/shipper/public/js/ShippingRatesList.vue", "ShippingRatesList.vue"], "names": [], "mappings": "AA8MA;EACA,iBAAA;EACA,4CAAA;EACA,aAAA;EACA,mBAAA;AC7MA;ADgNA;EACA,iBAAA;AC7MA;AD+MA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,qBAAA;EACA,WAAA;AC5MA;AD8MA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,kCAAA;AC5MA;;ADgNA,SAAA;AAEA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,2BAAA;EAEA,gBAAA;EACA,UAAA;EACA,gBAAA;AC/MA;ADmNA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,QAAA;AChNA;ADmNA;EACA,sBAAA;EACA,kBAAA;AChNA;ADmNA;EACA,sBAAA;AChNA;ADkNA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,4BAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;AChNA;ADoNA;EACA,iBAAA;ACjNA;ADoNA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,yBAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,eAAA;ACjNA;ADoNA;EACA,sBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;ACjNA;ADoNA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;ACjNA;ADoNA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,oCAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;ACjNA;ADmNA;EACA,kCAAA;EACA,qBAAA;ACjNA;ADqNA;EACA,wCAAA;EACA,aAAA;AClNA;ADqNA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AClNA;ADqNA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;AClNA;ADqNA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;AClNA;ADoNA;EACA,UAAA;AClNA;;AAEA,gDAAgD", "file": "ShippingRatesList.vue", "sourcesContent": [`<template>
  <div class="more-courier_container">
    <div class="tabs_container">
      <ol class="tabs_title">
        <li
          v-for="logisticTab in logisticTabs"
          :key="logisticTab"
          aria-hidden="true"
          class="tab_item"
          :class="{ 'tab_item-active': activeLogisticTab === logisticTab }"
          @click="activeLogisticTab = logisticTab"
        >
          {{ logisticTab }}
        </li>
      </ol>
      <div class="tabs_content">
        <div
          v-for="pricing in currentPricings"
          :key="pricing.rate.id"
          class="logistic_wrapper"
          @click="selectLogistic(pricing)"
        >
          <div
            aria-hidden="true"
            class="logistic_item"
            :class="{
              'logistic_item--active': logistic.rate.id === pricing.rate.id
            }"
          >
            <div class="logistic_item-content">
              <div class="logistic_brand">
                <img
                  :src="pricing.logistic.logo_url"
                  :alt="\`\${pricing.logistic.name} - \${pricing.rate.name}\`"
                />
              </div>
              <div class="logistic_detail">
                <div class="">
                  {{ pricing.logistic.name }} - {{ pricing.rate.name }}
                </div>
                <span class="logistic_detail-duration">
                  {{ getDuration(pricing) }}
                </span>
              </div>
              <div class="logistic_price">
                <div>
                  <span>
                    {{ fmt_currency(pricing.discounted_price, 'IDR') }}
                  </span>
                </div>
                <div
                  v-if="pricing.discounted_price < pricing.base_price"
                  class="logistic_price_original"
                >
                  <span>
                    {{ fmt_currency(pricing.base_price, 'IDR') }}
                  </span>
                </div>
              </div>
            </div>
            <div
              v-if="logistic.rate.id === pricing.rate.id"
              class="logistic_insurance"
            >
              <div class="logistic_insurance-action">
                <label class="checkbox_container" for="insurance">
                  <input
                    v-model="logistic.insurance_applied"
                    name="insurance-checkbox"
                    type="checkbox"
                    id="insurance"
                    :disabled="logistic.must_use_insurance"
                  />
                  <div class="logistic_insurance-label">Tambahkan Asuransi</div>
                </label>
                <div
                  class="logistic_insurance-rate"
                  :class="{
                    'logistic_insurance-rate--checked':
                      logistic.insurance_applied
                  }"
                >
                  <span>
                    {{ fmt_currency(pricing.insurance_fee, 'IDR') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <div class="modal-footer-action">
        <button
          class="btn btn-secondary btn-sm btn-modal-secondary"
          @click="dialog.hide()"
        >
          Cancel
        </button>
        <button
          class="btn btn-primary btn-sm btn-modal-primary"
          @click="choose()"
          :disabled="!logistic.rate.id"
        >
          Choose
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShippingRatesList',

  props: {
    frm: Object,
    pricings: Array,
    dialog: Object
  },

  data: function () {
    return {
      activeLogisticTab: null,
      logistic: {
        rate: {
          id: null
        }
      }
    }
  },

  computed: {
    logisticTabs() {
      let tabs = this.pricings.map((pricing) => pricing.rate.type)
      tabs = [...new Set(tabs)]

      // sort tabs Regular, Express, Trucking etc
      tabs.sort((a, b) => {
        if (a === 'Regular') return -1
        if (b === 'Regular') return 1
        if (a === 'Express') return -1
        if (b === 'Express') return 1
        if (a === 'Trucking') return -1
        if (b === 'Trucking') return 1
        return 0
      })

      this.activeLogisticTab = tabs[0]
      return tabs
    },

    currentPricings() {
      const pricing = this.pricings.filter((pricing) => {
        return pricing.rate.type === this.activeLogisticTab
      })

      pricing.sort((a, b) => {
        return a.discounted_price - b.discounted_price
      })

      return pricing
    }
  },

  mounted() {
    // frappe set value for field "kurir"
    // frappe.model.set_value('Shipping Order', 'Kurir', 'kurir', 'JNE')
  },

  methods: {
    fmt_currency(v, c, d) {
      return window.format_currency(v, c, d)
    },

    getDuration(pricing) {
      if (pricing.min_day === pricing.max_day) {
        return \`\${pricing.min_day} Hari\`
      } else {
        return \`\${pricing.min_day} - \${pricing.max_day} Hari\`
      }
    },

    selectLogistic(pricing) {
      // copy without reactivity
      pricing = JSON.parse(JSON.stringify(pricing))
      this.logistic = pricing
    },

    choose() {
      this.frm.set_value(
        'kurir',
        \`\${this.logistic.logistic.name} - \${this.logistic.rate.name}\`
      )
      this.frm.set_value('cod', false)
      this.frm.set_value('rate_id', this.logistic.rate.id)
      this.frm.set_value('use_insurance', this.logistic.insurance_applied)
      this.dialog.hide()
    }
  }
}
<\/script>

<style lang="scss" scoped>
.modal-footer {
  background: white;
  padding: var(--padding-md) var(--padding-lg);
  bottom: -1rem;
  margin: -15px -20px;
}

.modal-footer-action {
  margin-left: auto;
}
.more-courier_title {
  font-size: 16px;
  font-weight: bold;
  color: rgb(32, 32, 32);
  cursor: pointer;
  display: inline-block;
  margin: 0px;

  svg {
    width: 16px;
    height: 16px;
    transform: rotate(0deg);
    transition: transform 0.3s ease 0s;
  }
}

/* tabs */
ol {
  &.tabs_title {
    list-style: none;
    display: flex;
    padding: 0px;
    justify-content: flex-start;

    position: sticky;
    top: -1rem;
    background: #fff;
  }
}

li {
  margin-right: 30px;
  cursor: pointer;
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  gap: 8px;
}

li.tab_item {
  color: rgb(32, 32, 32);
  position: relative;
}

li.tab_item-active {
  color: rgb(32, 32, 32);

  &::before {
    content: '';
    height: 3px;
    width: 100%;
    background: rgb(240, 74, 65);
    position: absolute;
    bottom: -5px;
    left: 0px;
  }
}

.tabs_content {
  padding: 20px 0px;
}

.logistic_item-content {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 25px;
  text-align: center;
}

.logistic_item-content img {
  max-width: 70px;
}

.logistic_detail {
  color: rgb(96, 96, 96);
  text-align: center;
}

.logistic_detail-duration {
  color: rgb(32, 32, 32);
  font-weight: 600;
  margin-top: 10px;
  display: inline-block;
}

.logistic_price {
  font-weight: 600;
  font-size: 1rem;
  padding: 0px 8px;
}

.logistic_price_original {
  text-decoration: line-through;
  font-weight: 400;
  font-size: 15px;
  color: rgb(157, 157, 157);
  text-align: center;
}

.logistic_item {
  border: 1px solid rgb(239, 239, 239);
  border-radius: 8px;
  padding: 25px 0px;
  cursor: pointer;
  margin-bottom: 15px;

  &.logistic_item--active {
    border: 1px solid rgb(0, 162, 216);
    padding: 25px 0px 0px;
  }
}

.logistic_insurance {
  border-top: 1px solid rgb(239, 239, 239);
  padding: 1rem;
}

.logistic_insurance-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox_container {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 500;
  font-size: 0.875rem;
}

.logistic_insurance-rate {
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.4;

  &.logistic_insurance-rate--checked {
    opacity: 1;
  }
}
</style>
`, '.modal-footer {\n  background: white;\n  padding: var(--padding-md) var(--padding-lg);\n  bottom: -1rem;\n  margin: -15px -20px;\n}\n\n.modal-footer-action {\n  margin-left: auto;\n}\n\n.more-courier_title {\n  font-size: 16px;\n  font-weight: bold;\n  color: rgb(32, 32, 32);\n  cursor: pointer;\n  display: inline-block;\n  margin: 0px;\n}\n.more-courier_title svg {\n  width: 16px;\n  height: 16px;\n  transform: rotate(0deg);\n  transition: transform 0.3s ease 0s;\n}\n\n/* tabs */\nol.tabs_title {\n  list-style: none;\n  display: flex;\n  padding: 0px;\n  justify-content: flex-start;\n  position: sticky;\n  top: -1rem;\n  background: #fff;\n}\n\nli {\n  margin-right: 30px;\n  cursor: pointer;\n  padding-bottom: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  gap: 8px;\n}\n\nli.tab_item {\n  color: rgb(32, 32, 32);\n  position: relative;\n}\n\nli.tab_item-active {\n  color: rgb(32, 32, 32);\n}\nli.tab_item-active::before {\n  content: "";\n  height: 3px;\n  width: 100%;\n  background: rgb(240, 74, 65);\n  position: absolute;\n  bottom: -5px;\n  left: 0px;\n}\n\n.tabs_content {\n  padding: 20px 0px;\n}\n\n.logistic_item-content {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  padding: 0px 25px;\n  text-align: center;\n}\n\n.logistic_item-content img {\n  max-width: 70px;\n}\n\n.logistic_detail {\n  color: rgb(96, 96, 96);\n  text-align: center;\n}\n\n.logistic_detail-duration {\n  color: rgb(32, 32, 32);\n  font-weight: 600;\n  margin-top: 10px;\n  display: inline-block;\n}\n\n.logistic_price {\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 0px 8px;\n}\n\n.logistic_price_original {\n  text-decoration: line-through;\n  font-weight: 400;\n  font-size: 15px;\n  color: rgb(157, 157, 157);\n  text-align: center;\n}\n\n.logistic_item {\n  border: 1px solid rgb(239, 239, 239);\n  border-radius: 8px;\n  padding: 25px 0px;\n  cursor: pointer;\n  margin-bottom: 15px;\n}\n.logistic_item.logistic_item--active {\n  border: 1px solid rgb(0, 162, 216);\n  padding: 25px 0px 0px;\n}\n\n.logistic_insurance {\n  border-top: 1px solid rgb(239, 239, 239);\n  padding: 1rem;\n}\n\n.logistic_insurance-action {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.checkbox_container {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n\n.logistic_insurance-rate {\n  font-size: 0.875rem;\n  font-weight: 500;\n  opacity: 0.4;\n}\n.logistic_insurance-rate.logistic_insurance-rate--checked {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=ShippingRatesList.vue.map */'] }, media: void 0 });
  };
  var __vue_scope_id__ = "data-v-759d4d76";
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
    if (true) {
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
  function __vue_create_injector__() {
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__ = /* @__PURE__ */ __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, void 0, void 0);
  var ShippingRatesList_default = __vue_component__;

  // ../shipper/shipper/public/js/shipper.bundle.js
  var ShippingRatesList = class {
    constructor(_a) {
      var _b = _a, { wrapper } = _b, props = __objRest(_b, ["wrapper"]);
      this.$wrapper = $(wrapper);
      Object.assign(this, props);
      let $vm = new Vue({
        el: this.$wrapper.get(0),
        render: (h) => h(ShippingRatesList_default, {
          props
        })
      });
      this.$component = $vm.$children[0];
    }
  };
  frappe.provide("frappe.ui");
  frappe.ui.ShippingRatesList = ShippingRatesList;
  var shipper_bundle_default = ShippingRatesList;
})();
//# sourceMappingURL=shipper.bundle.INUBC73I.js.map
