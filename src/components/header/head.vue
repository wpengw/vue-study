<template>
  <header class="site-header">
    <div class="content clearfix">
        <div class="forever-log pull-left">
            <router-link to="/">forever</router-link>
        </div>
        <nav class="main-nav pull-left">
          <ul class="clearfix">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/postedit">写博文</router-link></li>
          </ul>
        </nav>
        <div class="pull-right">
          <div v-if="userInfo">
            <a href="javascript:;" class="" >{{userInfo.userName}}</a>
            <a href="javascript:;" @click='signout()' >退出</a>
          </div>
          <a href="javascript:;" class="" @click="clickLogin()" v-else="userInfo">登录</a>
        </div>
    </div>
    <form class="form-register" v-if="reg" >
      <div class="center">注册</div>
      <div class="form-row">
        <input type="text" class="" id="use" placeholder="用户名" v-model='registerInfo.userName'>
      </div>
      <div class="form-row">
        <input type="text" class="" id="" placeholder="密码"  v-model='registerInfo.userPwd'>
      </div>
      <div class="form-row">
        <a href="javascript:;" @click='submit()' class="submit">注册</a>
      </div>
    </form>
    <form class="form-register" v-if="login" >
      <div class="center">登录</div>
      <div class="form-row">
        <input type="text" class="" id="use" placeholder="用户名" v-model='loginInfo.userName'>
      </div>
      <div class="form-row">
        <input type="text" class="" id="" placeholder="密码"  v-model='loginInfo.userPwd'>
      </div>
      <div class="form-row">
        <a href="javascript:;" @click='userlogin()' class="submit">登录</a>
      </div>
    </form>
  </header>

</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex';
  import api from '@/assets/js/api';

  export default {
    data() {
      return {
        reg: false,
        login: false,
        userName: '',
        userInfos: null, //获取到的用户信息
        registerInfo: {
          userName: '',
          userPwd: ''
        },
        loginInfo: {
          userName: '',
          userPwd: ''
        }
      }
    },
    mounted(){
      //获取用户信息
      this.getUserInfo();
    },
    computed: {
      ...mapState([
        'userInfo'
      ]),
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ]),
      ...mapMutations([
          'RECORD_USERINFO',
          'OUT_LOGIN'
      ]),
      clickLogin() {
        this.login = true;
      },
      submit() {
        let param = this.registerInfo;
        console.log(param);

        api.register(param).then(res => {
          if(res.status == '0') {
            console.log(res.result);
            this.reg = false;
            this.login = true;
          } else {
            alert(res.msg);
          }
        })
      },
      userlogin() {//登录
        let param = this.loginInfo;
        console.log(param);
        api.userlogin(param).then(res => {
          console.log(res);
          if(res.status == '0') {
            this.login = false;
            this.userName = res.result.userName;
            this.userInfos = res.result;
            this.RECORD_USERINFO(this.userInfos);
            console.log(this.userName);
          } else {
            console.log(res.msg);
            this.login = false;
            this.reg = true;
          }
        })
      },
      signout() {//退出
        this.OUT_LOGIN();
      }
    }
  }
</script>

<style lang="scss">
  @import 'src/assets/css/mixin';

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    height: 60px;
    line-height: 60px;
    background-color: rgba(0,0,0,0.8);
    a {
      color: #fff;
    }
    .forever-log {
      width: 20%;
    }
    .forever-log a{
      font-size: 18px;
    }
    .main-nav li {
      float: left;
    }
    .main-nav li a {
      text-decoration: none;
      font-size: 16px;
      padding: 0 15px;
      display: block;
    }
    .main-nav li a:hover {
      color: #08aba6;
    }
    .form-register {
      padding: 20px;
      background-color: #fff;
      border: 1px solid #d5dce5;
      @include borderRadius(5px);
      @include fixedCenter;
      .center {
        text-align: left;
        font-size: 20px;
        line-height: 30px;
        color: #08aba6;
      }
      input {
        border: 1px solid #d5dce5;
        width: 200px;
        background-color: #fff;
        @include borderRadius(3px);
        padding: 10px;
        outline: 0;
      }
      a {
        display:block;
        margin: 10px auto 0;
        @include borderRadius(3px);
        @include btn(100px, 30px, center, #08aba6, #fff, 16px);
      }
    }
  }
</style>

