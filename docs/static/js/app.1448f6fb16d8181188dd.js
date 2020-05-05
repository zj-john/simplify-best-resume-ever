webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVueOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terms__ = __webpack_require__(24);



function getVueOptions(name) {
  var opt = {
    name: name,
    data: function data() {
      return {
        terms: __WEBPACK_IMPORTED_MODULE_1__terms__["a" /* terms */]
      };
    },

    created: function created() {},
    computed: {
      person: function person() {
        return JSON.parse(this.$store.state.resumeData);
      },
      lang: function lang() {
        var defaultLang = this.terms.en;
        var useLang = this.terms[this.person.lang];

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(defaultLang).filter(function (k) {
          return !useLang[k];
        }).forEach(function (k) {
          console.log(k);
          useLang[k] = defaultLang[k];
        });

        return useLang;
      }
    }
  };
  return opt;
}



/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"name":{"cn":"张三","en":"John"},"sex":"男","birth":{"year":1990,"location":"上海","age":"30"},"current":{"company":"xxxx技术有限公司","position":"前端开发工程师","working_years":"4","city":"上海","degree":"硕士"},"motto":"用技术做点有意思的事儿","description":"这里是我的自我描述。人生这么短，且行且努力。","contact":{"email":"zj_john@qq.com","tel":"180xxxxxxxx","website":"https://zj-john.github.io","github":"zj-john"},"experience":[{"company":"xxxx技术有限公司 开发部门","position":"开发工程师","time_from":"2015.07","time_to":"至今","description":"工具设计、开发，目前负责前端开发、管理"}],"education":[{"school":"xxxx大学","degree":"计算机应用技术 学术硕士","time_from":"2012.09","time_to":"2015.07","description":"现代软件技术"}],"skills":["熟悉HTML、JS、CSS，熟悉HTML5、ES6、CSS3、WEBAPI规范、语法，可以写原生JS项目","熟悉REACT、VUE等主流框架及其生态系统的使用","了解Node后端开发，koa框架","熟悉CDN、HTTP，熟悉前后端分离开发模式","了解python，java等后端技术，可写脚本及web后台"],"skill_scores":[{"name":"HTML5","level":99},{"name":"CSS3","level":95},{"name":"JavaScript","level":97},{"name":"Node.js","level":93},{"name":"Angular 2","level":60},{"name":"TypeScript","level":80},{"name":"ES.Next","level":70},{"name":"Docker","level":99}],"skill_description":"精通Photoshop和Illustrator, 对产品和架构一定经验","projects":{"web":[{"name":"project1","desc":"1.自顶向下展示应用架构各维度数据。2.涵盖应用生命周期中功能操作。3.衍生产品（应用诊断，自动故障分析）。","tech":"react16 + router3 + redux5 + webpack3 + react-intl + ravenjs","work":"1. 框架搭建（前端结构，node层接SSO，做service转发，自动发布脚本） 2.routeManager（代理所有路由行为，实现glider书签效果） 3.i18n（实现中英双语展示） 4.自定义个人页（localstorage储存、flex布局） 5.codereview,组件重构"},{"name":"project2","desc":"1.日常流量调度。2.灾备切换。3.数据中心级别一键切换、恢复","tech":"Angular1 + bootstrap4 + gulp + bower + echarts","work":"1.数据中心切换动画效果（多background-image画数据中心地图，div画线，伪类画箭头，设置动画）。 2. 宏任务管理（切换过程中需要轮询更新多个数据，保持后端接口唯一调用的同时，实现Dom节流）。3. 多Echarts图例绑定展示"},{"name":"project3","desc":"混沌工程，故障注入","tech":"vue2 + router3 + vuex3 + less + axios + vis + ElementUI","work":"1.框架搭建。2.vis绘制依赖关系"},{"name":"project4","desc":"异常检测平台，覆盖时序数据异常检测实验运行的整个生命周期，支持数据接入、算法选择、参数定制等","tech":"react16 + router4 + redux6 + materialUI + markdown + canvas","work":"1.用canvas描述数据流图，动态添加节点。2.在线MD文件预览"},{"name":"project5","desc":"高效、易用，功能强大的可视化接口管理平台（开源项目落地）","tech":"react全家桶 +  koa全家桶 + Mongo + mockjs","work":"1.接入SSO。2.增加权限管理模块"}],"hybrid":[{"name":"project6","desc":"简单、实用、快速的行程规划App，根据起点和终点的位置（同城）、时间，选择或不选意向景点，动态生成出行规划。","tech":"JqueryMobile + Ionic + Django + LBS","work":"1. 产品经理。2.前端开发。3.推荐算法。"},{"name":"project7","desc":"主打年轻化、社交化的周末游App，创建或加入活动（微创新优秀项目）","tech":"vue2 + vuex3 + dcloudio/uni-ui","work":"1. 产品。2.前端开发，Demo包含主页、列表页、详情页、新闻页、聊天页等内容，风格功能参照点评和小红书。"},{"name":"project8","desc":"订单后分享流程，生成订单后，选择样式模板，加入自定义文案和图片，一键生成图片，便于分享。","tech":"react15 + antd-mobile + canvas","work":"1. 前端开发。 2. canvas画板，导出图片"}],"github":[{"name":"GitHub_MockServer","desc":"通过service-worker做代理，把github可访问的静态JSON文件，解析为http返回，实现mock功能。JSON文件中可以自定义响应码，返回时间。"},{"name":"Relieve_DNS_Hijacking_by_SW","desc":"缓解DNS劫持探索。在service-worker中添加多个hosts，当其中某一个host访问不通（如被劫持），将尝试使用备用host访问，并加入缓存。"},{"name":"Node_Scripts","desc":"1. 房产网站爬虫，爬取某网站二手房信息，入库和导出excel。2.把通过灰度反转，字符串填充的方式，把图片用字符样式代替。3.生成NPMdependency树。"},{"name":"drawing_Board","desc":"通过图片、气泡、文字等canvas元素，自定义生成四格漫画。"},{"name":"simplify-best-resume-ever(fork)","desc":"通过配置文件、自定义模板生成简历"}]},"lang":"cn"}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLocalstorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLocalstorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

var getLocalstorage = function getLocalstorage(key) {
    return window.localStorage.getItem(key);
};

var setLocalstorage = function setLocalstorage(o) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(o).map(function (k) {
        if (o[k]) {
            window.localStorage.setItem(k, o[k]);
        }
    });
};

var dateFormat = function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_dark_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_dark_copy_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__left_right_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oblique_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__side_bar_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purple_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__side_bar_rtl_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__left_right_rtl_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__web_frontend_vue__ = __webpack_require__(127);











/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_head__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_foot__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_css__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_css__);





/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    appHeader: __WEBPACK_IMPORTED_MODULE_0__components_layout_head__["a" /* default */],
    appFooter: __WEBPACK_IMPORTED_MODULE_1__components_layout_foot__["default"]
  },
  computed: {
    layoutShow: function layoutShow() {
      return this.$store.state.layoutShow;
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("head", {
  name: "app"
}));

/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumes_resumes__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    print: function print() {
      window.print();
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);




var name = 'material-dark';

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return terms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_en__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_cn__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_zh_tw__ = __webpack_require__(96);




var terms = {
  en: __WEBPACK_IMPORTED_MODULE_0__lang_en__["a" /* default */], cn: __WEBPACK_IMPORTED_MODULE_1__lang_cn__["a" /* default */], 'zh-tw': __WEBPACK_IMPORTED_MODULE_2__lang_zh_tw__["a" /* default */]
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_data_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__resume_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_resume_skill_template1_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_resume_experience_template1_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_resume_education_template1_vue__ = __webpack_require__(105);











var name = "material-dark-copy";

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].component(name, {
  data: function data() {
    return {
      person: null,
      terms: __WEBPACK_IMPORTED_MODULE_3__terms__["a" /* terms */],
      template_config: {
        avatar: {
          is_show: true
        },
        contact: {
          is_show: true
        },
        skill: {
          is_show: true
        },
        info: {
          is_show: true
        },
        experience: {
          is_show: true
        },
        education: {
          is_show: true
        },
        project: {
          is_show: true
        }
      }
    };
  },

  components: {
    skillTemplate: {
      template: __webpack_require__(26)
    },
    experienceTemplate1: __WEBPACK_IMPORTED_MODULE_6__components_resume_experience_template1_vue__["a" /* default */],
    educationTemplate1: __WEBPACK_IMPORTED_MODULE_7__components_resume_education_template1_vue__["a" /* default */]
  },
  created: function created() {
    var _data = Object(__WEBPACK_IMPORTED_MODULE_4__services_utils_js__["b" /* getLocalstorage */])("resume_data");
    if (_data) {
      this.person = JSON.parse(_data);
    } else {
      this.person = __WEBPACK_IMPORTED_MODULE_2__resume_data_json__;
    }
  },
  computed: {
    lang: function lang() {
      var defaultLang = this.terms.en;
      var useLang = this.terms[this.person.lang];

      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(defaultLang).filter(function (k) {
        return !useLang[k];
      }).forEach(function (k) {
        console.log(k);
        useLang[k] = defaultLang[k];
      });

      return useLang;
    }
  }
}));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_template1_vue__ = __webpack_require__(27);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76d3693a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_template1_vue__ = __webpack_require__(101);
function injectStyle (context) {
  __webpack_require__(100)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76d3693a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_template1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76d3693a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_template1_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("skillTemplate1", {
  props: ["data"]
}));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("experienceTemplate1", {
  props: ["data"]
}));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("educationTemplate1", {
  props: ["data"]
}));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'left-right';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'oblique';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'side-bar';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('purple', Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'side-bar-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);




var name = 'left-right-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);




var name = "web-frontend";
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("resume", {
  name: "app",
  components: {},
  data: function data() {
    return {
      resumeList: [{ name: "material-dark" }, { name: "left-right" }, { name: "oblique" }, { name: "side-bar" }, { name: "purple" }, { name: "left-right-rtl" }, { name: "side-bar-rtl" }]
    };
  },
  methods: {
    linkto: function linkto() {
      this.$router.push("/data");
    }
  }
}));

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app',
  components: {},
  data: function data() {
    return {
      resumeList: [{ 'name': 'material-dark' }, { 'name': 'left-right' }, { 'name': 'oblique' }, { 'name': 'side-bar' }, { 'name': 'purple' }, { 'name': 'left-right-rtl' }, { 'name': 'side-bar-rtl' }, { 'name': 'web-frontend' }]
    };
  },
  methods: {
    preview: function preview(name) {
      var routeData = this.$router.resolve({
        name: "resume",
        params: { resumeid: name }
      });
      window.open(routeData.href, "_blank");
    },
    select: function select(name) {
      this.$router.push({
        name: 'data',
        params: {
          resumeid: name
        }
      });
    }
  }
}));

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("custom", {
  name: "app",
  components: {},
  data: function data() {
    return {
      sel_layout: "",
      content: [],

      sel_layout_config: [{
        name: "左右布局",
        id: "left_right",
        desc: "适合一页简历",
        img: __webpack_require__(148),
        value: "left_right"
      }, {
        name: "上下布局",
        id: "top_bottom",
        desc: "适合内容多的多页简历",
        img: __webpack_require__(149),
        value: "top_bottom"
      }, {
        name: "上下布局",
        id: "top_bottom1",
        desc: "适合内容多的多页简历",
        img: __webpack_require__(150),
        value: "top_bottom"
      }, {
        name: "上下布局",
        id: "top_bottom2",
        desc: "适合内容多的多页简历",
        img: __webpack_require__(151),
        value: "top_bottom"
      }, {
        name: "上下布局",
        id: "top_bottom3",
        desc: "适合内容多的多页简历",
        img: __webpack_require__(152),
        value: "top_bottom"
      }],
      sel_content_config: [{
        name: "头像",
        id: "left_right",
        desc: "适合一页简历",
        img: "../assets/preview/resume-left-right-rtl.png"
      }, {
        name: "教育经历",
        id: "top_bottom",
        desc: "适合内容多的多页简历",
        img: "../assets/preview/resume-left-right-rtl.png"
      }, {
        name: "职业经历",
        id: "top_bottom2",
        desc: "适合内容多的多页简历",
        img: "../assets/preview/resume-left-right-rtl.png"
      }, {
        name: "项目",
        id: "top_bottom3",
        desc: "适合内容多的多页简历",
        img: "../assets/preview/resume-left-right-rtl.png"
      }, {
        name: "技能",
        id: "top_bottom4",
        desc: "适合内容多的多页简历",
        img: "../assets/preview/resume-left-right-rtl.png"
      }]
    };
  }
}));

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_data_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__resume_data_json__);






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].component("custom", {
  name: "app",
  components: {},
  data: function data() {
    return {
      layout: "",
      INITDATA: __WEBPACK_IMPORTED_MODULE_3__resume_data_json__,
      resume_data: null
    };
  },
  created: function created() {
    var local_data = Object(__WEBPACK_IMPORTED_MODULE_2__services_utils_js__["b" /* getLocalstorage */])("resume_data");
    if (local_data) {
      this.resume_data = local_data;
    } else {
      this.resume_data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.INITDATA, null, 4);
    }
  },
  mounted: function mounted() {},
  methods: {
    saveData: function saveData() {
      console.log("save", this.resume_data);

      Object(__WEBPACK_IMPORTED_MODULE_2__services_utils_js__["c" /* setLocalstorage */])({
        resume_data: this.resume_data
      });
    },
    reInit: function reInit(event) {
      this.resume_data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.INITDATA, null, 4);
    },
    timeFormat: function timeFormat(time) {
      var date = new Date(time);
      var format = "yyyy-MM-dd hh:mm";
      return Object(__WEBPACK_IMPORTED_MODULE_2__services_utils_js__["a" /* dateFormat */])(date, format);
    }
  }
}));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_views_dataJson_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_views_cvPage_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_data_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__resume_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resumes_resumes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utils_js__ = __webpack_require__(7);








/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    dataJson: __WEBPACK_IMPORTED_MODULE_1__components_views_dataJson_vue__["a" /* default */],
    cvPage: __WEBPACK_IMPORTED_MODULE_2__components_views_cvPage_vue__["a" /* default */]
  },
  data: function data() {
    return {
      currentCvIndex: 0,
      resume_data: this.$store.state.resumeData
    };
  },
  computed: {
    resumeList: function resumeList() {
      return this.$store.state.resumeList;
    }
  },
  created: function created() {
    var _this = this;

    console.log("resume", this.$route.params.resumeid);
    var index = 0;
    if (this.$route.params.resumeid) {
      index = this.resumeList.findIndex(function (item) {
        return item.name == _this.$route.params.resumeid;
      });
    }
    this.currentCvIndex = index;
  },
  mounted: function mounted() {},
  methods: {
    saveData: function saveData(data) {
      this.$store.dispatch("setResumeData", data);
      this.resume_data = data;
    },
    reInit: function reInit(event) {
      this.$store.dispatch("setInitResumeData");
      this.resume_data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(__WEBPACK_IMPORTED_MODULE_3__resume_data_json__, null, 4);
    },
    timeFormat: function timeFormat(time) {
      var date = new Date(time);
      var format = "yyyy-MM-dd hh:mm";
      return Object(__WEBPACK_IMPORTED_MODULE_5__services_utils_js__["a" /* dateFormat */])(date, format);
    },
    preCv: function preCv() {
      var index = this.currentCvIndex;
      if (index == 0) {
        index = index + this.resumeList.length;
      }
      this.currentCvIndex = --index % this.resumeList.length;
    },
    nextCv: function nextCv() {
      var index = this.currentCvIndex;
      this.currentCvIndex = ++index % this.resumeList.length;
    },
    preview: function preview() {
      console.log("preview");
      var routeData = this.$router.resolve({
        name: "resume",
        params: { resumeid: this.resumeList[this.currentCvIndex].name }
      });
      window.open(routeData.href, "_blank");
    }
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_jsoneditor_src_index__ = __webpack_require__(162);



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["data"],
  components: {
    VJsoneditor: __WEBPACK_IMPORTED_MODULE_0_v_jsoneditor_src_index__["a" /* default */]
  },
  data: function data() {
    var _this = this;

    return {
      options: {
        mode: "text",
        name: "CV",
        onChangeText: function onChangeText(str) {
          return _this.onChangeText(str);
        }
      },
      jsonData: JSON.parse(this.data)
    };
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    onError: function onError(e) {
      console.log("error", e);
    },
    onChangeText: function onChangeText(jsonString) {
      this.$emit("save", jsonString);
    }
  }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsoneditor_dist_jsoneditor_min_js__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsoneditor_dist_jsoneditor_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsoneditor_dist_jsoneditor_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsoneditor_dist_jsoneditor_min_css__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsoneditor_dist_jsoneditor_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsoneditor_dist_jsoneditor_min_css__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "v-jsoneditor",
  data: function data() {
    return {
      editor: null,
      style: {},
      max: false,
      internalChange: false
    };
  },

  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: [Object, Array, Number, String, Boolean],
    height: {
      type: String
    },
    plus: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onChange: function onChange() {
      var _this = this,
          _options;

      var error = null;
      var json = {};
      try {
        json = this.editor.get();
      } catch (err) {
        error = err;
      }
      if (error) {
        this.$emit("error", error);
      } else {
        if (this.editor) {
          this.internalChange = true;
          this.$emit("input", json);
          this.$nextTick(function () {
            _this.internalChange = false;
          });
        }
      }
      this.options.onChange && (_options = this.options).onChange.apply(_options, arguments);
    },
    initView: function initView() {
      if (!this.editor) {
        var container = this.$refs.jsoneditor;
        var cacheChange = this.options.onChange;
        delete this.options.onChange;
        var options = Object.assign(this.options, {
          onChange: this.onChange
        });
        this.editor = new __WEBPACK_IMPORTED_MODULE_0_jsoneditor_dist_jsoneditor_min_js___default.a(container, options);
        this.options.onChange = cacheChange;
      }
      this.editor.set(this.value || {});
    },
    destroyView: function destroyView() {
      if (this.editor) {
        this.editor.destroy();
        this.editor = null;
      }
    }
  },
  watch: {
    value: {
      handler: function handler(value) {
        if (this.editor && value && !this.internalChange) {
          this.editor.set(value);
        }
      },

      deep: true
    },
    max: function max(value) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.initView();
      });
    }
  },
  mounted: function mounted() {
    this.initView();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyView();
  },

  computed: {
    getHeight: function getHeight() {
      if (this.height && !this.max) {
        return {
          height: this.height
        };
      }
      return {};
    }
  }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumes_resumes__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['resumeName']
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(173);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach(function (to, from, next) {
  if (to.name == 'resume') {
    __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].dispatch('setLayout', false);
  } else {
    __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].dispatch('setLayout', true);
  }
  next();
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
  }
});

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f5b96f0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(59);
function injectStyle (context) {
  __webpack_require__(50)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f5b96f0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2468529b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_head_vue__ = __webpack_require__(54);
function injectStyle (context) {
  __webpack_require__(53)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2468529b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_head_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2468529b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_head_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(5)}}),_vm._v(" "),_c('router-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":"/","exact":""}},[_c('span',{staticClass:"title"},[_vm._v("快简历")])]),_vm._v(" "),_c('nav',[_c('router-link',{attrs:{"to":"/data","active-class":"link_active"}},[_c('span',[_vm._v("简历")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"/resume","active-class":"link_active","exact":""}},[_c('span',[_vm._v("模板")])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_foot_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_foot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_foot_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a7cfcd6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_foot_vue__ = __webpack_require__(57);
function injectStyle (context) {
  __webpack_require__(56)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_foot_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a7cfcd6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_foot_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"foot_wrapped"},[_c('div'),_vm._v(" "),_c('div',{staticClass:"right"},[_vm._v("\n    咨询、交流、反馈请联系\n    "),_c('a',{attrs:{"href":"mailto:admin@flll.me"}},[_vm._v("admin@flll.me")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(_vm.layoutShow)?_c('app-header'):_vm._e(),_vm._v(" "),_c('main',[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_resume__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_intro__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_custom__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_data__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main__ = __webpack_require__(158);









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'intro',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_intro__["a" /* default */]
  }, {
    path: '/resume',
    name: 'home',
    component: __WEBPACK_IMPORTED_MODULE_4__pages_home__["a" /* default */]
  }, {
    path: '/resume/:resumeid',
    name: 'resume',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_resume__["a" /* default */]
  }, {
    path: '/custom',
    name: 'custom',
    component: __WEBPACK_IMPORTED_MODULE_5__pages_custom__["a" /* default */]
  }, {
    path: '/data',
    name: 'data',
    component: __WEBPACK_IMPORTED_MODULE_7__pages_main__["a" /* default */]
  }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54f83733_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__ = __webpack_require__(130);
function injectStyle (context) {
  __webpack_require__(63)
  __webpack_require__(64)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54f83733"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54f83733_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_vue__ = __webpack_require__(19);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b39c4d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_vue__ = __webpack_require__(97);
function injectStyle (context) {
  __webpack_require__(66)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4b39c4d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b39c4d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/id.087ce5d.jpg";

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contact',
  born: 'Born',
  bornIn: 'in',
  experience: 'Experience',
  education: 'Education',
  skills: 'Skills',
  about: 'About me'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: '联系方式',
  experience: '工作经历',
  education: '教育经历',
  skills: '技能专长',
  about: '自我介绍'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: '聯絡方式',
  experience: '經歷',
  education: '學歷',
  skills: '技能專長',
  about: '自我介紹'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume"},[_c('div',{staticClass:"leftCol m_box"},[_c('div',{staticClass:"shadow"}),_vm._v(" "),_c('div',{staticClass:"heading",attrs:{"id":"myselfpic"}}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v("\r\n      "+_vm._s(_vm.lang.contact)+"\r\n    ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(" "+_vm._s(_vm.lang.born)+" "+_vm._s(_vm.person.birth.year)+" "+_vm._s(_vm.lang.bornIn)+" "+_vm._s(_vm.person.birth.location))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.person.current.city))])])])]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.tel}},[_c('div',{staticClass:"item"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\r\n          "+_vm._s(_vm.person.contact.tel)+"\r\n        ")])])]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_c('div',{staticClass:"item"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\r\n          "+_vm._s(_vm.person.contact.email)+"\r\n        ")])])]),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v("@"+_vm._s(_vm.person.contact.github))]),_vm._v(" "),_c('span',[_vm._v("github.com/"+_vm._s(_vm.person.contact.github))])])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v(_vm._s(_vm.person.contact.website))])])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item last"},[_c('div',{staticClass:"section-headline"},[_vm._v("\r\n        "+_vm._s(_vm.lang.skills)+"\r\n      ")]),_vm._v(" "),_vm._l((_vm.person.skill_scores),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('div',{staticClass:"right"},[_c('span',[_vm._v(_vm._s(skill.name)+" ")]),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"determinate",style:('width: '+skill.level+'%;')},[_c('i',{staticClass:"fa fa-circle"})])])])])})],2)]),_vm._v(" "),_c('div',{staticClass:"rightCol"},[_c('div',{staticClass:"title"},[_c('h2',[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.person.current.position))])]),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('h3',{staticClass:"headline"},[_vm._v(_vm._s(experience.position)+" - "+_vm._s(experience.company))]),_vm._v(" "),_c('div',{staticClass:"subheadline"},[_vm._v(_vm._s(experience.time_from)+" "+_vm._s(experience.time_to))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\r\n          "+_vm._s(experience.description)+"\r\n        ")])])}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\r\n        "+_vm._s(education.time_from)+" "+_vm._s(education.time_to)+", "+_vm._s(education.description)+"\r\n      ")])])})],2),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_copy_vue__ = __webpack_require__(25);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_462d6816_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_copy_vue__ = __webpack_require__(108);
function injectStyle (context) {
  __webpack_require__(99)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-462d6816"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_copy_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_462d6816_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_copy_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.data),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('div',{staticClass:"right"},[_c('span',[_vm._v(_vm._s(skill.name)+" ")]),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"determinate",style:('width: '+skill.level+'%;')},[_c('i',{staticClass:"fa fa-circle"})])])])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_template1_vue__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_407881a8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_template1_vue__ = __webpack_require__(104);
function injectStyle (context) {
  __webpack_require__(103)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-407881a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_template1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_407881a8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_template1_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.data),function(experience){return _c('div',{key:experience.company,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('h3',{staticClass:"headline"},[_vm._v(_vm._s(experience.position)+" - "+_vm._s(experience.company))]),_vm._v(" "),_c('div',{staticClass:"subheadline"},[_vm._v(_vm._s(experience.timeperiod))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v(_vm._s(experience.description))])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_template1_vue__ = __webpack_require__(29);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_faa78e4a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_template1_vue__ = __webpack_require__(107);
function injectStyle (context) {
  __webpack_require__(106)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-faa78e4a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_template1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_faa78e4a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_template1_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.data),function(education){return _c('div',{key:education.degree,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v(_vm._s(education.timeperiod)+", "+_vm._s(education.description))])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume"},[_c('div',{staticClass:"leftCol m_box"},[_c('div',{staticClass:"shadow"}),_vm._v(" "),(_vm.template_config.avatar.is_show)?_c('div',[_vm._m(0)]):_vm._e(),_vm._v(" "),(_vm.template_config.contact.is_show)?_c('div',[_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.lang.born)+" "+_vm._s(_vm.person.birth.year)+" "+_vm._s(_vm.lang.bornIn)+" "+_vm._s(_vm.person.birth.location))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.person.contact.city))])])])]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_c('div',{staticClass:"item"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.person.contact.phone))])])]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_c('div',{staticClass:"item"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.person.contact.email))])])]),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v("@"+_vm._s(_vm.person.contact.github))]),_vm._v(" "),_c('span',[_vm._v("github.com/"+_vm._s(_vm.person.contact.github))])])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v(_vm._s(_vm.person.contact.website))])])])]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.template_config.skill.is_show)?_c('div',{staticClass:"item last"},[_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c(_vm.skillTemplate,{tag:"component",attrs:{"data":_vm.person.skills}})],1):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"rightCol"},[(_vm.template_config.info.is_show)?_c('div',{staticClass:"title"},[_c('h2',[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.person.position))])]):_vm._e(),_vm._v(" "),(_vm.template_config.experience.is_show)?_c('div',[_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_c('experience-template-1',{attrs:{"data":_vm.person.experience}})],1):_vm._e(),_vm._v(" "),(_vm.template_config.education.is_show)?_c('div',[_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_c('education-template-1',{attrs:{"data":_vm.person.education}})],1):_vm._e()]),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"heading"},[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":__webpack_require__(67)}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_vue__ = __webpack_require__(30);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_448e79da_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_vue__ = __webpack_require__(111);
function injectStyle (context) {
  __webpack_require__(110)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-448e79da"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_448e79da_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.current.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.tel}},[_vm._v(_vm._s(_vm.person.contact.tel))])]),_vm._v(" "),_vm._m(2)]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])]),_vm._v(" "),_vm._m(3)]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]),_vm._v(" "),_vm._m(4)]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skill_scores),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skill_description)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_oblique_vue__ = __webpack_require__(31);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e76a9c6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_oblique_vue__ = __webpack_require__(114);
function injectStyle (context) {
  __webpack_require__(113)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e76a9c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_oblique_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e76a9c6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_oblique_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume3"}},[_c('div',{staticClass:"resume-header"},[_c('div',{staticClass:"triangle"}),_vm._v(" "),_c('div',{staticClass:"person-header"},[_c('div',{staticClass:"person-wrapper"},[_c('div',{staticClass:"person"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',{staticClass:"position"},[_vm._v(_vm._s(_vm.person.current.position))])]),_vm._v(" "),_c('div',{staticClass:"img"})])])]),_vm._v(" "),_c('div',{staticClass:"resume-content"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('i',{staticClass:"fa fa-sort-down",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.time_from)+" "+_vm._s(experience.time_to))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(", "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skill-section"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_vm._l((_vm.person.skill_scores),function(skill){return _c('div',{key:skill.name,staticClass:"skills"},[_c('div',{staticClass:"skill-block"},[_c('i',{staticClass:"fa fa-sort-down",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-other"},[_c('span',[_vm._v(_vm._s(_vm.person.knowledge)+" ")])]),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(" "+_vm._s(_vm.person.contact.email))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.tel}},[_vm._v(_vm._s(_vm.person.contact.tel))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.contact.city))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v("\r\n              "+_vm._s(_vm.person.contact.website))]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('span',[_vm._v("; ")]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("\r\n                https://github.com/"+_vm._s(_vm.person.contact.github))]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_vue__ = __webpack_require__(32);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dfd62810_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_vue__ = __webpack_require__(117);
function injectStyle (context) {
  __webpack_require__(116)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dfd62810"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dfd62810_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.current.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.tel}},[_vm._v(_vm._s(_vm.person.contact.tel))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.time_from)+" "+_vm._s(experience.time_to))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skill_scores),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skill_description)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_purple_vue__ = __webpack_require__(33);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dbe5fae_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_purple_vue__ = __webpack_require__(120);
function injectStyle (context) {
  __webpack_require__(119)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3dbe5fae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_purple_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dbe5fae_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_purple_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"template"}},[_c('div',{attrs:{"id":"resume-header"}},[_c('div',{attrs:{"id":"header-left"}},[_c('h2',{attrs:{"id":"position"}},[_vm._v(_vm._s(_vm.person.current.position))]),_vm._v(" "),_c('h1',{attrs:{"id":"name"}},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',{attrs:{"id":"info-flex"}},[_c('span',{attrs:{"id":"email"}},[_c('a',{attrs:{"href":"mailto:" + _vm.person.contact.email}},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_c('span',{attrs:{"id":"phone"}},[_c('i',{staticClass:"fa fa-phone-square",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.tel))]),_vm._v(" "),(_vm.person.contact.website)?_c('span',{attrs:{"id":"website"}},[_c('a',{attrs:{"href":_vm.person.contact.website}},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.website))])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('span',{attrs:{"id":"github"}},[_c('a',{attrs:{"href":"https://github.com/" + _vm.person.contact.github}},[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{attrs:{"id":"resume-body"}},[_c('div',{attrs:{"id":"experience-container"}},[_c('h2',{attrs:{"id":"experience-title"}},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience"},[_c('h2',{staticClass:"company"},[_vm._v(_vm._s(experience.company))]),_vm._v(" "),_c('p',{staticClass:"job-info"},[_c('span',{staticClass:"job-title"},[_vm._v(_vm._s(experience.position)+" | ")]),_c('span',{staticClass:"experience-timeperiod"},[_vm._v(_vm._s(experience.timeperiod))])]),_vm._v(" "),(experience.description)?_c('p',{staticClass:"job-description"},[_vm._v(_vm._s(experience.description))]):_vm._e(),_vm._v(" "),(experience.list)?_c('ul',_vm._l((experience.list),function(item,index){return _c('li',{key:index},[_c('span',{staticClass:"list-item-black"},[_vm._v("\r\n                        "+_vm._s(item)+"\r\n                      ")])])})):_vm._e()])})],2),_vm._v(" "),_c('div',{attrs:{"id":"education-container"}},[_c('h2',{attrs:{"id":"education-title"}},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education"},[_c('h2',{staticClass:"education-description"},[_vm._v(_vm._s(education.description))]),_vm._v(" "),_c('p',[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree)+" | ")]),_c('span',{staticClass:"education-timeperiod"},[_vm._v(_vm._s(education.timeperiod))])])])})],2),_vm._v(" "),(_vm.person.skills != [])?_c('div',{attrs:{"id":"skills-container"}},[_c('h2',{attrs:{"id":"skills-title"}},[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_c('p',{attrs:{"id":"skill-description"}},[_vm._v(_vm._s(_vm.person.knowledge))]),_vm._v(" "),_c('ul',{attrs:{"id":"skill-list"}},_vm._l((_vm.person.skill_scores),function(skill){return _c('li',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"list-item-black"},[_vm._v("\r\n                    "+_vm._s(skill.name)+"\r\n                  ")])])}))]):_vm._e()]),_vm._v(" "),_c('div',{attrs:{"id":"resume-footer"}},[(_vm.person.description)?_c('div',[_c('h2',[_vm._v(_vm._s(_vm.lang.about))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.person.description))])]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header-right"}},[_c('div',{attrs:{"id":"headshot"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__ = __webpack_require__(34);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c599064_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__ = __webpack_require__(123);
function injectStyle (context) {
  __webpack_require__(122)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c599064"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c599064_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.current.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":"'tel:'+person.contact.tel"}},[_vm._v(_vm._s(_vm.person.contact.tel))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.time_from)+" "+_vm._s(experience.time_to))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skill_scores),function(skill){return _c('div',{staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skill_description)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__ = __webpack_require__(35);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b5a5fdf4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__ = __webpack_require__(126);
function injectStyle (context) {
  __webpack_require__(125)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b5a5fdf4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b5a5fdf4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.current.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.time_from)+" "+_vm._s(experience.time_to))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_vm._m(1),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])])]),_vm._v(" "),_c('tr',[_vm._m(2),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.tel}},[_vm._v(_vm._s(_vm.person.contact.tel))])])]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_vm._m(3),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_vm._m(4),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skill_scores),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skill_description)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_web_frontend_vue__ = __webpack_require__(36);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac25b178_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_web_frontend_vue__ = __webpack_require__(129);
function injectStyle (context) {
  __webpack_require__(128)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ac25b178"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_web_frontend_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac25b178_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_web_frontend_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"web-frontend"}},[_c('header',[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',[_c('div',{staticClass:"info"},[_c('span',[_vm._v(_vm._s(_vm.person.current.company))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.current.position))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.current.working_years)+"年以上工作经验")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.current.degree))])]),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('span',[_vm._m(0),_vm._v("\n          "+_vm._s(_vm.person.contact.tel)+"\n        ")]),_vm._v(" "),_c('span',[_vm._m(1),_vm._v(" "),_c('a',{attrs:{"href":'mailto:' + _vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_c('span',[_vm._m(2),_vm._v(" "),_c('a',{attrs:{"href":'https://github.com/' + _vm.person.contact.github,"target":"_blank"}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]),_vm._v(" "),_c('span',[_vm._m(3),_vm._v(" "),_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_vm._v(_vm._s(_vm.person.contact.website))])])])])]),_vm._v(" "),_c('article',{staticClass:"work"},[_c('div',{staticClass:"article_title"},[_vm._v("工作经历")]),_vm._v(" "),_vm._l((_vm.person.experience),function(data,index){return _c('div',{key:index,staticClass:"card"},[_c('div',{staticClass:"card_title"},[_c('div',[_vm._v(_vm._s(data.company))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(data.time_from)+" - "+_vm._s(data.time_to))])]),_vm._v(" "),_c('div',{staticClass:"card_content work_content"},[_vm._v(_vm._s(data.description))])])})],2),_vm._v(" "),_c('article',{staticClass:"study"},[_c('div',{staticClass:"article_title"},[_vm._v("教育经历")]),_vm._v(" "),_vm._l((_vm.person.education),function(data,index){return _c('div',{key:index,staticClass:"card"},[_c('div',{staticClass:"card_title"},[_c('div',[_vm._v(_vm._s(data.school))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(data.time_from)+" - "+_vm._s(data.time_to))])]),_vm._v(" "),_c('div',{staticClass:"card_content study_content"},[_vm._v(_vm._s(data.description))])])})],2),_vm._v(" "),_c('article',{staticClass:"skill"},[_c('div',{staticClass:"article_title"},[_vm._v("专业技能")]),_vm._v(" "),_c('ul',{staticClass:"card"},_vm._l((_vm.person.skills),function(item){return _c('li',{key:item},[_vm._v(_vm._s(item))])}))]),_vm._v(" "),_c('article',{staticClass:"project"},[_c('div',{staticClass:"article_title"},[_vm._v("项目经验")]),_vm._v(" "),_c('div',{staticClass:"web_project"},[_c('div',{staticClass:"project_category"},[_vm._v("WEB项目")]),_vm._v(" "),_vm._l((_vm.person.projects.web),function(project){return _c('div',{key:project.name,staticClass:"project_card"},[_c('div',{staticClass:"project_name"},[_vm._v(_vm._s(project.name))]),_vm._v(" "),_c('div',{staticClass:"project_desc"},[_vm._v(_vm._s(project.desc))]),_vm._v(" "),_c('div',{staticClass:"project_tech"},[_vm._v(_vm._s(project.tech))]),_vm._v(" "),_c('div',{staticClass:"project_work"},[_vm._v(_vm._s(project.work))])])})],2),_vm._v(" "),_c('div',{staticClass:"hybrid_project"},[_c('div',{staticClass:"project_category"},[_vm._v("Hybrid项目")]),_vm._v(" "),_vm._l((_vm.person.projects.hybrid),function(project){return _c('div',{key:project.name,staticClass:"project_card"},[_c('div',{staticClass:"project_name"},[_vm._v(_vm._s(project.name))]),_vm._v(" "),_c('div',{staticClass:"project_desc"},[_vm._v(_vm._s(project.desc))]),_vm._v(" "),_c('div',{staticClass:"project_tech"},[_vm._v(_vm._s(project.tech))]),_vm._v(" "),_c('div',{staticClass:"project_work"},[_vm._v(_vm._s(project.work))])])})],2),_vm._v(" "),_c('div',{staticClass:"github_project"},[_c('div',{staticClass:"project_category"},[_vm._v("Github项目")]),_vm._v(" "),_vm._l((_vm.person.projects.github),function(project){return _c('div',{key:project.name,staticClass:"project_card"},[_c('div',{staticClass:"project_name"},[_vm._v(_vm._s(project.name))]),_vm._v(" "),_c('div',{staticClass:"project_desc"},[_vm._v(_vm._s(project.desc))])])})],2)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[_c('div',{staticClass:"print"},[_c('button',{staticClass:"btn btn-primary",on:{"click":_vm.print}},[_vm._v("打印为PDF")])]),_vm._v(" "),_c('div',{staticClass:"page",attrs:{"id":_vm.$route.params.resumeid}},[_c('div',{staticClass:"page-inner"},[_c(_vm.$route.params.resumeid,{tag:"component"})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_intro_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_91fdcd54_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_intro_vue__ = __webpack_require__(133);
function injectStyle (context) {
  __webpack_require__(132)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-91fdcd54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_intro_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_91fdcd54_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_intro_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intro page-wrapper"},[_c('div',{staticClass:"come-in",on:{"click":_vm.linkto}},[_vm._v("制作简历 >")]),_vm._v(" "),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scroll-banner-wrapper"},[_c('article',[_c('div',[_c('div',[_c('p',{staticClass:"title"},[_vm._v("模板持续更新，完全免费使用")]),_vm._v(" "),_c('p',{staticClass:"desc"},[_vm._v("包含各类模板20+，适用于各个行业")])])]),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":__webpack_require__(5)}})])]),_vm._v(" "),_c('article',[_c('div',[_c('div',[_c('p',{staticClass:"title"},[_vm._v("模板持续更新34，完全免费使用")]),_vm._v(" "),_c('p',{staticClass:"desc"},[_vm._v("包含各类模板20+，适用于各个行业")])])]),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":__webpack_require__(5)}})])]),_vm._v(" "),_c('article',[_c('div',[_c('div',[_c('p',{staticClass:"title"},[_vm._v("模板持续更新12，完全免费使用")]),_vm._v(" "),_c('p',{staticClass:"desc"},[_vm._v("包含各类模板20+，适用于各个行业")])])]),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":__webpack_require__(5)}})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45df77d2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(136);
function injectStyle (context) {
  __webpack_require__(135)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-45df77d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45df77d2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{staticClass:"previews content"},_vm._l((_vm.resumeList),function(resume){return _c('div',{key:resume.name,staticClass:"preview"},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(137)("./resume-" + (resume.name) + ".png")}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(resume.name))])]),_vm._v(" "),_c('div',{staticClass:"action"},[_c('button',{staticClass:"btn btn-info btn-sm",on:{"click":function($event){_vm.preview(resume.name)}}},[_vm._v("预览")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary btn-sm",on:{"click":function($event){_vm.select(resume.name)}}},[_vm._v("选择")])])])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./resume-frontend.png": 138,
	"./resume-left-right-rtl.png": 139,
	"./resume-left-right.png": 140,
	"./resume-material-dark.png": 141,
	"./resume-oblique.png": 142,
	"./resume-purple.png": 143,
	"./resume-side-bar-rtl.png": 144,
	"./resume-side-bar.png": 145
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 137;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-frontend.831adfa.png";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right-rtl.462f014.png";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right.b69e983.png";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-material-dark.bf31911.png";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-oblique.d8cc959.png";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-purple.4403335.png";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar-rtl.eb82423.png";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar.fb4d89c.png";

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_custom_vue__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c54207b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_custom_vue__ = __webpack_require__(153);
function injectStyle (context) {
  __webpack_require__(147)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c54207b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_custom_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c54207b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_custom_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/1.bf31911.png";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/2.4403335.png";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/3.fb4d89c.png";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/4.b69e983.png";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/5.d8cc959.png";

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{staticClass:"content flex_wrapper"},[_c('div',{staticClass:"smart-timeline custom_form"},[_c('ul',{staticClass:"smart-timeline-list"},[_c('li',[_c('div',{staticClass:"smart-timeline-icon"},[_vm._v("1")]),_vm._v(" "),_c('div',{staticClass:"smart-timeline-time"},[_vm._v("选择布局")]),_vm._v(" "),_c('div',{staticClass:"smart-timeline-content"},[_c('div',{staticClass:"flex_wrapper"},_vm._l((_vm.sel_layout_config),function(layout){return _c('div',{key:layout.id,staticClass:"sel_item"},[_c('div',{staticClass:"radio_wrapper flex_wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sel_layout),expression:"sel_layout"}],attrs:{"type":"radio","id":layout.id},domProps:{"value":layout.value,"checked":_vm._q(_vm.sel_layout,layout.value)},on:{"change":function($event){_vm.sel_layout=layout.value}}}),_vm._v(" "),_c('label',{attrs:{"for":layout.id}},[_vm._v(_vm._s(layout.name))])]),_vm._v(" "),_c('div',{staticClass:"desc"},[_c('small',[_vm._v(_vm._s(layout.desc))])]),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":layout.img}})])])])}))])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"smart-timeline-icon"},[_vm._v("2")]),_vm._v(" "),_c('div',{staticClass:"smart-timeline-time"},[_vm._v("选择内容")]),_vm._v(" "),_c('div',{staticClass:"smart-timeline-content"},[_c('div',{staticClass:"flex_wrapper"},_vm._l((_vm.sel_content_config),function(layout){return _c('div',{key:layout.id,staticClass:"sel_item"},[_c('div',{staticClass:"radio_wrapper flex_wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.content),expression:"content"}],attrs:{"type":"checkbox","id":layout.id},domProps:{"value":layout.id,"checked":Array.isArray(_vm.content)?_vm._i(_vm.content,layout.id)>-1:(_vm.content)},on:{"change":function($event){var $$a=_vm.content,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=layout.id,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.content=$$a.concat([$$v]))}else{$$i>-1&&(_vm.content=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.content=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":layout.id}},[_vm._v(_vm._s(layout.name))])]),_vm._v(" "),_c('div',{staticClass:"desc"},[_c('small',[_vm._v(_vm._s(layout.desc))])])])}))])])])]),_vm._v(" "),_c('div',{staticClass:"resume_demo"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_data_vue__ = __webpack_require__(40);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a134c930_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_data_vue__ = __webpack_require__(157);
function injectStyle (context) {
  __webpack_require__(155)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a134c930"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_data_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a134c930_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_data_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 155 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 156 */,
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{staticClass:"content flex_wrapper"},[_c('div',{staticClass:"input"},[_c('h4',[_vm._v("更新简历信息：")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.resume_data),expression:"resume_data"}],attrs:{"rows":"40"},domProps:{"value":(_vm.resume_data)},on:{"input":function($event){if($event.target.composing){ return; }_vm.resume_data=$event.target.value}}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.saveData()}}},[_vm._v("保存(至本地缓存)")]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.reInit()}}},[_vm._v("还原（恢复至样例数据）")])]),_vm._v(" "),_c('div',{staticClass:"result"},[_c('h4',[_vm._v("预览简历内容：")]),_vm._v(" "),_c('pre',{staticClass:"scroll"},[_vm._v(_vm._s(_vm.resume_data))])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"info"},[_c('li',[_vm._v("请按照样例中的格式更新简历信息，不要加key，不需要的key可以不写")]),_vm._v(" "),_c('li',[_vm._v("简历信息会保存在本地缓存中，清空缓存前建议保存信息")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(41);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a3c8f7a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(172);
function injectStyle (context) {
  __webpack_require__(159)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a3c8f7a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a3c8f7a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 159 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dataJson_vue__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20cc4090_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dataJson_vue__ = __webpack_require__(168);
function injectStyle (context) {
  __webpack_require__(161)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-20cc4090"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dataJson_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20cc4090_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dataJson_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 161 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 162 */,
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_vue_loader_lib_selector_type_script_index_0_VueJsoneditor_vue__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_template_compiler_index_id_data_v_7e9a0bc6_hasScoped_true_buble_transforms_vue_loader_lib_selector_type_template_index_0_VueJsoneditor_vue__ = __webpack_require__(167);
function injectStyle (context) {
  __webpack_require__(164)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e9a0bc6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_vue_loader_lib_selector_type_script_index_0_VueJsoneditor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_template_compiler_index_id_data_v_7e9a0bc6_hasScoped_true_buble_transforms_vue_loader_lib_selector_type_template_index_0_VueJsoneditor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 165 */,
/* 166 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jsoneditor-container",class:{'max-box':_vm.max,'min-box':!_vm.max},style:(_vm.getHeight)},[_c('div',{ref:"jsoneditor",staticClass:"jsoneditor-box"}),_vm._v(" "),(_vm.options.mode == 'code' && _vm.plus)?_c('button',{staticClass:"max-btn",attrs:{"type":"button","size":"mini"},on:{"click":function($event){_vm.max = !_vm.max}}}):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-jsoneditor',{attrs:{"options":_vm.options,"plus":true,"height":"1200px"},on:{"error":_vm.onError},model:{value:(_vm.jsonData),callback:function ($$v) {_vm.jsonData=$$v},expression:"jsonData"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cvPage_vue__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44b93e31_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cvPage_vue__ = __webpack_require__(171);
function injectStyle (context) {
  __webpack_require__(170)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44b93e31"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_cvPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44b93e31_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_cvPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":_vm.resumeName}},[_c('div',{staticClass:"page-inner"},[_c(_vm.resumeName,{tag:"component"})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('div',{staticClass:"data-wrapper card"},[_c('div',{staticClass:"card-title"},[_c('div',{staticClass:"title"},[_vm._v("个人数据")]),_vm._v(" "),_c('div',{staticClass:"action"},[_c('button',{staticClass:"btn btn-info btn-sm",attrs:{"title":"恢复至样例数据"},on:{"click":_vm.reInit}},[_vm._v("还原")])])]),_vm._v(" "),_c('div',{staticClass:"card-content"},[[_c('data-json',{attrs:{"data":_vm.resume_data},on:{"save":_vm.saveData}})]],2)]),_vm._v(" "),_c('div',{staticClass:"cv-wrapper card"},[_c('div',{staticClass:"card-title"},[_c('div',{staticClass:"title"},[_vm._v("简历模板")]),_vm._v(" "),_c('div',{staticClass:"action"},[_c('button',{staticClass:"btn btn-primary btn-sm",attrs:{"title":"导出预览"},on:{"click":_vm.preview}},[_vm._v("导出当前简历")])])]),_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"content-title"},[_c('span',{staticClass:"pre",on:{"click":_vm.preCv}},[_vm._v("← 上一个")]),_vm._v(" "),_c('span',{staticClass:"next",on:{"click":_vm.nextCv}},[_vm._v("下一个 →")])]),_vm._v(" "),_c('div',{},[_c('div',{staticClass:"page-wrapper"},[_c('cv-page',{staticStyle:{"border":"1px solid #ccc"},attrs:{"resume-name":_vm.resumeList[_vm.currentCvIndex].name}})],1)])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_data_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__resume_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_js__ = __webpack_require__(7);






__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

var resumeList = [{ 'name': 'material-dark' }, { 'name': 'left-right' }, { 'name': 'oblique' }, { 'name': 'side-bar' }, { 'name': 'purple' }, { 'name': 'left-right-rtl' }, { 'name': 'side-bar-rtl' }, { 'name': 'web-frontend' }];

var store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
    state: {
        resumeList: resumeList,
        layoutShow: true,
        resumeData: null,
        currentResumeIndex: -1
    },
    actions: {
        setLayout: function setLayout(context, data) {
            context.commit('init', {
                key: 'layoutShow',
                value: data
            });
        },
        setResumeData: function setResumeData(context, data) {
            Object(__WEBPACK_IMPORTED_MODULE_4__services_utils_js__["c" /* setLocalstorage */])({
                resume_data: data
            });
            context.commit('init', {
                key: 'resumeData',
                value: data
            });
            return true;
        },
        setInitResumeData: function setInitResumeData(context) {
            context.commit('init', {
                key: 'resumeData',
                value: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(__WEBPACK_IMPORTED_MODULE_3__resume_data_json__, null, 4)
            });
        },
        setCurrentResumeIndex: function setCurrentResumeIndex(context, data) {
            context.commit('init', {
                key: 'currentResumeIndex',
                value: data
            });
        }
    },
    mutations: {
        init: function init(state, data) {
            state[data.key] = data.value;
        }
    }
});

var local_data = Object(__WEBPACK_IMPORTED_MODULE_4__services_utils_js__["b" /* getLocalstorage */])("resume_data");
if (local_data) {
    store.dispatch('setResumeData', local_data);
} else {
    store.dispatch('setResumeData', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(__WEBPACK_IMPORTED_MODULE_3__resume_data_json__, null, 4));
}


/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })
],[45]);
//# sourceMappingURL=app.1448f6fb16d8181188dd.js.map