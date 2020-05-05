<template>
  <div>
    <div class="block" v-for="experience in data" :key="experience.company">
          <div class="block-helper"></div>
          <h3 class="headline">{{experience.position}} - {{experience.company}}</h3>
          <div class="subheadline">{{experience.timeperiod}}</div>
          <p class="info">{{experience.description}}</p>
        </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.component("experienceTemplate1", {
  props: ["data"]
});
</script>

<style lang="less" scoped>
.block {
    width: 90%;
    position: relative;
    background-color: #ffffff;
    padding: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    .headline {
      font-weight: 300;
      display: block;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.870588);
    }
    .subheadline {
      color: rgba(0, 0, 0, 0.541176);
      display: block;
      font-size: 14px;
      font-weight: 300;
    }
    .info {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.870588);
      margin-bottom: 0;
      padding-top: 20px;
    }
    .icon {
      width: 16%;
      float: left;
      margin-left: 0;
      .fa {
        text-align: center;
        display: block;
        font-size: 30pt;
      }
    }
    .content {
      width: 80%;
      position: absolute;
      height: 96%;
      left: 17%;
      padding-right: 3%;
      text-align: left;
      display: flex;
      flex-direction: column;
      .item {
        border-bottom: 1px solid #bdbdbd;
        flex: 1;
        width: 97%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;
        padding-top: 0;
        span {
          color: #d8ab94;
          margin-top: 0;
          font-size: 10pt;
          line-height: 16pt;
        }
        p {
          margin-top: 5px;
        }
      }
      .item:last-of-type {
        border-bottom-style: none;
        border-bottom-style: none;
      }
    }
  }
</style>
