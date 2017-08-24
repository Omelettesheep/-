<template>
  <div id="main" class="mod-main">
    <my-header></my-header>
    <router-view></router-view>
    <hr class="devider devider-dotted">
    <qr-code
      :showUpdateInfo='false'
    ></qr-code>
    <my-footer></my-footer>

  </div>
</template>
<style scoped>
  .mod-main .devider-dotted{
    border-top: 2px dotted #eee;
  }
</style>

<script>
import MyHeader from '../components/header/header.vue'
import MyFooter from '../components/footer/footer.vue'
import QrCode from '../components/qrcode/qrcode.vue'
var Storage = require('saber-storage');
export default {
  components:{
    MyHeader,
    MyFooter,
    QrCode
  },
}
</script>

