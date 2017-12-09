<template>
  <div>
    <nav-header></nav-header>
    <div class="content detail clearfix">
      <article>
        <h2 class="title">{{ detailInfo.title }}</h2>
        <ul class="clearfix">
          <li class="pull-left">标签：<span>{{ detailInfo.label}}</span></li>
          <li class="pull-right">发布与：<span>{{ detailInfo.updateTime}}</span></li>
        </ul>
        <p class="text-body">{{ detailInfo.content }}</p>
      </article>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import 'jquery'
  import 'bootstrap'
  import NavHeader from '@/components/header/head';
  import NavFooter from '@/components/footer/foot';
  import axios from 'axios';
  import { url } from '@/config/config'

  export default {
    data() {
      return {
        detailInfo: {}
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
        let textId = this.$route.query.id;
        console.log(textId);
        axios.get(url + 'detail', {
          params: {
            textId: textId
          }
        }).then(response => {
          let res = response.data;
          this.detailInfo = res.result;
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="scss">
  .detail {
    margin-top: 80px;
    .title {
      padding: 20px 0;
      text-align: center;
    }
    ul.clearfix li {
      color: #999;
    }
    .text-body {
      padding: 20px 0;
    }
  }
</style>

