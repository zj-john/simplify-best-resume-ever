<template>
  <div>
    <Collapse v-model="collapse_value" :simple="false">
      <Panel :name="String(index+1)" v-for="(item,index) in Object.keys(cv_parts)" :key="item">
        {{cv_part_desc[item]}}
        <small
          v-if="cv_parts[item].allow_not_show"
        >（{{cv_parts[item].is_active?'已启用':'未启用'}}）</small>
        <div slot="content">
          <Card :bordered="true" dis-hover>
            <div slot="title" class="card_title" v-if="cv_parts[item].allow_not_show">
              <div v-if="cv_parts[item].allow_not_show">
                {{cv_parts[item].is_active?'开启':'关闭'}}
                <i-switch
                  size="small"
                  v-model="cv_parts[item].is_active"
                  @on-change="(status) => switchChange(status, item)"
                />
              </div>
              <div>
                <!-- <Button type="primary" shape="circle" icon="ios-add" size="small" v-if="cv_parts[item].content_type == 'array'"></Button> -->
              </div>
            </div>
            <v-jsoneditor
              v-model="json_data[item]"
              :options="cv_parts[item].options"
              :plus="true"
              @error="onError"
            />
          </Card>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import VJsoneditor from "v-jsoneditor/src/index";
import { terms } from "../../terms";
export default {
  props: ["data"],
  components: {
    VJsoneditor
  },
  data: function() {
    const lang = "cn";
    return {
      // https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options
      // json-scheme-form https://github.com/vue-generators/vue-form-generator
      // https://vuejsfeed.com/blog/generate-forms-using-json-schema-and-vue-js
      // options: {
      //   mode: "text",
      //   name: "CV",
      //   onChangeText: str => this.onChangeText(str)
      // },
      // json_data: JSON.parse(this.data),
      // json_data: json_data,
      // 当前cv的内容
      cv_parts: Object.assign({}, JSON.parse(this.$store.state.userCvPartsConfig)),
      // collapse 展开的内容
      collapse_value: 1,
      // collapse_value: [...(new Array(Object.keys(this.$store.state.userCvPartsConfig).length)).keys()],
      // 根据语言确定各部分的描述
      cv_part_desc: terms[lang]
    };
  },
  computed: {
    json_data: function() {
      return JSON.parse(this.data)
    }
  },
  created: function() {
    let cv_parts = {};
    Object.keys(this.cv_parts).forEach(k => {
      cv_parts[k] = Object.assign(this.cv_parts[k], {
        options: {
          mode: "text",
          name: this.cv_part_desc[k],
          onChangeText: str => this.onChangeText(k,str)
        }
      })
    })
    this.cv_parts = cv_parts;
  },
  mounted: function() {},
  methods: {
    onError(e) {
    //   console.log("error", e);
    //   this.$Message.info("JSON Error:" + e)
    },
    onChangeText(key, jsonString) {
      this.json_data[key] = JSON.parse(jsonString);
      this.$emit("save", this.json_data);
    },
    switchChange(status, item) {
        // console.log(status, item);
    //   this.$Message.info("开关状态：" + status);
    }
  }
};
</script>

<style scoped>
.card_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
