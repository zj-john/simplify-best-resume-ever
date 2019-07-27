<template>
  <div class="home">
    <app-header></app-header>
    
    <div class="flex_wrapper">
      <form class="custom_form">
        <div class="sel_layout">
          <h4>STEP1：选择布局</h4>
          <div class="flex_wrapper">
            <div class="radio_wrapper">
              <input type="radio" id="left_right" value="left_right" v-model="layout" />
              <label for="left_right">左右布局（适合一页简历）</label>
            </div>
            <div class="radio_wrapper">
              <input type="radio" id="top_bottom" value="top_bottom" v-model="layout" />
              <label for="top_bottom">上下布局（适合内容多的多页简历）</label>
            </div>
          </div>
        </div>

        <div class="sel_layout"></div>
      </form>
      <div class="resume_demo">

      </div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from "vue";
import appHeader from "@/components/layout/head";
import appFooter from "@/components/layout/foot";
export default Vue.component("custom", {
  name: "app",
  components: {
    appHeader,
    appFooter
  },
  data: function() {
    return {
      layout: ""
    };
  }
});
</script>

<style scoped>
.home {
  font-family: "Roboto" !important;
}
.custom_form {
  background: #fff;
  margin: 2em;
  flex-basis: 50%;
}
.radio_wrapper {
  display: flex;
}
.flex_wrapper {
  display: flex;
}
.previews {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

.preview {
  width: 180px;
  float: left;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-bottom: 1.5%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  height: 252px;
  overflow: hidden;
}

.preview-wrapper {
  position: relative;
  background: white;
}

.preview img {
  width: 100%;
  opacity: 0.5;
  filter: blur(1px);
}

.preview span {
  position: absolute;
  max-width: 100%;
  font-size: 24px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.75);
  width: 100%;
  text-align: center;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
}
</style>
