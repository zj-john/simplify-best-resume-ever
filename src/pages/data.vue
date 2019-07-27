<template>
  <div class="home">
    <app-header></app-header>
    <div class="content flex_wrapper">
      <div class="input">
        <h4>更新简历信息：</h4>
        <small>请按照样例中的格式更新简历信息，不要加key，不需要的key可以不写</small>
        <small>简历信息会保存在本地缓存中，清空缓存前建议保存信息</small>
        <textarea v-model="resume_data" rows="30" placeholder="add multiple lines"></textarea>
        <button v-on:click="saveData()">保存</button>
        <button v-on:click="reInit()">默认</button>
      </div>
      <div class="result">
        <h4>预览简历：</h4>
        <pre>{{ resume_data }}</pre>
      </div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from "vue";
import appHeader from "@/components/layout/head";
import appFooter from "@/components/layout/foot";
import {
  getLocalstorage,
  setLocalstorage,
  dateFormat
} from "@/services/utils.js";
import * as INITDATA from "../../resume/data.json";
export default Vue.component("custom", {
  name: "app",
  components: {
    appHeader,
    appFooter
  },
  data: function() {
    return {
      layout: "",
      INITDATA: INITDATA,
      resume_data: null
    };
  },
  created: function() {
    // storage
    let local_data = getLocalstorage("resume_data");
    if (local_data) {
      this.resume_data = local_data;
    } else {
      this.resume_data = JSON.stringify(this.INITDATA, null, 4);
    }
  },
  mounted: function() {},
  methods: {
    saveData: function() {
      console.log("save", this.resume_data);
      // window.localStorage.setItem("resume_data", this.resume_data)
      setLocalstorage({
        resume_data: this.resume_data
      });
    },
    reInit: function(event) {
      this.resume_data = JSON.stringify(this.INITDATA, null, 4);
    },
    timeFormat: function(time) {
      const date = new Date(time);
      const format = "yyyy-MM-dd hh:mm";
      return dateFormat(date, format);
    }
  }
});
</script>

<style scoped>
.flex_wrapper {
  display: flex;
}
.content {
  margin: 20px;
}
.input,
.result {
  flex-basis: 50%;
}
textarea {
  width: 100%;
}
pre {
}
</style>
