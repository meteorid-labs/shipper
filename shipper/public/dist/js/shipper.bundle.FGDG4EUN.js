(()=>{var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(n,e)=>{var t={};for(var i in n)w.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&f)for(var i of f(n))e.indexOf(i)<0&&k.call(n,i)&&(t[i]=n[i]);return t};var B={name:"ShippingRates",props:{frm:Object,pricings:Array,dialog:Object},data:function(){return{activeLogisticTab:null,logistic:{rate:{id:null}}}},computed:{logisticTabs(){let n=this.pricings.map(e=>e.rate.type);return n=[...new Set(n)],n.sort((e,t)=>e==="Regular"?-1:t==="Regular"?1:e==="Express"?-1:t==="Express"?1:e==="Trucking"?-1:t==="Trucking"?1:0),this.activeLogisticTab=n[0],n},currentPricings(){let n=this.pricings.filter(e=>e.rate.type===this.activeLogisticTab);return n.sort((e,t)=>e.discounted_price-t.discounted_price),n}},mounted(){},methods:{fmt_currency(n,e,t){return window.format_currency(n,e,t)},getDuration(n){return n.min_day===n.max_day?`${n.min_day} Hari`:`${n.min_day} - ${n.max_day} Hari`},selectLogistic(n){n=JSON.parse(JSON.stringify(n)),this.logistic=n},choose(){this.frm.set_value("kurir",`${this.logistic.logistic.name} - ${this.logistic.rate.name}`),this.frm.set_value("cod",!1),this.frm.set_value("rate_id",this.logistic.rate.id),this.frm.set_value("use_insurance",this.logistic.insurance_applied),this.dialog.hide()}}},C=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"more-courier_container"},[t("div",{staticClass:"tabs_container"},[t("ol",{staticClass:"tabs_title"},n._l(n.logisticTabs,function(i){return t("li",{key:i,staticClass:"tab_item",class:{"tab_item-active":n.activeLogisticTab===i},attrs:{"aria-hidden":"true"},on:{click:function(o){n.activeLogisticTab=i}}},[n._v(`
        `+n._s(i)+`
      `)])}),0),n._v(" "),t("div",{staticClass:"tabs_content"},n._l(n.currentPricings,function(i){return t("div",{key:i.rate.id,staticClass:"logistic_wrapper",on:{click:function(o){return n.selectLogistic(i)}}},[t("div",{staticClass:"logistic_item",class:{"logistic_item--active":n.logistic.rate.id===i.rate.id},attrs:{"aria-hidden":"true"}},[t("div",{staticClass:"logistic_item-content"},[t("div",{staticClass:"logistic_brand"},[t("img",{attrs:{src:i.logistic.logo_url,alt:i.logistic.name+" - "+i.rate.name}})]),n._v(" "),t("div",{staticClass:"logistic_detail"},[t("div",{},[n._v(`
                `+n._s(i.logistic.name)+" - "+n._s(i.rate.name)+`
              `)]),n._v(" "),t("span",{staticClass:"logistic_detail-duration"},[n._v(`
                `+n._s(n.getDuration(i))+`
              `)])]),n._v(" "),t("div",{staticClass:"logistic_price"},[t("div",[t("span",[n._v(`
                  `+n._s(n.fmt_currency(i.discounted_price,"IDR"))+`
                `)])]),n._v(" "),i.discounted_price<i.base_price?t("div",{staticClass:"logistic_price_original"},[t("span",[n._v(`
                  `+n._s(n.fmt_currency(i.base_price,"IDR"))+`
                `)])]):n._e()])]),n._v(" "),n.logistic.rate.id===i.rate.id?t("div",{staticClass:"logistic_insurance"},[t("div",{staticClass:"logistic_insurance-action"},[t("label",{staticClass:"checkbox_container",attrs:{for:"insurance"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.logistic.insurance_applied,expression:"logistic.insurance_applied"}],attrs:{name:"insurance-checkbox",type:"checkbox",id:"insurance",disabled:n.logistic.must_use_insurance},domProps:{checked:Array.isArray(n.logistic.insurance_applied)?n._i(n.logistic.insurance_applied,null)>-1:n.logistic.insurance_applied},on:{change:function(o){var r=n.logistic.insurance_applied,A=o.target,l=!!A.checked;if(Array.isArray(r)){var d=null,c=n._i(r,d);A.checked?c<0&&n.$set(n.logistic,"insurance_applied",r.concat([d])):c>-1&&n.$set(n.logistic,"insurance_applied",r.slice(0,c).concat(r.slice(c+1)))}else n.$set(n.logistic,"insurance_applied",l)}}}),n._v(" "),t("div",{staticClass:"logistic_insurance-label"},[n._v("Tambahkan Asuransi")])]),n._v(" "),t("div",{staticClass:"logistic_insurance-rate",class:{"logistic_insurance-rate--checked":n.logistic.insurance_applied}},[t("span",[n._v(`
                  `+n._s(n.fmt_currency(i.insurance_fee,"IDR"))+`
                `)])])])]):n._e()])])}),0)]),n._v(" "),t("div",{staticClass:"modal-footer"},[t("div",{staticClass:"modal-footer-action"},[t("button",{staticClass:"btn btn-secondary btn-sm btn-modal-secondary",on:{click:function(i){return n.dialog.hide()}}},[n._v(`
        Cancel
      `)]),n._v(" "),t("button",{staticClass:"btn btn-primary btn-sm btn-modal-primary",attrs:{disabled:!n.logistic.rate.id},on:{click:function(i){return n.choose()}}},[n._v(`
        Choose
      `)])])])])},j=[];C._withStripped=!0;var I=function(n){!n||n("data-v-824dd9f6_0",{source:`.modal-footer[data-v-824dd9f6] {
  background: white;
  padding: var(--padding-md) var(--padding-lg);
  bottom: -1rem;
  margin: -15px -20px;
}
.modal-footer-action[data-v-824dd9f6] {
  margin-left: auto;
}
.more-courier_title[data-v-824dd9f6] {
  font-size: 16px;
  font-weight: bold;
  color: rgb(32, 32, 32);
  cursor: pointer;
  display: inline-block;
  margin: 0px;
}
.more-courier_title svg[data-v-824dd9f6] {
  width: 16px;
  height: 16px;
  transform: rotate(0deg);
  transition: transform 0.3s ease 0s;
}

/* tabs */
ol.tabs_title[data-v-824dd9f6] {
  list-style: none;
  display: flex;
  padding: 0px;
  justify-content: flex-start;
  position: sticky;
  top: -1rem;
  background: #fff;
}
li[data-v-824dd9f6] {
  margin-right: 30px;
  cursor: pointer;
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  gap: 8px;
}
li.tab_item[data-v-824dd9f6] {
  color: rgb(32, 32, 32);
  position: relative;
}
li.tab_item-active[data-v-824dd9f6] {
  color: rgb(32, 32, 32);
}
li.tab_item-active[data-v-824dd9f6]::before {
  content: "";
  height: 3px;
  width: 100%;
  background: rgb(240, 74, 65);
  position: absolute;
  bottom: -5px;
  left: 0px;
}
.tabs_content[data-v-824dd9f6] {
  padding: 20px 0px;
}
.logistic_item-content[data-v-824dd9f6] {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 25px;
  text-align: center;
}
.logistic_item-content img[data-v-824dd9f6] {
  max-width: 70px;
}
.logistic_detail[data-v-824dd9f6] {
  color: rgb(96, 96, 96);
  text-align: center;
}
.logistic_detail-duration[data-v-824dd9f6] {
  color: rgb(32, 32, 32);
  font-weight: 600;
  margin-top: 10px;
  display: inline-block;
}
.logistic_price[data-v-824dd9f6] {
  font-weight: 600;
  font-size: 1rem;
  padding: 0px 8px;
}
.logistic_price_original[data-v-824dd9f6] {
  text-decoration: line-through;
  font-weight: 400;
  font-size: 15px;
  color: rgb(157, 157, 157);
  text-align: center;
}
.logistic_item[data-v-824dd9f6] {
  border: 1px solid rgb(239, 239, 239);
  border-radius: 8px;
  padding: 25px 0px;
  cursor: pointer;
  margin-bottom: 15px;
}
.logistic_item.logistic_item--active[data-v-824dd9f6] {
  border: 1px solid rgb(0, 162, 216);
  padding: 25px 0px 0px;
}
.logistic_insurance[data-v-824dd9f6] {
  border-top: 1px solid rgb(239, 239, 239);
  padding: 1rem;
}
.logistic_insurance-action[data-v-824dd9f6] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkbox_container[data-v-824dd9f6] {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 500;
  font-size: 0.875rem;
}
.logistic_insurance-rate[data-v-824dd9f6] {
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.4;
}
.logistic_insurance-rate.logistic_insurance-rate--checked[data-v-824dd9f6] {
  opacity: 1;
}

/*# sourceMappingURL=ShippingRates.vue.map */`,map:{version:3,sources:["../shipper/shipper/public/js/ShippingRates.vue","ShippingRates.vue"],names:[],mappings:"AA8MA;EACA,iBAAA;EACA,4CAAA;EACA,aAAA;EACA,mBAAA;AC7MA;ADgNA;EACA,iBAAA;AC7MA;AD+MA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,qBAAA;EACA,WAAA;AC5MA;AD8MA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,kCAAA;AC5MA;;ADgNA,SAAA;AAEA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,2BAAA;EAEA,gBAAA;EACA,UAAA;EACA,gBAAA;AC/MA;ADmNA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,QAAA;AChNA;ADmNA;EACA,sBAAA;EACA,kBAAA;AChNA;ADmNA;EACA,sBAAA;AChNA;ADkNA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,4BAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;AChNA;ADoNA;EACA,iBAAA;ACjNA;ADoNA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,yBAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,eAAA;ACjNA;ADoNA;EACA,sBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;ACjNA;ADoNA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;ACjNA;ADoNA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;ACjNA;ADoNA;EACA,oCAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;ACjNA;ADmNA;EACA,kCAAA;EACA,qBAAA;ACjNA;ADqNA;EACA,wCAAA;EACA,aAAA;AClNA;ADqNA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AClNA;ADqNA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;AClNA;ADqNA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;AClNA;ADoNA;EACA,UAAA;AClNA;;AAEA,4CAA4C",file:"ShippingRates.vue",sourcesContent:[`<template>
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
`,`.modal-footer {
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
}
.more-courier_title svg {
  width: 16px;
  height: 16px;
  transform: rotate(0deg);
  transition: transform 0.3s ease 0s;
}

/* tabs */
ol.tabs_title {
  list-style: none;
  display: flex;
  padding: 0px;
  justify-content: flex-start;
  position: sticky;
  top: -1rem;
  background: #fff;
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
}
li.tab_item-active::before {
  content: "";
  height: 3px;
  width: 100%;
  background: rgb(240, 74, 65);
  position: absolute;
  bottom: -5px;
  left: 0px;
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
}
.logistic_item.logistic_item--active {
  border: 1px solid rgb(0, 162, 216);
  padding: 25px 0px 0px;
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
}
.logistic_insurance-rate.logistic_insurance-rate--checked {
  opacity: 1;
}

/*# sourceMappingURL=ShippingRates.vue.map */`]},media:void 0})},S="data-v-824dd9f6",D=void 0,R=!1;function N(n,e,t,i,o,r,A,l,d,c){let a=(typeof t=="function"?t.options:t)||{};a.__file="../shipper/shipper/public/js/ShippingRates.vue",a.render||(a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=i;{let p;if(e&&(p=A?function(s){e.call(this,c(s,this.$root.$options.shadowRoot))}:function(s){e.call(this,l(s))}),p!==void 0)if(a.functional){let s=a.render;a.render=function(m,g){return p.call(g),s(m,g)}}else{let s=a.beforeCreate;a.beforeCreate=s?[].concat(s,p):[p]}}return a}function u(){let n=u.styles||(u.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(i,o){if(document.querySelector('style[data-vue-ssr-id~="'+i+'"]'))return;let r=e?o.media||"default":i,A=n[r]||(n[r]={ids:[],parts:[],element:void 0});if(!A.ids.includes(i)){let l=o.source,d=A.ids.length;if(A.ids.push(i),e&&(A.element=A.element||document.querySelector("style[data-group="+r+"]")),!A.element){let c=document.head||document.getElementsByTagName("head")[0],a=A.element=document.createElement("style");a.type="text/css",o.media&&a.setAttribute("media",o.media),e&&(a.setAttribute("data-group",r),a.setAttribute("data-next-index","0")),c.appendChild(a)}if(e&&(d=parseInt(A.element.getAttribute("data-next-index")),A.element.setAttribute("data-next-index",d+1)),A.element.styleSheet)A.parts.push(l),A.element.styleSheet.cssText=A.parts.filter(Boolean).join(`
`);else{let c=document.createTextNode(l),a=A.element.childNodes;a[d]&&A.element.removeChild(a[d]),a.length?A.element.insertBefore(c,a[d]):A.element.appendChild(c)}}}}var z=N({render:C,staticRenderFns:j},I,B,S,R,D,!1,u,void 0,void 0),h=z;var T={name:"OrderDetail",props:{frm:Object},computed:{order(){return this.frm.doc.order},consigner(){let n=this.order.consigner;return[n.name,n.email,n.phone_number].filter(Boolean).join(" / ")},consignee(){let n=this.order.consignee;return[n.name,n.email,n.phone_number].filter(Boolean).join(" / ")},courierAmount(){return this.order.courier.use_insurance?this.order.courier.amount+this.order.courier.insurance_amount:this.order.courier.amount}},methods:{fmt_currency(n,e,t){return window.format_currency(n,e,t)},moment(...n){return window.moment(...n)}}},b=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("div",{staticClass:"left-side"},[t("div",{staticClass:"root"},[t("div",{staticClass:"jsx-4014501257 row-shipper"},[t("div",{staticClass:"jsx-2949780125 col-shipper"},[t("div",{staticClass:"jsx-2813964643 row-shipper"},[t("div",{staticClass:"jsx-373512853 col-shipper"},[t("div",[t("span",{staticClass:"title"},[n._v("Order ID ")]),n._v(`\xA0\xA0
                `),t("span",{staticClass:"title value"},[n._v(n._s(n.order.order_id))])])]),n._v(" "),n._m(0)])]),n._v(" "),t("div",{staticClass:"jsx-2949780125 col-shipper"},[t("div",{staticClass:"jsx-3885130700 row-shipper"},[t("div",{staticClass:"jsx-2949780125 col-shipper"},[t("div",{staticClass:"box"},[t("div",{staticClass:"box-content"},[n._m(1),n._v(" "),t("p",{staticClass:"box-paragraph"},[n._v(`
                    `+n._s(n.consigner)+`
                  `)]),n._v(" "),t("p",{staticClass:"box-paragraph"},[n._v(`
                    `+n._s(n.order.origin.address)+", "+n._s(n.order.origin.area_name)+`,
                    `+n._s(n.order.origin.suburb_name)+`
                  `)]),n._v(" "),t("p",{staticClass:"box-paragraph"},[n._v(`
                    `+n._s(n.order.origin.city_name)+`,
                    `+n._s(n.order.origin.postcode)+` -
                    `+n._s(n.order.origin.country_name)+`
                  `)])])])]),n._v(" "),t("div",{staticClass:"jsx-2949780125 col-shipper"},[t("div",{staticClass:"box"},[t("div",{staticClass:"box-content"},[t("div",{staticClass:"box-title"},[n._v("Data Penerima")]),n._v(" "),t("p",{staticClass:"box-paragraph"},[n._v(n._s(n.consignee))]),n._v(" "),t("p",{staticClass:"box-paragraph"},[n._v(`
                    `+n._s(n.order.destination.address)+`,
                    `+n._s(n.order.destination.area_name)+`,
                    `+n._s(n.order.destination.suburb_name)+`
                  `)]),n._v(" "),t("p",{staticClass:"box-paragraph"},[n._v(`
                    `+n._s(n.order.destination.city_name)+`,
                    `+n._s(n.order.destination.postcode)+` -
                    `+n._s(n.order.destination.country_name)+`
                  `)])])])]),n._v(" "),t("div",{staticClass:"jsx-2949780125 col-shipper"},[t("div",{staticClass:"box"},[t("div",{staticClass:"box-content"},[t("div",{staticClass:"box-title"},[n._v("Detail Paket dan Logistik")]),n._v(" "),n._l(n.order.package.items,function(i){return t("p",{key:i.id,staticClass:"box-paragraph"},[n._v(`
                    `+n._s(i.name)+" / "+n._s(n.fmt_currency(i.price,"IDR"))+` /
                    `+n._s(i.qty)+` barang
                  `)])}),n._v(" "),t("p",{staticClass:"box-paragraph"},[n._v(`
                    `+n._s(n.order.package.length)+" x "+n._s(n.order.package.width)+` x
                    `+n._s(n.order.package.height)+` cm /
                    `+n._s(n.order.package.weight)+` Kg
                  `)]),n._v(" "),t("p",{staticClass:"box-paragraph"},[n._v(`
                    `+n._s(n.order.courier.name)+" - "+n._s(n.order.courier.rate_name)+` /
                    `+n._s(n.fmt_currency(n.courierAmount,"IDR"))+`
                  `)])],2),n._v(" "),n._m(2)])])])])])])]),n._v(" "),t("div",{staticClass:"right-side"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"card"},[t("h4",[n._v("Estimasi Tagihan")]),n._v(" "),n._m(3),n._v(" "),t("div",{staticClass:"order"},[t("div",{staticClass:"order_title"},[t("div",{staticClass:"jsx-502944319 row-shipper root"},[t("div",{staticClass:"jsx-1280719509 col-shipper"},[t("div",{staticClass:"city"},[n._v(n._s(n.order.origin.city_name))])]),n._v(" "),n._m(4),n._v(" "),t("div",{staticClass:"jsx-1280719509 col-shipper"},[t("div",{staticClass:"city"},[n._v(n._s(n.order.destination.city_name))])])])]),n._v(" "),n._m(5),n._v(" "),t("div",{staticClass:"order_detail"},[t("div",{staticClass:"order_detail-item"},[t("div",[n._v(`
                `+n._s(n.order.courier.name)+" - "+n._s(n.order.courier.rate_name)+`
              `)]),n._v(" "),t("div",[n._v(n._s(n.fmt_currency(n.order.courier.amount,"IDR")))])]),n._v(" "),n._m(6),n._v(" "),n.order.courier.insurance_amount?t("div",{staticClass:"order_detail-item"},[t("div",[n._v("Asuransi - "+n._s(n.order.courier.name))]),n._v(" "),t("div",[n._v(`
                `+n._s(n.fmt_currency(n.order.courier.insurance_amount,"IDR"))+`
              `)])]):n._e()]),n._v(" "),t("div",{staticClass:"order_detail-item order_detail-total"},[t("div",[n._v("Total Biaya")]),n._v(" "),t("div",[n._v(n._s(n.fmt_currency(n.courierAmount,"IDR")))])])])]),n._v(" "),t("div",[t("div",{staticClass:"card"},[t("h4",[n._v("Status Pengiriman")]),n._v(" "),n._m(7),n._v(" "),n._l(n.order.trackings,function(i){return t("div",{staticClass:"status"},[t("div",{staticClass:"status_item"},[t("div",{staticClass:"status_icon"},[t("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.5035 0.496651C19.0469 0.0399837 18.3846 -0.115572 17.7713 0.0877616L1.15668 5.62666C0.464449 5.85666 0 6.50221 0 7.23221C0 7.9611 0.465561 8.60666 1.15668 8.83666L7.56453 10.9733L12.3435 6.19443C12.7468 5.78999 13.4013 5.78999 13.8057 6.19443C14.2102 6.59888 14.2102 7.25332 13.8057 7.65666L9.02676 12.4356L11.1635 18.8433C11.3935 19.5356 12.039 20 12.769 20C13.4979 20 14.1435 19.5356 14.3735 18.8433L19.9124 2.22887C20.1158 1.61665 19.9591 0.953318 19.5035 0.496651Z"}})])]),n._v(" "),t("div",{staticClass:"status_detail"},[t("div",[t("div",{staticClass:"status_time"},[n._v(`
                    `+n._s(n.moment(i.created_date).format("DD-MM-YYYY, HH:mm"))+`
                  `)]),n._v(" "),t("div",{staticClass:"status_name"},[n._v(`
                    `+n._s(i.shipper_status.name)+`
                  `)]),n._v(" "),t("div",{staticClass:"status_time"},[n._v(`
                    `+n._s(i.shipper_status.description)+`
                  `)])]),n._v(" "),t("div",[t("div",{staticClass:"status_time"},[n._v(`
                    `+n._s(n.moment(i.created_date).format("DD-MM-YYYY, HH:mm"))+`
                  `)]),n._v(" "),t("div",{staticClass:"status_name"},[n._v(`
                    `+n._s(i.logistic_status.name)+`
                  `)]),n._v(" "),t("div",{staticClass:"status_time"},[n._v(`
                    `+n._s(i.logistic_status.description)+`
                  `)])])])])])})],2),n._v(" "),n._m(8)])])])])},L=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"jsx-373512853 col-shipper"},[t("div",{staticClass:"tag_wrapper tag_yellow_light tag-medium"},[t("div",{staticClass:"tag_text",attrs:{id:"orderStatus"}},[n._v(`
                  Paket sedang dipersiapkan
                `)])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"consigner-header"},[t("div",{staticClass:"box-title"},[n._v("Data Pengirim")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"box-action"},[t("span",{attrs:{id:"linkToChangeData","aria-hidden":"true"}},[n._v("Ubah")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"notification_wrapper notification_blue notification-medium",attrs:{id:"estimatedBillNotification"}},[t("div",{staticClass:"notification_text-subtitle"},[t("span",[n._v(`
                Anda tidak perlu membayar apa pun pada driver kami. Pembayaran
                akan ditagihkan setiap akhir bulan.
              `)])])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"jsx-1280719509 col-shipper"},[t("img",{attrs:{src:"https://assets-cdn-np.shipper.id/sandbox/bos-web/v1.35.0-alpha6/assets/images/icon-arrow-alt.svg",alt:"icon to"}})])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"order_info"},[t("p",[n._v(`
              Jika paket dijemput setelah pukul 12:00 (Express) atau 18:00
              (Reguler), maka perkiraan tiba akan bertambah satu hari dari
              yang dijadwalkan.
            `)])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"order_detail-item"},[t("div",[n._v("Pajak")]),n._v(" "),t("div",[n._v("Termasuk")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"status_title"},[t("h5",[n._v("Shipper Status")]),n._v(" "),t("h5",[n._v("Logistic Status")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("button",{staticClass:"pickup-action",staticStyle:{"margin-bottom":"1rem"},attrs:{id:"selectPickupTimeSlotButton",type:"button"}},[t("div",{staticClass:"btn btn-primary btn_medium",attrs:{role:"button"}},[t("span",[n._v("Jadwalkan Pickup")])])]),n._v(" "),t("button",{staticClass:"pickup-action",attrs:{id:"cancelOrderButton",type:"button"}},[t("div",{staticClass:"btn btn-white btn_medium",attrs:{role:"button"}},[t("span",[n._v("Batalkan Order")])])])])}];b._withStripped=!0;var O=function(n){!n||n("data-v-1376332f_0",{source:`
section[data-v-1376332f] {
  display: grid;
  grid-template-columns: 48% 52%;
  margin-right: -20px;
  margin-top: -14px;
  margin-bottom: -6px;
}
@media only screen and (max-width: 768px) {
section[data-v-1376332f] {
    grid-template-columns: 1fr;
    margin-right: 0;
    margin-top: 0;
}
}
.root[data-v-1376332f] {
  padding: 25px 25px 25px 0px;
}
.row-shipper.jsx-4014501257[data-v-1376332f] {
  display: flex;
  justify-content: unset;
  align-items: unset;
  flex-flow: row wrap;
}
@media only screen and (min-width: 0px) {
.row-shipper.jsx-4014501257[data-v-1376332f] {
    row-gap: 25px;
    margin-left: 0px;
    margin-right: 0px;
}
}
@media only screen and (min-width: 768px) {
.row-shipper.jsx-4014501257[data-v-1376332f] {
    row-gap: 25px;
    margin-left: 0px;
    margin-right: 0px;
}
}
@media only screen and (min-width: 0px) {
.col-shipper.jsx-2949780125[data-v-1376332f] {
    padding-left: 0px;
    padding-right: 0px;
    flex: 0 0 100%;
    max-width: 100%;
    order: 0;
    display: block;
}
}
@media only screen and (min-width: calc(768px)) {
.col-shipper.jsx-2949780125[data-v-1376332f] {
    padding-left: 0px;
    padding-right: 0px;
    flex: 0 0 100%;
    max-width: 100%;
    order: 0;
    display: block;
}
}
.btn-back[data-v-1376332f] {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(243, 243, 243);
  border-radius: 100%;
}
.btn-back img[data-v-1376332f] {
  position: relative;
  left: 0px;
  transition: left 0.3s ease 0s;
}
.row-shipper.jsx-2813964643[data-v-1376332f] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
}
@media only screen and (min-width: 0px) {
.row-shipper.jsx-2813964643[data-v-1376332f] {
    row-gap: 14px;
    margin-left: -7px;
    margin-right: -7px;
}
}
@media only screen and (min-width: 768px) {
.row-shipper.jsx-2813964643[data-v-1376332f] {
    row-gap: 14px;
    margin-left: -7px;
    margin-right: -7px;
}
}
@media only screen and (min-width: 0px) {
.col-shipper.jsx-373512853[data-v-1376332f] {
    padding-left: 7px;
    padding-right: 7px;
    order: 0;
    display: block;
}
}
@media only screen and (min-width: calc(768px)) {
.col-shipper.jsx-373512853[data-v-1376332f] {
    padding-left: 7px;
    padding-right: 7px;
    order: 0;
    display: block;
}
}
.title[data-v-1376332f] {
  font-size: 28px;
  line-height: 35px;
  text-transform: capitalize;
  color: rgb(32, 32, 32);
}
.title.value[data-v-1376332f] {
  font-weight: bold;
}
.tag_wrapper[data-v-1376332f] {
  display: inline-block;
  overflow: hidden;
  border-radius: 4px;
}
.tag_yellow_light[data-v-1376332f] {
  background-color: rgb(255, 244, 192);
  color: rgb(166, 142, 29);
}
.tag-medium[data-v-1376332f] {
  font-size: 14px;
  min-width: inherit;
}
.tag_text[data-v-1376332f] {
  padding: 6px 14px;
  font-weight: 500;
  text-align: center;
}
.row-shipper.jsx-3885130700[data-v-1376332f] {
  display: flex;
  justify-content: unset;
  align-items: unset;
  flex-flow: row wrap;
}
@media only screen and (min-width: 0px) {
.row-shipper.jsx-3885130700[data-v-1376332f] {
    row-gap: 20px;
    margin-left: 0px;
    margin-right: 0px;
}
}
@media only screen and (min-width: 768px) {
.row-shipper.jsx-3885130700[data-v-1376332f] {
    row-gap: 20px;
    margin-left: 0px;
    margin-right: 0px;
}
}
.box[data-v-1376332f] {
  position: relative;
  padding: 25px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(239, 239, 239);
  border-radius: 8px;
  display: flex;
}
.box-content[data-v-1376332f] {
  flex: 1 1 0%;
}
.box-content .consigner-header[data-v-1376332f] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.box-title[data-v-1376332f] {
  color: rgb(32, 32, 32);
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  padding-bottom: 10px;
}
.box-content .consigner-header .box-title[data-v-1376332f] {
  padding-bottom: 0px;
}
.box-paragraph[data-v-1376332f] {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: rgb(96, 96, 96);
  margin-block: 5px 0px;
}

/* right */
.right-side[data-v-1376332f]:last-child {
  background-color: rgb(243, 243, 243);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
@media only screen and (max-width: 768px) {
.right-side[data-v-1376332f] {
    margin-left: -20px;
    margin-right: -20px;
}
.root[data-v-1376332f] {
    padding: 0px;
    padding-bottom: 1rem;
}
}
.wrapper[data-v-1376332f] {
  padding: 30px 25px;
}
.card[data-v-1376332f] {
  background: #fff;
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 25px;
}
.card h4[data-v-1376332f] {
  font-size: 1.125rem;
  font-weight: 700;
}
.notification_wrapper[data-v-1376332f] {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  border-radius: 4px;
  padding: 15px 20px;
}
.notification_blue[data-v-1376332f] {
  background-color: rgb(229, 246, 251);
  color: rgb(0, 162, 216);
}
.notification-medium[data-v-1376332f] {
  font-size: 14px;
}
.notification_text-subtitle[data-v-1376332f] {
  line-height: 1.4;
}
.order_title[data-v-1376332f] {
  font-size: 1.125rem;
  font-weight: 600;
}
.row-shipper.jsx-502944319[data-v-1376332f] {
  display: flex;
  justify-content: unset;
  align-items: center;
  flex-flow: row wrap;
}
@media only screen and (min-width: 0px) {
.row-shipper.jsx-502944319[data-v-1376332f] {
    row-gap: 12px;
    margin-left: -6px;
    margin-right: -6px;
}
}
@media only screen and (min-width: 768px) {
.row-shipper.jsx-502944319[data-v-1376332f] {
    row-gap: 12px;
    margin-left: -6px;
    margin-right: -6px;
}
}
@media only screen and (min-width: 0px) {
.col-shipper.jsx-1280719509[data-v-1376332f] {
    padding-left: 6px;
    padding-right: 6px;
    order: 0;
    display: block;
}
}
@media only screen and (min-width: calc(768px)) {
.col-shipper.jsx-1280719509[data-v-1376332f] {
    padding-left: 6px;
    padding-right: 6px;
    order: 0;
    display: block;
}
}
.city[data-v-1376332f] {
  word-break: break-word;
  text-transform: capitalize;
}
img[data-v-1376332f] {
  transform: rotate(180deg);
  width: 12px;
}
.order_info[data-v-1376332f] {
  border-bottom: 1px solid rgb(224, 224, 224);
  margin-bottom: 25px;
}
.order_info > p[data-v-1376332f] {
  color: rgb(0, 162, 216);
  font-size: 14px;
  line-height: 20px;
}
.order_detail[data-v-1376332f] {
  border-bottom: 2px dashed rgb(239, 239, 239);
  padding-bottom: 10px;
}
.order_detail-item[data-v-1376332f] {
  color: rgb(96, 96, 96);
  display: grid;
  grid-template-columns: 60% 1fr;
  margin-bottom: 15px;
}
.order_detail-item > div[data-v-1376332f]:last-child {
  text-align: right;
}
.order_detail-total[data-v-1376332f] {
  margin: 25px 0px 0px;
  color: rgb(32, 32, 32);
  font-size: 22px;
  font-weight: 600;
}
.status_title[data-v-1376332f] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}
.status_title h5[data-v-1376332f] {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: rgb(112, 112, 112);
}
@media only screen and (max-width: 425px) {
.status_title[data-v-1376332f] {
    display: none;
}
}
.status[data-v-1376332f] {
  position: relative;
}
.status_item[data-v-1376332f] {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 5px;
  margin-bottom: 45px;
  word-break: break-word;
  position: relative;
}
.status_item[data-v-1376332f]:last-child {
  margin-bottom: 0px;
}
.status_icon[data-v-1376332f] {
  width: 40px;
  height: 40px;
  background-color: rgb(243, 243, 243);
  border-radius: 50%;
  text-align: center;
  padding-top: 12px;
  position: relative;
  z-index: 2;
}
.status_item:first-child .status_icon[data-v-1376332f] {
  background-color: rgb(229, 246, 251);
}
.status_item:first-child svg[data-v-1376332f] {
  fill: rgb(0, 162, 216);
}
.status_detail[data-v-1376332f] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
@media only screen and (max-width: 425px) {
.status_detail[data-v-1376332f] {
    grid-template-columns: 1fr;
    gap: 20px;
}
}
.status_time[data-v-1376332f] {
  color: rgb(173, 173, 173);
  font-size: 14px;
}
.status_name[data-v-1376332f] {
  color: rgb(32, 32, 32);
  margin: 5px 0px;
  font-weight: 600;
}
.pickup-action[data-v-1376332f] {
  width: 100%;
  padding: 0;
  outline: none;
  border: none;
}
.btn[data-v-1376332f] {
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
.btn_medium[data-v-1376332f] {
  font-size: 16px;
  padding: 15px 20px;
  font-weight: 500;
}
.btn-primary[data-v-1376332f] {
  color: rgb(255, 255, 255);
  background-color: rgb(240, 74, 65);
}
.btn-white[data-v-1376332f] {
  color: rgb(255, 69, 59);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 69, 59);
}
`,map:{version:3,sources:["../shipper/shipper/public/js/OrderDetail.vue"],names:[],mappings:";AAuSA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,0BAAA;IACA,eAAA;IACA,aAAA;AACA;AACA;AAEA;EACA,2BAAA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,cAAA;IACA,eAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,cAAA;IACA,eAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCAAA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;EACA,SAAA;EACA,6BAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;EACA,eAAA;EACA,iBAAA;EACA,0BAAA;EACA,sBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,oCAAA;EACA,wBAAA;AACA;AAEA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;AACA;AACA;AAEA;EACA,kBAAA;EACA,aAAA;EACA,oCAAA;EACA,oCAAA;EACA,kBAAA;EACA,aAAA;AACA;AAEA;EACA,YAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AACA;AAEA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;EACA,sBAAA;EACA,qBAAA;AACA;;AAEA,UAAA;AACA;EACA,oCAAA;EACA,4BAAA;EACA,+BAAA;AACA;AAEA;AACA;IACA,kBAAA;IACA,mBAAA;AACA;AACA;IACA,YAAA;IACA,oBAAA;AACA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AACA;AAEA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;EACA,oCAAA;EACA,uBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;AACA;AAEA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;AACA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,cAAA;AACA;AACA;AAEA;EACA,sBAAA;EACA,0BAAA;AACA;AAEA;EACA,yBAAA;EACA,WAAA;AACA;AAEA;EACA,2CAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;AACA;AAEA;EACA,4CAAA;EACA,oBAAA;AACA;AAEA;EACA,sBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,oBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,SAAA;AACA;AAEA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;AACA;AAEA;AACA;IACA,aAAA;AACA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,aAAA;EACA,+BAAA;EACA,QAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,sBAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;EACA,SAAA;AACA;AAEA;AACA;IACA,0BAAA;IACA,SAAA;AACA;AACA;AACA;EACA,yBAAA;EACA,eAAA;AACA;AAEA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;AACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;AACA;AAEA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;AACA;AAEA;EACA,yBAAA;EACA,kCAAA;AACA;AAEA;EACA,uBAAA;EACA,oCAAA;EACA,kCAAA;AACA",file:"OrderDetail.vue",sourcesContent:[`<template>
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
`]},media:void 0})},Y="data-v-1376332f",P=void 0,M=!1;function U(n,e,t,i,o,r,A,l,d,c){let a=(typeof t=="function"?t.options:t)||{};a.__file="../shipper/shipper/public/js/OrderDetail.vue",a.render||(a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=i;{let p;if(e&&(p=A?function(s){e.call(this,c(s,this.$root.$options.shadowRoot))}:function(s){e.call(this,l(s))}),p!==void 0)if(a.functional){let s=a.render;a.render=function(m,g){return p.call(g),s(m,g)}}else{let s=a.beforeCreate;a.beforeCreate=s?[].concat(s,p):[p]}}return a}function _(){let n=_.styles||(_.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(i,o){if(document.querySelector('style[data-vue-ssr-id~="'+i+'"]'))return;let r=e?o.media||"default":i,A=n[r]||(n[r]={ids:[],parts:[],element:void 0});if(!A.ids.includes(i)){let l=o.source,d=A.ids.length;if(A.ids.push(i),e&&(A.element=A.element||document.querySelector("style[data-group="+r+"]")),!A.element){let c=document.head||document.getElementsByTagName("head")[0],a=A.element=document.createElement("style");a.type="text/css",o.media&&a.setAttribute("media",o.media),e&&(a.setAttribute("data-group",r),a.setAttribute("data-next-index","0")),c.appendChild(a)}if(e&&(d=parseInt(A.element.getAttribute("data-next-index")),A.element.setAttribute("data-next-index",d+1)),A.element.styleSheet)A.parts.push(l),A.element.styleSheet.cssText=A.parts.filter(Boolean).join(`
`);else{let c=document.createTextNode(l),a=A.element.childNodes;a[d]&&A.element.removeChild(a[d]),a.length?A.element.insertBefore(c,a[d]):A.element.appendChild(c)}}}}var q=U({render:b,staticRenderFns:L},O,T,Y,M,P,!1,_,void 0,void 0),E=q;var v=class{constructor(o){var r=o,{wrapper:e,component:t}=r,i=x(r,["wrapper","component"]);this.$wrapper=$(e);let A={order_detail:E,shipping_rates:h};Object.assign(this,i);let l=new Vue({el:this.$wrapper.get(0),render:d=>d(A[t],{props:i})});this.$component=l.$children[0]}};frappe.provide("frappe.ui");frappe.ui.Shipper=v;var V=v;})();
//# sourceMappingURL=shipper.bundle.FGDG4EUN.js.map
