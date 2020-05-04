<template>
  <div class="page-wrapper">
    <div class="print">
      <button class="btn btn-primary" @click="print">打印为PDF</button>
    </div>
    <div class="page" :id="$route.params.resumeid">
      <div class="page-inner">
        <component :is="$route.params.resumeid"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "../resumes/resumes";
export default {
  methods: {
    print: function() {
      window.print();
    }
  }
};
</script>
<style type="text/css" media="print">
@page {
  /* 设置打印机边距 */
  size: auto; /* auto is the current printer page size */
  margin: 0mm; /* this affects the margin in the printer settings */
}
</style>
<style scoped>
.page-inner {
  height: 100%;
  width: 100%;
}
.page-wrapper {
  position: relative;
  overflow-x: hidden;
  background: #cccccc;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}
.print {
  position: absolute;
  top: 50px;
  right: 100px;
}
.resume {
  height: 100%;
  width: 100%;
}

.page {
  background: white;
  position: relative;
  width: 21cm;
  height: 29.68cm;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
</style>
