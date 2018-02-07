<template>
  <div>
    <nav-header></nav-header>
    <div class="center_main clearfix">
      <div class="center_body">
        <ul class="home-list-ul">
          <li v-for="item in textList">
            <router-link :to="{path:'/detail',query:{'id': item.textId }}"><h4 class="text-title">{{ item.title }}</h4></router-link>
            <div class="text-info clearfix">
              <span><a href="javascript:;" @click="showRightSide(item.textId)" class="glyphicon glyphicon-list-alt"></a></span>
              <span>{{ item.updateTime }}</span>
              <span><router-link to="">{{ item.label}}</router-link></span>
              <span>阅读数：{{ item.readNum }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="right_cont_loading" @click="hideRightSide" v-show="show"></div>
    </div>
    <transition name="fade">
      <right-aside v-if="show" transiton="fade" :propsObj="propsObj"></right-aside>
    </transition>
  </div>
</template>

<script>
  import 'jquery'
  import 'bootstrap'
  import NavHeader from '@/components/header/head';
  import NavFooter from '@/components/footer/foot';
  import LeftAside from '@/components/aside/leftSide';
  import RightAside from '@/components/aside/rightSide';
  import api from '@/assets/js/api';

  export default {
    data() {
      return {
        textList: [],
        show: false,
//        detailId: '',
        propsObj: {
          detailId: '',
          show: ''
        }
      }
    },
    mounted() {
      this.init();
    },
    components: {
      NavHeader,
      NavFooter,
      LeftAside,
      RightAside
    },
    methods: {
      init() {
        api.getTextList().then(res => {
          if(res.status == '0') {
            this.textList = res.result;
          } else {
            alert(res.msg);
          }
        })
      },
      showRightSide(id) {
        this.show = true;
        this.propsObj.detailId = id;
        this.propsObj.show = true;
      },
      hideRightSide() {
        this.show = false;
        this.propsObj.show = false;
      }
    }
  }
</script>

<style lang="scss">
  .center_main {
    padding-top: 10px;
    left:0;
    right: 0;
    bottom: 0;
    width: 1100px;
    margin: 60px auto;
    .center_body {
       width: 700px;
       float:left;
    }
    .right_cont_loading {
      position: fixed;
      top: 0;
      left:0;
      background-color: rgba(255,255,255,0.6);
      width: 100%;
      height: 100%;
    }
    .home-list-ul {
      width: 100%;
    }
    .home-list-ul li{
      padding: 10px;
      border: 1px solid gray;
      border-radius: 10px;
      margin-bottom: 10px;
      -webkit-transition-duration: 0.5s;
      -moz-transition-duration: 0.5s;
      -o-transition-duration: 0.5s;
      .text-title {
        color: #08aba6;
      }
      .text-info {
        padding-top: 15px;
        span {
          float: left;
          padding-right: 10px;
          color: #666;
          a {
            color: #08aba6;
          }
        }
      }
    }
    .home-list-ul li:hover {
      /*-webkit-transform:scale(1.1);*/
      -webkit-box-shadow:0px 0px 30px #ccc;
      /*-moz-transform:scale(1.1);*/
      -moz-box-shadow:0px 0px 30px #ccc;
      /*-o-transform:scale(1.1);*/
      -o-box-shadow:0px 0px 30px #ccc;
      background: #f1f1f1;
    }
    .home-list-ul li a {
      display: block;
      text-decoration: none;
    }
  }
</style>

