<template>
  <footer class="footer">
    <div class="content">
      footer
    </div>
  </footer>

</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
          winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if (!(contentHeight > winHeight)) {
          //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
          $("footer").addClass("fixed-bottom");
        } else {
          $("footer").removeClass("fixed-bottom");
        }
      }
    }
  }
</script>

<style lang="scss">
  .fixed-bottom {
    position: fixed;
    bottom: 0;
    z-index: 1000;
  }
  .footer {
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    .content {
      padding: 20px 0;
      color: #fff;
    }
  }
</style>

