<template>
  <div>
    <!-- <textarea :value="data" @input="save($event.target.value)" rows="100"></textarea> -->
    <!-- <textarea :value="data" @input="$emit('save', $event.target.value)" rows="100"></textarea> -->
    <v-jsoneditor
      v-model="jsonData"
      :options="options"
      :plus="true"
      height="1200px"
      @error="onError"
    />
  </div>
</template>

<script>
import VJsoneditor from "v-jsoneditor/src/index";
export default {
  props: ["data"],
  components: {
    VJsoneditor
  },
  data: function() {
    return {
      // https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options
      // json-scheme-form https://github.com/vue-generators/vue-form-generator
      // https://vuejsfeed.com/blog/generate-forms-using-json-schema-and-vue-js
      options: {
        mode: "text",
        name: "CV",
        onChangeText: (str) => this.onChangeText(str)
      },
      jsonData: JSON.parse(this.data)
    };
  },
  computed: {
    // jsonData: function() {
    //   return JSON.parse(this.data)
    // }
  },
  created: function() {},
  mounted: function() {},
  methods: {
    onError(e) {
      console.log("error", e);
    },
    onChangeText(jsonString) {
      this.$emit("save", jsonString);
    }
  }
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
