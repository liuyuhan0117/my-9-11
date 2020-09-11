<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘宇涵
 * @Date: 2020-09-11 08:45:04
 * @LastEditors: 刘宇涵
 * @LastEditTime: 2020-09-11 09:30:53
-->
<template>
    <div class="index">
        <header>
            <van-cell is-link @click="showPopup" >点击弹出</van-cell>
            <van-tabs v-model="active">
            <van-tab title="发现"><router-view></router-view></van-tab>
            <van-tab title="热门"><router-view></router-view></van-tab>
            <van-tab title="同城"><router-view></router-view></van-tab>
            </van-tabs>
        </header>
        <main></main>
        <van-popup v-model="show" position="left" :style="{ width: '60%',height:'100%' }">弹出内容</van-popup>
    </div>
</template>
<script>
export default {
        data() {
    return {
      show: false,
      active:0
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
}

</script>

<style>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>