<template>
<div class="home">
  <app-header></app-header>

  <div class="previews content">
    <div class="preview" v-for="resume in resumeList" :key="resume.name">
      <router-link v-bind:to="`/resume/${resume.name}`">
        <div class="preview-wrapper">
          <img :src="require(`../assets/preview/resume-${resume.name}.png`)" />
          <span>{{ resume.name }}</span>
        </div>
      </router-link>
    </div>
    <div class="preview">
      <router-link v-bind:to="'/custom'">
        <div class="preview-wrapper">
          <img src="../assets/preview/resume-left-right-rtl.png" />
          <span>自定义模板</span>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import appHeader from '@/components/layout/head';
export default Vue.component('resume', {
  name: 'app',
  components: {
    appHeader
  },
  data: function () {
    return {
      resumeList: [
        {'name': 'material-dark'},
        {'name': 'left-right'},
        {'name': 'oblique'},
        {'name': 'side-bar'},
        {'name': 'purple'},
        {'name': 'left-right-rtl'},
        {'name': 'side-bar-rtl'}
      ]
    };
  }
});
</script>

<style scoped>
.home {
  font-family: 'Roboto' !important;
}

.content {
  margin: 20px;
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
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
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
