<template>
  <aside>
    <div class="right-side" :class="{showRightSide:propsObj.show, hideToRight: !propsObj.show}">
      <div class="title">
        <h3>{{ detailInfo.title }}</h3>
        <span class="pull-right">阅读 {{ detailInfo.readNum }}</span>
      </div>
      <section class="detail-body">
        <p>{{ detailInfo.content }}</p>
      </section>
    </div>
  </aside>

</template>

<script>
  import 'jquery'
  import 'bootstrap'
  import NavHeader from '@/components/header/head';
  import NavFooter from '@/components/footer/foot';
  import api from '@/assets/js/api';

  export default {
    data() {
      return {
        detailInfo: {}
      }
    },
    props: ['propsObj'],
    mounted() {
      this.init();
    },
    components: {
      NavHeader,
      NavFooter
    },
    methods: {
      init() {
        console.log(this.propsObj);
        api.getTextDetail({textId: this.propsObj.detailId}).then(res => {
          if(res.status == '0') {
            this.detailInfo = res.result;
          } else {
            alert(res.mas);
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @keyframes moveFromRight {
    from {
      right: -800px;}
    to {
      right: 0;
    }
  }
  @keyframes hideToRight {
    from {
      right: 0;}
    to {
      right: -800px;
    }
  }
  .showRightSide {
    animation: moveFromRight 1s forwards;
    -moz-animation: moveFromRight 1s forwards;	/* Firefox */
    -webkit-animation: moveFromRight 1s forwards;	/* Safari 和 Chrome */
    -o-animation: moveFromRight 1s forwards;
  }
  .hideToRight {
    animation: hideToRight 1s forwards;
    -moz-animation: hideToRight 1s forwards;	/* Firefox */
    -webkit-animation: hideToRight 1s forwards;	/* Safari 和 Chrome */
    -o-animation: hideToRight 1s forwards;
  }
  .right-side {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 60px;
    /*right: 0;*/
    z-index: 100;
    background-color: #fff;
    border: 1px solid #222;
    /*animation: moveFromRight 1s forwards;*/
    /*-moz-animation: moveFromRight 1s forwards;	!* Firefox *!*/
    /*-webkit-animation: moveFromRight 1s forwards;	!* Safari 和 Chrome *!*/
    /*-o-animation: moveFromRight 1s forwards;*/
    .title {
      width: 100%;
      height: 100px;
      background-color: #32353e;
      color: #d2dce3;
      padding: 20px;
      span{
        padding-top: 20px;
        font-size: 16px;
      }
    }
    .detail-body {
      padding: 20px;
    }
  }
</style>

