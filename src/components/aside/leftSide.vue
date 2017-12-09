<template>
  <aside>
    <!--<div class="left-aside-top"></div>-->
    <div class="left-aside">
      left
      <div class="scroller_track">
        <div class="scroller_handle"></div>
      </div>
    </div>
  </aside>

</template>

<script>
  import 'jquery'
  import 'bootstrap'
  import NavHeader from '@/components/header/head';
  import NavFooter from '@/components/footer/foot';
  import axios from "axios";
  import { url } from "@/config/config";

  export default {
    data() {
      return {
        textList: [],
      }
    },
    mounted() {
      this.init();
    },
    components: {
      NavHeader,
      NavFooter
    },
    methods: {
      init() {

      }
    }
  }
</script>

<style lang="scss">
  .left-aside-top {
    position: fixed;
    z-index: 5;
    width: 270px;
    height: 100px;
    background: #fff;
    box-shadow: 0 10px 10px #fff;
    padding: 15px 20px;
    top: 0px;
    left: 0px;
  }
  .left-aside {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 4;
    color: #545e66;
    width: 280px;
    /*border: 1px solid gray;*/
  }
  .scroller_track {
    width: 10px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(237,237,237,0.4);
    cursor: pointer;
    .scroller_handle {
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 30%;
      border-radius: 5px;
      background-color: rgba(210,220,227,0.5);
    }
  }
</style>

