<template>
  <div>
    <div class="skill" v-for="skill in data" :key="skill.name">
      <div class="right">
        <span>{{skill.name}}&nbsp;</span>
        <div class="progress">
          <div class="determinate" :style="'width: '+skill.level+'%;'">
            <i class="fa fa-circle"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.component("skillTemplate1", {
  props: ["data"]
});
</script>

<style lang="less" scoped>
.skill {
  clear: both;
  width: 97%;
  padding-top: 4px;
  .left {
    float: left;
    width: 10%;
    padding-top: 3px;
    i:nth-child(2) {
      float: left;
      padding-top: 4px;
    }
  }
  .right {
    float: right;
    width: 93%;
    .progress {
      float: left;
      position: relative;
      height: 2px;
      display: block;
      width: 95%;
      background-color: rgba(255, 255, 255, 0.19);
      border-radius: 2px;
      margin: 0.5rem 0 1rem;
      overflow: visible;
      margin-bottom: 10px;
      .determinate {
        background-color: #78909c;
        position: absolute;
        top: 0;
        bottom: 0;
        .fa {
          font-size: 13px;
          position: absolute;
          top: -4px;
          right: -2px;
          margin-left: 50%;
          color: white;
        }
      }
    }
  }
}
</style>
