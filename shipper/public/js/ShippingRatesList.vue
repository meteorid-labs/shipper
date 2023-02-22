<template>
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
                  :alt="`${pricing.logistic.name} - ${pricing.rate.name}`"
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
  </div>
</template>

<script>
export default {
  name: 'ShippingRatesList',

  props: {
    frm: Object,
    pricings: Array
  },

  data: function () {
    return {
      name: 'Aslam',
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
    console.log(frappe.utils, this.frm, this.rates)
    this.frm.set_value('kurir', 'JNE')

    // frappe set value for field "kurir"
    // frappe.model.set_value('Shipping Order', 'Kurir', 'kurir', 'JNE')
  },

  methods: {
    fmt_currency(v, c, d) {
      return window.format_currency(v, c, d)
    },

    getDuration(pricing) {
      if (pricing.min_day === pricing.max_day) {
        return `${pricing.min_day} Hari`
      } else {
        return `${pricing.min_day} - ${pricing.max_day} Hari`
      }
    },

    selectLogistic(pricing) {
      this.logistic = pricing
    }
  }
}
</script>

<style lang="scss">
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
