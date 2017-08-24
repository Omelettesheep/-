<template>
    <div id="qrcode" class="mod-qrcode">
        <div class="container">
            <div class="span12">
                <span>请用手机扫描下面的二维码安装</span>
                <img :src="imageUrl" style="width:200px;height:200px;">
                <div v-show="false">
                    <div id="code"></div>
                    <canvas id="canvas"></canvas>
                </div>
            </div>
            <div class="row" v-if='showUpdateInfo'>
                <div class="updateInfo">
                    <div class="col-md-8 col-md-offset-2" style="word-break:break-all;">
                        <div class="tag-box tag-box-v6 margin-bottom-30">
                            <h2>更新说明</h2>
                            {{updateTime}}         
                        </div>
                    </div>
                </div>
            </div>
            <hr class="devider devider-dotted" v-if='showUpdateInfo'>
        </div>
    </div>
</template>
<style scoped>
    .mod-qrcode .span12{
        text-align: center;
        margin-bottom: 30px;
    }

    .mod-qrcode .span12 span{
        display: block;
        margin-bottom: 20px;
    }

    .mod-qrcode #canvas {
        margin-top: -18px;
        width: 200px !important;
        height: 200px !important;

    }

    .mod-qrcode .updateInfo .tag-box-v6{
        text-align: left;
        background: #fafafa;
    	border: solid 1px #eee;
        margin-bottom: 30px;
        padding: 20px;
    }

    .mod-qrcode .updateInfo .tag-box h2 {
        margin-top: 5px;
        font-size: 20px;
        line-height: 25px;
    }

</style>

<script>
import qrcode from 'qrcode'
export default {
    data() {
        return{
            imageUrl:'',
        }
    },

    props:{
        showUpdateInfo:{
            type:Boolean,
            default:true
        },
        qrcodeUrl:{
            type:String,
            default:'http://www.baidu.com'
        },
        updateTime:{
            type:String,
            default:'2015-8-24'
        }
    },
  methods:{
      useqrcode() {
          const canvas = document.querySelector('#canvas');
          qrcode.toCanvas(canvas,this.qrcodeUrl,error=>{
              if(error) 
                console.log(error)
          })
          this.imageUrl = canvas.toDataURL('image/png');
      }
  },
  mounted() {
      this.useqrcode();

  }
}
</script>

