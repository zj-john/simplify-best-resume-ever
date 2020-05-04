<template>
  <div class="page" :id="resumeName">
    <div class="page-inner">
      <component :is="resumeName"></component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import '../../resumes/resumes';
export default {
    props:['resumeName']
};
</script>

<style scoped>
.page-inner{
  height: 100%;
  width: 100%;
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
