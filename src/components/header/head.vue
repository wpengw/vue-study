<template>
  <header class="site-header">
    <div class="content clearfix">
        <div class="forever-log pull-left">
            <router-link to="/">forever</router-link>
        </div>
        <nav class="main-nav pull-left">
          <ul class="clearfix">
            <li><router-link to="/">Home</router-link></li>
            <li><a href="javascript:;">two</a></li>
            <li><a href="javascript:;">three</a></li>
          </ul>
        </nav>
        <div class="pull-right">
          <a href="javascript:;" class="">登录</a>
        </div>
    </div>
  </header>

</template>

<script>

  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
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
  }
</style>

