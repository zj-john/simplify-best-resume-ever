<template>
  <div>
    <!-- <textarea :value="data" @input="save($event.target.value)" rows="100"></textarea> -->
    <textarea :value="data" @input="$emit('save', $event.target.value)" rows="100"></textarea>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data: function() {
    return {};
  },
  created: function() {},
  mounted: function() {},
  methods: {}
};
</script>

<style scoped>
textarea {
  width: 100%;
  border: none;
  font-size: 12px;
  line-height: 1.5em;
  color: #f5f5f5;
  background-color: #333;
  border-radius: 2px;
}
pre {
  white-space: pre-wrap;
  display: block;
  padding: 8.5px;
  margin: 0 0 9px;
  font-size: 12px;
  line-height: 1.42857143;
  word-break: break-all;
  word-wrap: break-word;
  color: #f5f5f5;
  background-color: #333;
  border: 1px solid #ccc;
  border-radius: 2px;
}
</style>
