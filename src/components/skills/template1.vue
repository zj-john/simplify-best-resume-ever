<template>
  <div class="skills">
    <div class="skill-block" v-for="skill in person.skills" :key="skill.name">
      <span class="skill">{{skill.name}}</span>
      <div class="skill-bar">
        <div :style="'width: '+skill.level+'%'" class="level"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { getVueOptions } from "./options";
let name = "skill_template_1";
export default Vue.component(name, getVueOptions(name));
</script>

<style lang="less" scoped>
.skills {
  margin-top: 20px;
  margin-bottom: 10px;
  direction: ltr !important;
  .skill-block {
    padding-bottom: 10px;
    display: inline-block;
    .skill {
      width: 100px;
      color: #616161;
      float: left;
      text-align: left;
    }
    .skill-bar {
      float: right;
      background: #e0e0e0;
      overflow: hidden;
      height: 8px;
      border-radius: 3px;
      margin-top: 6.5px;
      position: relative;
      width: 249px;
      .level {
        background: #757575;
        height: 100%;
      }
    }
  }
}
</style>
