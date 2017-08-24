<template>
  <div id="login" class="mod-login  container">
    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 content">
      <div class="service-block service-block-default">
        <div class="margin-bottom-30"></div>
        <div class="margin-bottom-30">
          <img src="../../../static/default-icon.png" class="appicon">
        </div>
        <h2 class="heading-md margin-bottom-30">请输入用户名及密码</h2>
        <p>该应用设置了安装密码<br>请输入用户名密码继续</p>
        <form method="post" id="form" @submit.prevent="submit">
          <div class="input-group margin-bottom-20">
            <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
            <input type="text" class="form-control text-center" name="username" placeholder="请输入用户名"
            v-model="user.username"
            >
          </div>
          <div class="input-group margin-bottom-30">
            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
            <input type="password" class="form-control text-center " id="password"  name="password" placeholder="请输入密码"
            v-model="user.password" >
          </div>
          <div class="col-lg-12">
            <button type="submit" id="submitButton" class ="btn-u btn-u-green"  
            v-bind:disabled="isPress" >{{message}}</button>
          </div>
        </form>
        <div class="margin-bottom-30"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .mod-login .margin-bottom-30{
    margin-bottom: 30px;
  }

  .mod-login .margin-bottom-20{
    margin-bottom: 20px;
  }
  .mod-login::after{
    content: " ";
    display: block;
    clear: both;
  }
  .mod-login .appicon {
    width: 120px;
    height: 120px;
    border-radius: 24px;
    border: 1px solid #ddd;
  }

  .mod-login .service-block-default {
    background: #fafafa;
    border: 1px solid #eee;
  }

  .mod-login .service-block {
    padding: 20px 30px;
    padding-bottom: 35px;
    text-align: center;
    margin-bottom: 20px;
  }

  .mod-login .content {
    padding-top:40px;
  }

  .mod-login .view {
    text-align: center;
  }

  .mod-login h2.heading-md {
    font-size: 20px;
    line-height: 24px;
  }

  .mod-login .btn-u .btn-u-green {
    background: #2ecc71;
  }

  .mod-login .btn-u {
    border: 0;
    color: #fff;
    font-size:14px;
    cursor: pointer;
    font-weight: 400;
    padding: 4px 13px;
    position: relative;
    background: #72c02c;
    display: inline-block;
    text-decoration: none;
  }

  .mod-login .service-block-default:hover{
    box-shadow: 0 0 8px #eee;
  }

  .mod-login .btn-u .btn-u-green:hover ,.mod-login .btn-u .btn-u-green:focus,.mod-login .btn-u .btn-u-green:active,.mod-login .btn-u .btn-u-green.active {
    background: #27ae60;
  }

  .mod-login .grey{
    background: grey;
  }

</style>

<script>
import {loginUrl} from '../.././util/util.js' 

export default {
  data() {
    return {
      isPress:false,
      message:'立刻进入'

    }
  },
  methods:{
    submit:function() {
      const username = this.user.username;
      const password = this.user.password;
      // if(!this.validateInput(username,password)) return false;
      this.$http.get(loginUrl,{
        params:{
          username:this.user.username,
          password:this.user.password
        }
      }).then((response)=>{
        console.log(response)
      },(error)=>{
        console.log(error);
        alert('服务器错误');
      })
    },
    validateInput:function(username,password) {
      if(username == ''||password==''){
        alert('用户名或者密码不能为空')
        return false;
      }
    }

  },
  props:{
    user:{
      type:Object,
      default:function() {
        const user = {
          username:'bug',
          password:'bug'
        }
        return user
      }
    }
  }
}
</script>



