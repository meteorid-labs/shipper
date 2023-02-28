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

  // ../shipper/shipper/public/js/ShippingRates.vue
  var __vue_script__ = {
    name: "ShippingRates",
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
    inject("data-v-824dd9f6_0", { source: '.modal-footer[data-v-824dd9f6] {\n  background: white;\n  padding: var(--padding-md) var(--padding-lg);\n  bottom: -1rem;\n  margin: -15px -20px;\n}\n.modal-footer-action[data-v-824dd9f6] {\n  margin-left: auto;\n}\n.more-courier_title[data-v-824dd9f6] {\n  font-size: 16px;\n  font-weight: bold;\n  color: rgb(32, 32, 32);\n  cursor: pointer;\n  display: inline-block;\n  margin: 0px;\n}\n.more-courier_title svg[data-v-824dd9f6] {\n  width: 16px;\n  height: 16px;\n  transform: rotate(0deg);\n  transition: transform 0.3s ease 0s;\n}\n\n/* tabs */\nol.tabs_title[data-v-824dd9f6] {\n  list-style: none;\n  display: flex;\n  padding: 0px;\n  justify-content: flex-start;\n  position: sticky;\n  top: -1rem;\n  background: #fff;\n}\nli[data-v-824dd9f6] {\n  margin-right: 30px;\n  cursor: pointer;\n  padding-bottom: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  gap: 8px;\n}\nli.tab_item[data-v-824dd9f6] {\n  color: rgb(32, 32, 32);\n  position: relative;\n}\nli.tab_item-active[data-v-824dd9f6] {\n  color: rgb(32, 32, 32);\n}\nli.tab_item-active[data-v-824dd9f6]::before {\n  content: "";\n  height: 3px;\n  width: 100%;\n  background: rgb(240, 74, 65);\n  position: absolute;\n  bottom: -5px;\n  left: 0px;\n}\n.tabs_content[data-v-824dd9f6] {\n  padding: 20px 0px;\n}\n.logistic_item-content[data-v-824dd9f6] {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  padding: 0px 25px;\n  text-align: center;\n}\n.logistic_item-content img[data-v-824dd9f6] {\n  max-width: 70px;\n}\n.logistic_detail[data-v-824dd9f6] {\n  color: rgb(96, 96, 96);\n  text-align: center;\n}\n.logistic_detail-duration[data-v-824dd9f6] {\n  color: rgb(32, 32, 32);\n  font-weight: 600;\n  margin-top: 10px;\n  display: inline-block;\n}\n.logistic_price[data-v-824dd9f6] {\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 0px 8px;\n}\n.logistic_price_original[data-v-824dd9f6] {\n  text-decoration: line-through;\n  font-weight: 400;\n  font-size: 15px;\n  color: rgb(157, 157, 157);\n  text-align: center;\n}\n.logistic_item[data-v-824dd9f6] {\n  border: 1px solid rgb(239, 239, 239);\n  border-radius: 8px;\n  padding: 25px 0px;\n  cursor: pointer;\n  margin-bottom: 15px;\n}\n.logistic_item.logistic_item--active[data-v-824dd9f6] {\n  border: 1px solid rgb(0, 162, 216);\n  padding: 25px 0px 0px;\n}\n.logistic_insurance[data-v-824dd9f6] {\n  border-top: 1px solid rgb(239, 239, 239);\n  padding: 1rem;\n}\n.logistic_insurance-action[data-v-824dd9f6] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkbox_container[data-v-824dd9f6] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.logistic_insurance-rate[data-v-824dd9f6] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  opacity: 0.4;\n}\n.logistic_insurance-rate.logistic_insurance-rate--checked[data-v-824dd9f6] {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=ShippingRates.vue.map */', map: { "version": 3, "sources": ["../shipper/shipper/public/js/ShippingRates.vue", "ShippingRates.vue"], "names": [], "mappings": "AA8MA;EACA,iBAAA;EACA,4CAAA;EACA,aAAA;EACA,mBAAA;AC7MA;ADgNA;EACA,iBAAA;AC7MA;AD+MA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,qBAAA;EACA,WAAA;AC5MA;AD8MA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,kCAAA;AC5MA;;ADgNA,SAAA;AAEA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,2BAAA;EAEA,gBAAA;EACA,UAAA;EACA,gBAAA;AC/MA;ADmNA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,QAAA;AChNA;ADmNA;EACA,sBAAA;EACA,kBAAA;AChNA;ADmNA;EACA,sBAAA;AChNA;ADkNA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,4BAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;AChNA;ADoNA;EACA,iBAAA;ACjNA;ADoNA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,yBAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,eAAA;ACjNA;ADoNA;EACA,sBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;ACjNA;ADoNA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;ACjNA;ADoNA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,oCAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;ACjNA;ADmNA;EACA,kCAAA;EACA,qBAAA;ACjNA;ADqNA;EACA,wCAAA;EACA,aAAA;AClNA;ADqNA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AClNA;ADqNA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;AClNA;ADqNA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;AClNA;ADoNA;EACA,UAAA;AClNA;;AAEA,4CAA4C", "file": "ShippingRates.vue", "sourcesContent": [`<template>
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
  name: 'ShippingRates',

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
`, '.modal-footer {\n  background: white;\n  padding: var(--padding-md) var(--padding-lg);\n  bottom: -1rem;\n  margin: -15px -20px;\n}\n\n.modal-footer-action {\n  margin-left: auto;\n}\n\n.more-courier_title {\n  font-size: 16px;\n  font-weight: bold;\n  color: rgb(32, 32, 32);\n  cursor: pointer;\n  display: inline-block;\n  margin: 0px;\n}\n.more-courier_title svg {\n  width: 16px;\n  height: 16px;\n  transform: rotate(0deg);\n  transition: transform 0.3s ease 0s;\n}\n\n/* tabs */\nol.tabs_title {\n  list-style: none;\n  display: flex;\n  padding: 0px;\n  justify-content: flex-start;\n  position: sticky;\n  top: -1rem;\n  background: #fff;\n}\n\nli {\n  margin-right: 30px;\n  cursor: pointer;\n  padding-bottom: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  gap: 8px;\n}\n\nli.tab_item {\n  color: rgb(32, 32, 32);\n  position: relative;\n}\n\nli.tab_item-active {\n  color: rgb(32, 32, 32);\n}\nli.tab_item-active::before {\n  content: "";\n  height: 3px;\n  width: 100%;\n  background: rgb(240, 74, 65);\n  position: absolute;\n  bottom: -5px;\n  left: 0px;\n}\n\n.tabs_content {\n  padding: 20px 0px;\n}\n\n.logistic_item-content {\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  padding: 0px 25px;\n  text-align: center;\n}\n\n.logistic_item-content img {\n  max-width: 70px;\n}\n\n.logistic_detail {\n  color: rgb(96, 96, 96);\n  text-align: center;\n}\n\n.logistic_detail-duration {\n  color: rgb(32, 32, 32);\n  font-weight: 600;\n  margin-top: 10px;\n  display: inline-block;\n}\n\n.logistic_price {\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 0px 8px;\n}\n\n.logistic_price_original {\n  text-decoration: line-through;\n  font-weight: 400;\n  font-size: 15px;\n  color: rgb(157, 157, 157);\n  text-align: center;\n}\n\n.logistic_item {\n  border: 1px solid rgb(239, 239, 239);\n  border-radius: 8px;\n  padding: 25px 0px;\n  cursor: pointer;\n  margin-bottom: 15px;\n}\n.logistic_item.logistic_item--active {\n  border: 1px solid rgb(0, 162, 216);\n  padding: 25px 0px 0px;\n}\n\n.logistic_insurance {\n  border-top: 1px solid rgb(239, 239, 239);\n  padding: 1rem;\n}\n\n.logistic_insurance-action {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.checkbox_container {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n\n.logistic_insurance-rate {\n  font-size: 0.875rem;\n  font-weight: 500;\n  opacity: 0.4;\n}\n.logistic_insurance-rate.logistic_insurance-rate--checked {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=ShippingRates.vue.map */'] }, media: void 0 });
  };
  var __vue_scope_id__ = "data-v-824dd9f6";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../shipper/shipper/public/js/ShippingRates.vue";
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
  var ShippingRates_default = __vue_component__;

  // ../shipper/shipper/public/js/OrderDetail.vue
  var __vue_script__2 = {
    name: "OrderDetail",
    props: {
      frm: Object
    },
    computed: {
      order() {
        return this.frm.doc.order;
      },
      consigner() {
        let consigner = this.order.consigner;
        return [consigner.name, consigner.email, consigner.phone_number].filter(Boolean).join(" / ");
      },
      consignee() {
        let consignee = this.order.consignee;
        return [consignee.name, consignee.email, consignee.phone_number].filter(Boolean).join(" / ");
      },
      courierAmount() {
        if (this.order.courier.use_insurance) {
          return this.order.courier.amount + this.order.courier.insurance_amount;
        }
        return this.order.courier.amount;
      }
    },
    methods: {
      fmt_currency(v, c, d) {
        return window.format_currency(v, c, d);
      },
      moment(...args) {
        return window.moment(...args);
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("section", [
      _c("div", { staticClass: "left-side" }, [
        _c("div", { staticClass: "root" }, [
          _c("div", { staticClass: "jsx-4014501257 row-shipper" }, [
            _c("div", { staticClass: "jsx-2949780125 col-shipper" }, [
              _c("div", { staticClass: "jsx-2813964643 row-shipper" }, [
                _c("div", { staticClass: "jsx-373512853 col-shipper" }, [
                  _c("div", [
                    _c("span", { staticClass: "title" }, [_vm._v("Order ID ")]),
                    _vm._v("\xA0\xA0\n                "),
                    _c("span", { staticClass: "title value" }, [
                      _vm._v(_vm._s(_vm.order.order_id))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(0)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "jsx-2949780125 col-shipper" }, [
              _c("div", { staticClass: "jsx-3885130700 row-shipper" }, [
                _c("div", { staticClass: "jsx-2949780125 col-shipper" }, [
                  _c("div", { staticClass: "box" }, [
                    _c("div", { staticClass: "box-content" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("p", { staticClass: "box-paragraph" }, [
                        _vm._v("\n                    " + _vm._s(_vm.consigner) + "\n                  ")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "box-paragraph" }, [
                        _vm._v("\n                    " + _vm._s(_vm.order.origin.address) + ", " + _vm._s(_vm.order.origin.area_name) + ",\n                    " + _vm._s(_vm.order.origin.suburb_name) + "\n                  ")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "box-paragraph" }, [
                        _vm._v("\n                    " + _vm._s(_vm.order.origin.city_name) + ",\n                    " + _vm._s(_vm.order.origin.postcode) + " -\n                    " + _vm._s(_vm.order.origin.country_name) + "\n                  ")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "jsx-2949780125 col-shipper" }, [
                  _c("div", { staticClass: "box" }, [
                    _c("div", { staticClass: "box-content" }, [
                      _c("div", { staticClass: "box-title" }, [
                        _vm._v("Data Penerima")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "box-paragraph" }, [
                        _vm._v(_vm._s(_vm.consignee))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "box-paragraph" }, [
                        _vm._v("\n                    " + _vm._s(_vm.order.destination.address) + ",\n                    " + _vm._s(_vm.order.destination.area_name) + ",\n                    " + _vm._s(_vm.order.destination.suburb_name) + "\n                  ")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "box-paragraph" }, [
                        _vm._v("\n                    " + _vm._s(_vm.order.destination.city_name) + ",\n                    " + _vm._s(_vm.order.destination.postcode) + " -\n                    " + _vm._s(_vm.order.destination.country_name) + "\n                  ")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "jsx-2949780125 col-shipper" }, [
                  _c("div", { staticClass: "box" }, [
                    _c("div", { staticClass: "box-content" }, [
                      _c("div", { staticClass: "box-title" }, [
                        _vm._v("Detail Paket dan Logistik")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.order.package.items, function(item) {
                        return _c("p", { key: item.id, staticClass: "box-paragraph" }, [
                          _vm._v("\n                    " + _vm._s(item.name) + " / " + _vm._s(_vm.fmt_currency(item.price, "IDR")) + " /\n                    " + _vm._s(item.qty) + " barang\n                  ")
                        ]);
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "box-paragraph" }, [
                        _vm._v("\n                    " + _vm._s(_vm.order.package.length) + " x " + _vm._s(_vm.order.package.width) + " x\n                    " + _vm._s(_vm.order.package.height) + " cm /\n                    " + _vm._s(_vm.order.package.weight) + " Kg\n                  ")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "box-paragraph" }, [
                        _vm._v("\n                    " + _vm._s(_vm.order.courier.name) + " - " + _vm._s(_vm.order.courier.rate_name) + " /\n                    " + _vm._s(_vm.fmt_currency(_vm.courierAmount, "IDR")) + "\n                  ")
                      ])
                    ], 2),
                    _vm._v(" "),
                    _vm._m(2)
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right-side" }, [
        _c("div", { staticClass: "wrapper" }, [
          _c("div", { staticClass: "card" }, [
            _c("h4", [_vm._v("Estimasi Tagihan")]),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "order" }, [
              _c("div", { staticClass: "order_title" }, [
                _c("div", { staticClass: "jsx-502944319 row-shipper root" }, [
                  _c("div", { staticClass: "jsx-1280719509 col-shipper" }, [
                    _c("div", { staticClass: "city" }, [
                      _vm._v(_vm._s(_vm.order.origin.city_name))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "jsx-1280719509 col-shipper" }, [
                    _c("div", { staticClass: "city" }, [
                      _vm._v(_vm._s(_vm.order.destination.city_name))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "order_detail" }, [
                _c("div", { staticClass: "order_detail-item" }, [
                  _c("div", [
                    _vm._v("\n                " + _vm._s(_vm.order.courier.name) + " - " + _vm._s(_vm.order.courier.rate_name) + "\n              ")
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(_vm._s(_vm.fmt_currency(_vm.order.courier.amount, "IDR")))
                  ])
                ]),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm.order.courier.insurance_amount ? _c("div", { staticClass: "order_detail-item" }, [
                  _c("div", [
                    _vm._v("Asuransi - " + _vm._s(_vm.order.courier.name))
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v("\n                " + _vm._s(_vm.fmt_currency(_vm.order.courier.insurance_amount, "IDR")) + "\n              ")
                  ])
                ]) : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "order_detail-item order_detail-total" }, [
                _c("div", [_vm._v("Total Biaya")]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(_vm._s(_vm.fmt_currency(_vm.courierAmount, "IDR")))
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("div", { staticClass: "card" }, [
              _c("h4", [_vm._v("Status Pengiriman")]),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _vm._l(_vm.order.trackings, function(tracking) {
                return _c("div", { staticClass: "status" }, [
                  _c("div", { staticClass: "status_item" }, [
                    _c("div", { staticClass: "status_icon" }, [
                      _c("svg", {
                        attrs: {
                          width: "20",
                          height: "20",
                          viewBox: "0 0 20 20",
                          fill: "none"
                        }
                      }, [
                        _c("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M19.5035 0.496651C19.0469 0.0399837 18.3846 -0.115572 17.7713 0.0877616L1.15668 5.62666C0.464449 5.85666 0 6.50221 0 7.23221C0 7.9611 0.465561 8.60666 1.15668 8.83666L7.56453 10.9733L12.3435 6.19443C12.7468 5.78999 13.4013 5.78999 13.8057 6.19443C14.2102 6.59888 14.2102 7.25332 13.8057 7.65666L9.02676 12.4356L11.1635 18.8433C11.3935 19.5356 12.039 20 12.769 20C13.4979 20 14.1435 19.5356 14.3735 18.8433L19.9124 2.22887C20.1158 1.61665 19.9591 0.953318 19.5035 0.496651Z"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "status_detail" }, [
                      _c("div", [
                        _c("div", { staticClass: "status_time" }, [
                          _vm._v("\n                    " + _vm._s(_vm.moment(tracking.created_date).format("DD-MM-YYYY, HH:mm")) + "\n                  ")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "status_name" }, [
                          _vm._v("\n                    " + _vm._s(tracking.shipper_status.name) + "\n                  ")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "status_time" }, [
                          _vm._v("\n                    " + _vm._s(tracking.shipper_status.description) + "\n                  ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("div", { staticClass: "status_time" }, [
                          _vm._v("\n                    " + _vm._s(_vm.moment(tracking.created_date).format("DD-MM-YYYY, HH:mm")) + "\n                  ")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "status_name" }, [
                          _vm._v("\n                    " + _vm._s(tracking.logistic_status.name) + "\n                  ")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "status_time" }, [
                          _vm._v("\n                    " + _vm._s(tracking.logistic_status.description) + "\n                  ")
                        ])
                      ])
                    ])
                  ])
                ]);
              })
            ], 2),
            _vm._v(" "),
            _vm._m(8)
          ])
        ])
      ])
    ]);
  };
  var __vue_staticRenderFns__2 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "jsx-373512853 col-shipper" }, [
        _c("div", { staticClass: "tag_wrapper tag_yellow_light tag-medium" }, [
          _c("div", { staticClass: "tag_text", attrs: { id: "orderStatus" } }, [
            _vm._v("\n                  Paket sedang dipersiapkan\n                ")
          ])
        ])
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "consigner-header" }, [
        _c("div", { staticClass: "box-title" }, [_vm._v("Data Pengirim")])
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "box-action" }, [
        _c("span", { attrs: { id: "linkToChangeData", "aria-hidden": "true" } }, [
          _vm._v("Ubah")
        ])
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", {
          staticClass: "notification_wrapper notification_blue notification-medium",
          attrs: { id: "estimatedBillNotification" }
        }, [
          _c("div", { staticClass: "notification_text-subtitle" }, [
            _c("span", [
              _vm._v("\n                Anda tidak perlu membayar apa pun pada driver kami. Pembayaran\n                akan ditagihkan setiap akhir bulan.\n              ")
            ])
          ])
        ])
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "jsx-1280719509 col-shipper" }, [
        _c("img", {
          attrs: {
            src: "https://assets-cdn-np.shipper.id/sandbox/bos-web/v1.35.0-alpha6/assets/images/icon-arrow-alt.svg",
            alt: "icon to"
          }
        })
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "order_info" }, [
        _c("p", [
          _vm._v("\n              Jika paket dijemput setelah pukul 12:00 (Express) atau 18:00\n              (Reguler), maka perkiraan tiba akan bertambah satu hari dari\n              yang dijadwalkan.\n            ")
        ])
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "order_detail-item" }, [
        _c("div", [_vm._v("Pajak")]),
        _vm._v(" "),
        _c("div", [_vm._v("Termasuk")])
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "status_title" }, [
        _c("h5", [_vm._v("Shipper Status")]),
        _vm._v(" "),
        _c("h5", [_vm._v("Logistic Status")])
      ]);
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("button", {
          staticClass: "pickup-action",
          staticStyle: { "margin-bottom": "1rem" },
          attrs: { id: "selectPickupTimeSlotButton", type: "button" }
        }, [
          _c("div", {
            staticClass: "btn btn-primary btn_medium",
            attrs: { role: "button" }
          }, [_c("span", [_vm._v("Jadwalkan Pickup")])])
        ]),
        _vm._v(" "),
        _c("button", {
          staticClass: "pickup-action",
          attrs: { id: "cancelOrderButton", type: "button" }
        }, [
          _c("div", {
            staticClass: "btn btn-white btn_medium",
            attrs: { role: "button" }
          }, [_c("span", [_vm._v("Batalkan Order")])])
        ])
      ]);
    }
  ];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-1376332f_0", { source: "\nsection[data-v-1376332f] {\n  display: grid;\n  grid-template-columns: 48% 52%;\n  margin-right: -20px;\n  margin-top: -14px;\n  margin-bottom: -6px;\n}\n@media only screen and (max-width: 768px) {\nsection[data-v-1376332f] {\n    grid-template-columns: 1fr;\n    margin-right: 0;\n    margin-top: 0;\n}\n}\n.root[data-v-1376332f] {\n  padding: 25px 25px 25px 0px;\n}\n.row-shipper.jsx-4014501257[data-v-1376332f] {\n  display: flex;\n  justify-content: unset;\n  align-items: unset;\n  flex-flow: row wrap;\n}\n@media only screen and (min-width: 0px) {\n.row-shipper.jsx-4014501257[data-v-1376332f] {\n    row-gap: 25px;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n}\n@media only screen and (min-width: 768px) {\n.row-shipper.jsx-4014501257[data-v-1376332f] {\n    row-gap: 25px;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n}\n@media only screen and (min-width: 0px) {\n.col-shipper.jsx-2949780125[data-v-1376332f] {\n    padding-left: 0px;\n    padding-right: 0px;\n    flex: 0 0 100%;\n    max-width: 100%;\n    order: 0;\n    display: block;\n}\n}\n@media only screen and (min-width: calc(768px)) {\n.col-shipper.jsx-2949780125[data-v-1376332f] {\n    padding-left: 0px;\n    padding-right: 0px;\n    flex: 0 0 100%;\n    max-width: 100%;\n    order: 0;\n    display: block;\n}\n}\n.btn-back[data-v-1376332f] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(243, 243, 243);\n  border-radius: 100%;\n}\n.btn-back img[data-v-1376332f] {\n  position: relative;\n  left: 0px;\n  transition: left 0.3s ease 0s;\n}\n.row-shipper.jsx-2813964643[data-v-1376332f] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row wrap;\n}\n@media only screen and (min-width: 0px) {\n.row-shipper.jsx-2813964643[data-v-1376332f] {\n    row-gap: 14px;\n    margin-left: -7px;\n    margin-right: -7px;\n}\n}\n@media only screen and (min-width: 768px) {\n.row-shipper.jsx-2813964643[data-v-1376332f] {\n    row-gap: 14px;\n    margin-left: -7px;\n    margin-right: -7px;\n}\n}\n@media only screen and (min-width: 0px) {\n.col-shipper.jsx-373512853[data-v-1376332f] {\n    padding-left: 7px;\n    padding-right: 7px;\n    order: 0;\n    display: block;\n}\n}\n@media only screen and (min-width: calc(768px)) {\n.col-shipper.jsx-373512853[data-v-1376332f] {\n    padding-left: 7px;\n    padding-right: 7px;\n    order: 0;\n    display: block;\n}\n}\n.title[data-v-1376332f] {\n  font-size: 28px;\n  line-height: 35px;\n  text-transform: capitalize;\n  color: rgb(32, 32, 32);\n}\n.title.value[data-v-1376332f] {\n  font-weight: bold;\n}\n.tag_wrapper[data-v-1376332f] {\n  display: inline-block;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.tag_yellow_light[data-v-1376332f] {\n  background-color: rgb(255, 244, 192);\n  color: rgb(166, 142, 29);\n}\n.tag-medium[data-v-1376332f] {\n  font-size: 14px;\n  min-width: inherit;\n}\n.tag_text[data-v-1376332f] {\n  padding: 6px 14px;\n  font-weight: 500;\n  text-align: center;\n}\n.row-shipper.jsx-3885130700[data-v-1376332f] {\n  display: flex;\n  justify-content: unset;\n  align-items: unset;\n  flex-flow: row wrap;\n}\n@media only screen and (min-width: 0px) {\n.row-shipper.jsx-3885130700[data-v-1376332f] {\n    row-gap: 20px;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n}\n@media only screen and (min-width: 768px) {\n.row-shipper.jsx-3885130700[data-v-1376332f] {\n    row-gap: 20px;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n}\n.box[data-v-1376332f] {\n  position: relative;\n  padding: 25px;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(239, 239, 239);\n  border-radius: 8px;\n  display: flex;\n}\n.box-content[data-v-1376332f] {\n  flex: 1 1 0%;\n}\n.box-content .consigner-header[data-v-1376332f] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.box-title[data-v-1376332f] {\n  color: rgb(32, 32, 32);\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 25px;\n  padding-bottom: 10px;\n}\n.box-content .consigner-header .box-title[data-v-1376332f] {\n  padding-bottom: 0px;\n}\n.box-paragraph[data-v-1376332f] {\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: -0.015em;\n  color: rgb(96, 96, 96);\n  margin-block: 5px 0px;\n}\n\n/* right */\n.right-side[data-v-1376332f]:last-child {\n  background-color: rgb(243, 243, 243);\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n@media only screen and (max-width: 768px) {\n.right-side[data-v-1376332f] {\n    margin-left: -20px;\n    margin-right: -20px;\n}\n.root[data-v-1376332f] {\n    padding: 0px;\n    padding-bottom: 1rem;\n}\n}\n.wrapper[data-v-1376332f] {\n  padding: 30px 25px;\n}\n.card[data-v-1376332f] {\n  background: #fff;\n  border: 1px solid #efefef;\n  border-radius: 8px;\n  padding: 25px;\n  margin-bottom: 25px;\n}\n.card h4[data-v-1376332f] {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n.notification_wrapper[data-v-1376332f] {\n  width: 100%;\n  display: inline-block;\n  overflow: hidden;\n  border-radius: 4px;\n  padding: 15px 20px;\n}\n.notification_blue[data-v-1376332f] {\n  background-color: rgb(229, 246, 251);\n  color: rgb(0, 162, 216);\n}\n.notification-medium[data-v-1376332f] {\n  font-size: 14px;\n}\n.notification_text-subtitle[data-v-1376332f] {\n  line-height: 1.4;\n}\n.order_title[data-v-1376332f] {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.row-shipper.jsx-502944319[data-v-1376332f] {\n  display: flex;\n  justify-content: unset;\n  align-items: center;\n  flex-flow: row wrap;\n}\n@media only screen and (min-width: 0px) {\n.row-shipper.jsx-502944319[data-v-1376332f] {\n    row-gap: 12px;\n    margin-left: -6px;\n    margin-right: -6px;\n}\n}\n@media only screen and (min-width: 768px) {\n.row-shipper.jsx-502944319[data-v-1376332f] {\n    row-gap: 12px;\n    margin-left: -6px;\n    margin-right: -6px;\n}\n}\n@media only screen and (min-width: 0px) {\n.col-shipper.jsx-1280719509[data-v-1376332f] {\n    padding-left: 6px;\n    padding-right: 6px;\n    order: 0;\n    display: block;\n}\n}\n@media only screen and (min-width: calc(768px)) {\n.col-shipper.jsx-1280719509[data-v-1376332f] {\n    padding-left: 6px;\n    padding-right: 6px;\n    order: 0;\n    display: block;\n}\n}\n.city[data-v-1376332f] {\n  word-break: break-word;\n  text-transform: capitalize;\n}\nimg[data-v-1376332f] {\n  transform: rotate(180deg);\n  width: 12px;\n}\n.order_info[data-v-1376332f] {\n  border-bottom: 1px solid rgb(224, 224, 224);\n  margin-bottom: 25px;\n}\n.order_info > p[data-v-1376332f] {\n  color: rgb(0, 162, 216);\n  font-size: 14px;\n  line-height: 20px;\n}\n.order_detail[data-v-1376332f] {\n  border-bottom: 2px dashed rgb(239, 239, 239);\n  padding-bottom: 10px;\n}\n.order_detail-item[data-v-1376332f] {\n  color: rgb(96, 96, 96);\n  display: grid;\n  grid-template-columns: 60% 1fr;\n  margin-bottom: 15px;\n}\n.order_detail-item > div[data-v-1376332f]:last-child {\n  text-align: right;\n}\n.order_detail-total[data-v-1376332f] {\n  margin: 25px 0px 0px;\n  color: rgb(32, 32, 32);\n  font-size: 22px;\n  font-weight: 600;\n}\n.status_title[data-v-1376332f] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n}\n.status_title h5[data-v-1376332f] {\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: 500;\n  color: rgb(112, 112, 112);\n}\n@media only screen and (max-width: 425px) {\n.status_title[data-v-1376332f] {\n    display: none;\n}\n}\n.status[data-v-1376332f] {\n  position: relative;\n}\n.status_item[data-v-1376332f] {\n  display: grid;\n  grid-template-columns: 50px 1fr;\n  gap: 5px;\n  margin-bottom: 45px;\n  word-break: break-word;\n  position: relative;\n}\n.status_item[data-v-1376332f]:last-child {\n  margin-bottom: 0px;\n}\n.status_icon[data-v-1376332f] {\n  width: 40px;\n  height: 40px;\n  background-color: rgb(243, 243, 243);\n  border-radius: 50%;\n  text-align: center;\n  padding-top: 12px;\n  position: relative;\n  z-index: 2;\n}\n.status_item:first-child .status_icon[data-v-1376332f] {\n  background-color: rgb(229, 246, 251);\n}\n.status_item:first-child svg[data-v-1376332f] {\n  fill: rgb(0, 162, 216);\n}\n.status_detail[data-v-1376332f] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n@media only screen and (max-width: 425px) {\n.status_detail[data-v-1376332f] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n}\n}\n.status_time[data-v-1376332f] {\n  color: rgb(173, 173, 173);\n  font-size: 14px;\n}\n.status_name[data-v-1376332f] {\n  color: rgb(32, 32, 32);\n  margin: 5px 0px;\n  font-weight: 600;\n}\n.pickup-action[data-v-1376332f] {\n  width: 100%;\n  padding: 0;\n  outline: none;\n  border: none;\n}\n.btn[data-v-1376332f] {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  transition: background-color 0.3s ease 0s;\n}\n.btn_medium[data-v-1376332f] {\n  font-size: 16px;\n  padding: 15px 20px;\n  font-weight: 500;\n}\n.btn-primary[data-v-1376332f] {\n  color: rgb(255, 255, 255);\n  background-color: rgb(240, 74, 65);\n}\n.btn-white[data-v-1376332f] {\n  color: rgb(255, 69, 59);\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(255, 69, 59);\n}\n", map: { "version": 3, "sources": ["../shipper/shipper/public/js/OrderDetail.vue"], "names": [], "mappings": ";AAuSA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,0BAAA;IACA,eAAA;IACA,aAAA;AACA;AACA;AAEA;EACA,2BAAA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,cAAA;IACA,eAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,cAAA;IACA,eAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCAAA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;EACA,SAAA;EACA,6BAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;EACA,eAAA;EACA,iBAAA;EACA,0BAAA;EACA,sBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,oCAAA;EACA,wBAAA;AACA;AAEA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;AACA;AACA;AAEA;EACA,kBAAA;EACA,aAAA;EACA,oCAAA;EACA,oCAAA;EACA,kBAAA;EACA,aAAA;AACA;AAEA;EACA,YAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AACA;AAEA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;EACA,sBAAA;EACA,qBAAA;AACA;;AAEA,UAAA;AACA;EACA,oCAAA;EACA,4BAAA;EACA,+BAAA;AACA;AAEA;AACA;IACA,kBAAA;IACA,mBAAA;AACA;AACA;IACA,YAAA;IACA,oBAAA;AACA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AACA;AAEA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;EACA,oCAAA;EACA,uBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;EACA,sBAAA;EACA,0BAAA;AACA;AAEA;EACA,yBAAA;EACA,WAAA;AACA;AAEA;EACA,2CAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;AACA;AAEA;EACA,4CAAA;EACA,oBAAA;AACA;AAEA;EACA,sBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,oBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,SAAA;AACA;AAEA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;AACA;AAEA;AACA;IACA,aAAA;AACA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,+BAAA;EACA,QAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,sBAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,SAAA;AACA;AAEA;AACA;IACA,0BAAA;IACA,SAAA;AACA;AACA;AACA;EACA,yBAAA;EACA,eAAA;AACA;AAEA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;AACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;AACA;AAEA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,yBAAA;EACA,kCAAA;AACA;AAEA;EACA,uBAAA;EACA,oCAAA;EACA,kCAAA;AACA", "file": "OrderDetail.vue", "sourcesContent": [`<template>
  <section>
    <!-- Left Side -->
    <div class="left-side">
      <div class="root">
        <div class="jsx-4014501257 row-shipper">
          <div class="jsx-2949780125 col-shipper">
            <div class="jsx-2813964643 row-shipper">
              <div class="jsx-373512853 col-shipper">
                <div>
                  <span class="title">Order ID </span>&nbsp;&nbsp;
                  <span class="title value">{{ order.order_id }}</span>
                </div>
              </div>
              <div class="jsx-373512853 col-shipper">
                <div class="tag_wrapper tag_yellow_light tag-medium">
                  <div id="orderStatus" class="tag_text">
                    Paket sedang dipersiapkan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="jsx-2949780125 col-shipper">
            <div class="jsx-3885130700 row-shipper">
              <div class="jsx-2949780125 col-shipper">
                <div class="box">
                  <div class="box-content">
                    <div class="consigner-header">
                      <div class="box-title">Data Pengirim</div>
                    </div>
                    <p class="box-paragraph">
                      {{ consigner }}
                    </p>
                    <p class="box-paragraph">
                      {{ order.origin.address }}, {{ order.origin.area_name }},
                      {{ order.origin.suburb_name }}
                    </p>
                    <p class="box-paragraph">
                      {{ order.origin.city_name }},
                      {{ order.origin.postcode }} -
                      {{ order.origin.country_name }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="jsx-2949780125 col-shipper">
                <div class="box">
                  <div class="box-content">
                    <div class="box-title">Data Penerima</div>
                    <p class="box-paragraph">{{ consignee }}</p>
                    <p class="box-paragraph">
                      {{ order.destination.address }},
                      {{ order.destination.area_name }},
                      {{ order.destination.suburb_name }}
                    </p>
                    <p class="box-paragraph">
                      {{ order.destination.city_name }},
                      {{ order.destination.postcode }} -
                      {{ order.destination.country_name }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="jsx-2949780125 col-shipper">
                <div class="box">
                  <div class="box-content">
                    <div class="box-title">Detail Paket dan Logistik</div>
                    <p
                      v-for="item in order.package.items"
                      :key="item.id"
                      class="box-paragraph"
                    >
                      {{ item.name }} / {{ fmt_currency(item.price, 'IDR') }} /
                      {{ item.qty }} barang
                    </p>
                    <p class="box-paragraph">
                      {{ order.package.length }} x {{ order.package.width }} x
                      {{ order.package.height }} cm /
                      {{ order.package.weight }} Kg
                    </p>
                    <p class="box-paragraph">
                      {{ order.courier.name }} - {{ order.courier.rate_name }} /
                      {{ fmt_currency(courierAmount, 'IDR') }}
                    </p>
                  </div>
                  <div class="box-action">
                    <span id="linkToChangeData" aria-hidden="true">Ubah</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Left Side -->

    <!-- Right side -->
    <div class="right-side">
      <div class="wrapper">
        <div class="card">
          <h4>Estimasi Tagihan</h4>
          <div>
            <div
              id="estimatedBillNotification"
              class="notification_wrapper notification_blue notification-medium"
            >
              <div class="notification_text-subtitle">
                <span>
                  Anda tidak perlu membayar apa pun pada driver kami. Pembayaran
                  akan ditagihkan setiap akhir bulan.
                </span>
              </div>
            </div>
          </div>
          <div class="order">
            <div class="order_title">
              <div class="jsx-502944319 row-shipper root">
                <div class="jsx-1280719509 col-shipper">
                  <div class="city">{{ order.origin.city_name }}</div>
                </div>
                <div class="jsx-1280719509 col-shipper">
                  <img
                    src="https://assets-cdn-np.shipper.id/sandbox/bos-web/v1.35.0-alpha6/assets/images/icon-arrow-alt.svg"
                    alt="icon to"
                  />
                </div>
                <div class="jsx-1280719509 col-shipper">
                  <div class="city">{{ order.destination.city_name }}</div>
                </div>
              </div>
            </div>
            <div class="order_info">
              <p>
                Jika paket dijemput setelah pukul 12:00 (Express) atau 18:00
                (Reguler), maka perkiraan tiba akan bertambah satu hari dari
                yang dijadwalkan.
              </p>
            </div>
            <div class="order_detail">
              <div class="order_detail-item">
                <div>
                  {{ order.courier.name }} - {{ order.courier.rate_name }}
                </div>
                <div>{{ fmt_currency(order.courier.amount, 'IDR') }}</div>
              </div>
              <div class="order_detail-item">
                <div>Pajak</div>
                <div>Termasuk</div>
              </div>
              <div
                v-if="order.courier.insurance_amount"
                class="order_detail-item"
              >
                <div>Asuransi - {{ order.courier.name }}</div>
                <div>
                  {{ fmt_currency(order.courier.insurance_amount, 'IDR') }}
                </div>
              </div>
            </div>
            <div class="order_detail-item order_detail-total">
              <div>Total Biaya</div>
              <div>{{ fmt_currency(courierAmount, 'IDR') }}</div>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <h4>Status Pengiriman</h4>
            <div class="status_title">
              <h5>Shipper Status</h5>
              <h5>Logistic Status</h5>
            </div>
            <div v-for="tracking in order.trackings" class="status">
              <div class="status_item">
                <div class="status_icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.5035 0.496651C19.0469 0.0399837 18.3846 -0.115572 17.7713 0.0877616L1.15668 5.62666C0.464449 5.85666 0 6.50221 0 7.23221C0 7.9611 0.465561 8.60666 1.15668 8.83666L7.56453 10.9733L12.3435 6.19443C12.7468 5.78999 13.4013 5.78999 13.8057 6.19443C14.2102 6.59888 14.2102 7.25332 13.8057 7.65666L9.02676 12.4356L11.1635 18.8433C11.3935 19.5356 12.039 20 12.769 20C13.4979 20 14.1435 19.5356 14.3735 18.8433L19.9124 2.22887C20.1158 1.61665 19.9591 0.953318 19.5035 0.496651Z"
                    ></path>
                  </svg>
                </div>
                <div class="status_detail">
                  <div>
                    <div class="status_time">
                      {{
                        moment(tracking.created_date).format(
                          'DD-MM-YYYY, HH:mm'
                        )
                      }}
                    </div>
                    <div class="status_name">
                      {{ tracking.shipper_status.name }}
                    </div>
                    <div class="status_time">
                      {{ tracking.shipper_status.description }}
                    </div>
                  </div>
                  <div>
                    <div class="status_time">
                      {{
                        moment(tracking.created_date).format(
                          'DD-MM-YYYY, HH:mm'
                        )
                      }}
                    </div>
                    <div class="status_name">
                      {{ tracking.logistic_status.name }}
                    </div>
                    <div class="status_time">
                      {{ tracking.logistic_status.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              id="selectPickupTimeSlotButton"
              class="pickup-action"
              type="button"
              style="margin-bottom: 1rem"
            >
              <div role="button" class="btn btn-primary btn_medium">
                <span>Jadwalkan Pickup</span>
              </div>
            </button>
            <button id="cancelOrderButton" class="pickup-action" type="button">
              <div role="button" class="btn btn-white btn_medium">
                <span>Batalkan Order</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /Right side -->
  </section>
</template>

<script>
export default {
  name: 'OrderDetail',

  props: {
    frm: Object
  },

  computed: {
    order() {
      return this.frm.doc.order
    },

    consigner() {
      let consigner = this.order.consigner

      return [consigner.name, consigner.email, consigner.phone_number]
        .filter(Boolean)
        .join(' / ')
    },

    consignee() {
      let consignee = this.order.consignee

      return [consignee.name, consignee.email, consignee.phone_number]
        .filter(Boolean)
        .join(' / ')
    },

    courierAmount() {
      if (this.order.courier.use_insurance) {
        return this.order.courier.amount + this.order.courier.insurance_amount
      }

      return this.order.courier.amount
    }
  },

  methods: {
    fmt_currency(v, c, d) {
      return window.format_currency(v, c, d)
    },

    moment(...args) {
      return window.moment(...args)
    }
  }
}
<\/script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 48% 52%;
  margin-right: -20px;
  margin-top: -14px;
  margin-bottom: -6px;
}

@media only screen and (max-width: 768px) {
  section {
    grid-template-columns: 1fr;
    margin-right: 0;
    margin-top: 0;
  }
}

.root {
  padding: 25px 25px 25px 0px;
}

.row-shipper.jsx-4014501257 {
  display: flex;
  justify-content: unset;
  align-items: unset;
  flex-flow: row wrap;
}

@media only screen and (min-width: 0px) {
  .row-shipper.jsx-4014501257 {
    row-gap: 25px;
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media only screen and (min-width: 768px) {
  .row-shipper.jsx-4014501257 {
    row-gap: 25px;
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media only screen and (min-width: 0px) {
  .col-shipper.jsx-2949780125 {
    padding-left: 0px;
    padding-right: 0px;
    flex: 0 0 100%;
    max-width: 100%;
    order: 0;
    display: block;
  }
}

@media only screen and (min-width: calc(768px)) {
  .col-shipper.jsx-2949780125 {
    padding-left: 0px;
    padding-right: 0px;
    flex: 0 0 100%;
    max-width: 100%;
    order: 0;
    display: block;
  }
}

.btn-back {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(243, 243, 243);
  border-radius: 100%;
}

.btn-back img {
  position: relative;
  left: 0px;
  transition: left 0.3s ease 0s;
}

.row-shipper.jsx-2813964643 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
}

@media only screen and (min-width: 0px) {
  .row-shipper.jsx-2813964643 {
    row-gap: 14px;
    margin-left: -7px;
    margin-right: -7px;
  }
}

@media only screen and (min-width: 768px) {
  .row-shipper.jsx-2813964643 {
    row-gap: 14px;
    margin-left: -7px;
    margin-right: -7px;
  }
}

@media only screen and (min-width: 0px) {
  .col-shipper.jsx-373512853 {
    padding-left: 7px;
    padding-right: 7px;
    order: 0;
    display: block;
  }
}

@media only screen and (min-width: calc(768px)) {
  .col-shipper.jsx-373512853 {
    padding-left: 7px;
    padding-right: 7px;
    order: 0;
    display: block;
  }
}

.title {
  font-size: 28px;
  line-height: 35px;
  text-transform: capitalize;
  color: rgb(32, 32, 32);
}

.title.value {
  font-weight: bold;
}

.tag_wrapper {
  display: inline-block;
  overflow: hidden;
  border-radius: 4px;
}

.tag_yellow_light {
  background-color: rgb(255, 244, 192);
  color: rgb(166, 142, 29);
}

.tag-medium {
  font-size: 14px;
  min-width: inherit;
}

.tag_text {
  padding: 6px 14px;
  font-weight: 500;
  text-align: center;
}

.row-shipper.jsx-3885130700 {
  display: flex;
  justify-content: unset;
  align-items: unset;
  flex-flow: row wrap;
}

@media only screen and (min-width: 0px) {
  .row-shipper.jsx-3885130700 {
    row-gap: 20px;
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media only screen and (min-width: 768px) {
  .row-shipper.jsx-3885130700 {
    row-gap: 20px;
    margin-left: 0px;
    margin-right: 0px;
  }
}

.box {
  position: relative;
  padding: 25px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(239, 239, 239);
  border-radius: 8px;
  display: flex;
}

.box-content {
  flex: 1 1 0%;
}

.box-content .consigner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.box-title {
  color: rgb(32, 32, 32);
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  padding-bottom: 10px;
}

.box-content .consigner-header .box-title {
  padding-bottom: 0px;
}

.box-paragraph {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: rgb(96, 96, 96);
  margin-block: 5px 0px;
}

/* right */
.right-side:last-child {
  background-color: rgb(243, 243, 243);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

@media only screen and (max-width: 768px) {
  .right-side {
    margin-left: -20px;
    margin-right: -20px;
  }
  .root {
    padding: 0px;
    padding-bottom: 1rem;
  }
}

.wrapper {
  padding: 30px 25px;
}

.card {
  background: #fff;
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 25px;
}

.card h4 {
  font-size: 1.125rem;
  font-weight: 700;
}

.notification_wrapper {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  border-radius: 4px;
  padding: 15px 20px;
}

.notification_blue {
  background-color: rgb(229, 246, 251);
  color: rgb(0, 162, 216);
}

.notification-medium {
  font-size: 14px;
}

.notification_text-subtitle {
  line-height: 1.4;
}

.order_title {
  font-size: 1.125rem;
  font-weight: 600;
}

.row-shipper.jsx-502944319 {
  display: flex;
  justify-content: unset;
  align-items: center;
  flex-flow: row wrap;
}

@media only screen and (min-width: 0px) {
  .row-shipper.jsx-502944319 {
    row-gap: 12px;
    margin-left: -6px;
    margin-right: -6px;
  }
}

@media only screen and (min-width: 768px) {
  .row-shipper.jsx-502944319 {
    row-gap: 12px;
    margin-left: -6px;
    margin-right: -6px;
  }
}

@media only screen and (min-width: 0px) {
  .col-shipper.jsx-1280719509 {
    padding-left: 6px;
    padding-right: 6px;
    order: 0;
    display: block;
  }
}

@media only screen and (min-width: calc(768px)) {
  .col-shipper.jsx-1280719509 {
    padding-left: 6px;
    padding-right: 6px;
    order: 0;
    display: block;
  }
}

.city {
  word-break: break-word;
  text-transform: capitalize;
}

img {
  transform: rotate(180deg);
  width: 12px;
}

.order_info {
  border-bottom: 1px solid rgb(224, 224, 224);
  margin-bottom: 25px;
}

.order_info > p {
  color: rgb(0, 162, 216);
  font-size: 14px;
  line-height: 20px;
}

.order_detail {
  border-bottom: 2px dashed rgb(239, 239, 239);
  padding-bottom: 10px;
}

.order_detail-item {
  color: rgb(96, 96, 96);
  display: grid;
  grid-template-columns: 60% 1fr;
  margin-bottom: 15px;
}

.order_detail-item > div:last-child {
  text-align: right;
}

.order_detail-total {
  margin: 25px 0px 0px;
  color: rgb(32, 32, 32);
  font-size: 22px;
  font-weight: 600;
}

.status_title {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.status_title h5 {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: rgb(112, 112, 112);
}

@media only screen and (max-width: 425px) {
  .status_title {
    display: none;
  }
}

.status {
  position: relative;
}

.status_item {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 5px;
  margin-bottom: 45px;
  word-break: break-word;
  position: relative;
}

.status_item:last-child {
  margin-bottom: 0px;
}

.status_icon {
  width: 40px;
  height: 40px;
  background-color: rgb(243, 243, 243);
  border-radius: 50%;
  text-align: center;
  padding-top: 12px;
  position: relative;
  z-index: 2;
}

.status_item:first-child .status_icon {
  background-color: rgb(229, 246, 251);
}

.status_item:first-child svg {
  fill: rgb(0, 162, 216);
}

.status_detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media only screen and (max-width: 425px) {
  .status_detail {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
.status_time {
  color: rgb(173, 173, 173);
  font-size: 14px;
}

.status_name {
  color: rgb(32, 32, 32);
  margin: 5px 0px;
  font-weight: 600;
}

.pickup-action {
  width: 100%;
  padding: 0;
  outline: none;
  border: none;
}

.btn {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.3s ease 0s;
}

.btn_medium {
  font-size: 16px;
  padding: 15px 20px;
  font-weight: 500;
}

.btn-primary {
  color: rgb(255, 255, 255);
  background-color: rgb(240, 74, 65);
}

.btn-white {
  color: rgb(255, 69, 59);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 69, 59);
}
</style>
`] }, media: void 0 });
  };
  var __vue_scope_id__2 = "data-v-1376332f";
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../shipper/shipper/public/js/OrderDetail.vue";
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
  function __vue_create_injector__2() {
    const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
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
  var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({ render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 }, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, __vue_create_injector__2, void 0, void 0);
  var OrderDetail_default = __vue_component__2;

  // ../shipper/shipper/public/js/shipper.bundle.js
  var Shipper = class {
    constructor(_a) {
      var _b = _a, { wrapper, component } = _b, props = __objRest(_b, ["wrapper", "component"]);
      this.$wrapper = $(wrapper);
      const components = {
        order_detail: OrderDetail_default,
        shipping_rates: ShippingRates_default
      };
      Object.assign(this, props);
      let $vm = new Vue({
        el: this.$wrapper.get(0),
        render: (h) => h(components[component], {
          props
        })
      });
      this.$component = $vm.$children[0];
    }
  };
  frappe.provide("frappe.ui");
  frappe.ui.Shipper = Shipper;
  var shipper_bundle_default = Shipper;
})();
//# sourceMappingURL=shipper.bundle.HT4IY47P.js.map
