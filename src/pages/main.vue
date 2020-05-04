<template>
  <div class="wrapper">
    <div class="data-wrapper card">
      <div class="card-title">
        <div class="title">个人数据</div>
        <div class="action">
          <button class="btn btn-primary btn-sm" @click="saveData" title="保存至本地缓存">保存</button>
          <button class="btn btn-info btn-sm" @click="reInit" title="恢复至样例数据">还原</button>
        </div>
      </div>
      <div class="card-content">
        <template>
          <data-json :data="resume_data" @save="saveData" />
        </template>
        <!-- <template></template> -->
      </div>
    </div>
    <div class="cv-wrapper card">
      <div class="card-title">
        <div class="title">简历模板</div>
        <div class="action">
          <button class="btn btn-primary btn-sm" @click="preview" title="导出预览">导出当前简历</button>
        </div>
      </div>
      <div class="card-content">
        <div class="content-title">
          <span class="pre" @click="preCv">← 上一个</span>
          <!-- <span>{{this.currentCvIndex}}</span> -->
          <span class="next" @click="nextCv">下一个 →</span>
        </div>
        <div class>
          <div class="page-wrapper">
            <cv-page
              :resume-name="resumeList[currentCvIndex].name"
              style="border:1px solid #ccc"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataJson from "@/components/views/dataJson.vue";
import cvPage from "@/components/views/cvPage.vue";
import * as INITDATA from "../../resume/data.json";
import "../resumes/resumes";
import { dateFormat } from "@/services/utils.js";
export default {
  components: {
    dataJson,
    cvPage
  },
  data: function() {
    return {
      currentCvIndex: 0,
      resume_data: this.$store.state.resumeData
    };
  },
  computed: {
    resumeList: function() {
      return this.$store.state.resumeList;
    }
  },
  created: function() {},
  mounted: function() {},
  methods: {
    saveData: function(data) {
      this.$store.dispatch("setResumeData", data);
      this.resume_data = data;
    },
    reInit: function(event) {
      this.$store.dispatch("setInitResumeData");
      this.resume_data = JSON.stringify(INITDATA, null, 4);
    },
    timeFormat: function(time) {
      const date = new Date(time);
      const format = "yyyy-MM-dd hh:mm";
      return dateFormat(date, format);
    },
    preCv: function() {
      let index = this.currentCvIndex;
      if (index == 0) {
        index = index + this.resumeList.length;
      }
      this.currentCvIndex = --index % this.resumeList.length;
    },
    nextCv: function() {
      let index = this.currentCvIndex;
      this.currentCvIndex = ++index % this.resumeList.length;
    },
    preview: function() {
      console.log("preview");
      let routeData = this.$router.resolve({
        name: "resume",
        params: { resumeid: this.resumeList[this.currentCvIndex].name }
      });
      window.open(routeData.href, "_blank");
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  margin: 15px;
}
.data-wrapper,
.cv-wrapper {
  flex-basis: 50%;
  overflow: auto;
  /* padding: 10px; */
  box-sizing: content-box;
}
.data-wrapper {
  border-right: 15px solid #cccccc;
}
.card {
  background-color: white;
  box-shadow: 1px 1px 1px #ccc, -1px -1px 1px #ccc;
  min-height: 600px;
}
.card-title {
  border-bottom: 1px solid #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5em;
}
.card-content {
  margin: 15px;
}
.content-title {
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1.5em;
  border-bottom: 0.5px solid #e8e8e8;
}
.grayBg {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}
.page-wrapper {
  transform: scale(0.8) translateX(-85px) translateY(-140px);
}
</style>
