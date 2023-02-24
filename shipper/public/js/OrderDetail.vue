<template>
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
                  <div class="city">Bekasi, Kota</div>
                </div>
                <div class="jsx-1280719509 col-shipper">
                  <img
                    src="https://assets-cdn-np.shipper.id/sandbox/bos-web/v1.35.0-alpha6/assets/images/icon-arrow-alt.svg"
                    alt="icon to"
                  />
                </div>
                <div class="jsx-1280719509 col-shipper">
                  <div class="city">Bandung, Kota</div>
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
                <div>JNE - OKE</div>
                <div>Rp 10.000</div>
              </div>
              <div class="order_detail-item">
                <div>Pajak</div>
                <div>Termasuk</div>
              </div>
            </div>
            <div class="order_detail-item order_detail-total">
              <div>Total Biaya</div>
              <div>Rp 10.000</div>
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
            <div class="status">
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
                    <div class="status_time">19-12-2022, 13:27</div>
                    <div class="status_name">Paket sedang dipersiapkan</div>
                    <div class="status_time">Paket sedang dipersiapkan</div>
                  </div>
                  <div>
                    <div class="status_time">19-12-2022, 13:27</div>
                    <div class="status_name">Order Masuk ke sistem</div>
                    <div class="status_time">
                      Data order sudah masuk ke sistem
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
    }
  }
}
</script>

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
  font-size: 20px;
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
  margin-top: 0px;
  font-size: 16px;
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
