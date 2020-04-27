webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVueOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_data_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__resume_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_js__ = __webpack_require__(13);





function getVueOptions(name) {
  var opt = {
    name: name,
    data: function data() {
      return {
        person: null,
        terms: __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* terms */]
      };
    },

    created: function created() {
      var _data = Object(__WEBPACK_IMPORTED_MODULE_3__services_utils_js__["b" /* getLocalstorage */])("resume_data");
      if (_data) {
        this.person = JSON.parse(_data);
      } else {
        this.person = __WEBPACK_IMPORTED_MODULE_1__resume_data_json__;
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
  };
  return opt;
}



/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_head_vue__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_b596fb24_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_head_vue__ = __webpack_require__(123);
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
var __vue_scopeId__ = "data-v-b596fb24"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_head_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_b596fb24_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_head_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = {"name":{"cn":"张三","en":"John"},"about":"爱前端、爱小说、爱音乐、爱产品、爱游泳、爱动漫、爱家务、爱安静、爱萧萧。人生这么短，且行且努力。","position":"前端开发工程师","birth":{"year":1990,"location":"上海"},"experience":[{"company":"百度","position":"开发工程师","timeperiod":"2016.07-2017.01","description":"写逻辑代码"},{"company":"腾讯","position":"前端开发工程师","timeperiod":"2017.02-2018.02","description":"写前端代码"},{"company":"阿里巴巴","position":"全栈开发工程师","timeperiod":"2018.03-","description":"独立写应用"}],"education":[{"degree":"计算机应用与技术 硕士","timeperiod":"2012.09 - 2015.07","description":"遗传算法 SVM Python"},{"degree":"电子信息科学与技术 学士","timeperiod":"2008.09 - 2012.07","description":"模电 数电 单片机 C语言"}],"skills":[{"name":"HTML5","level":99},{"name":"CSS3","level":95},{"name":"JavaScript","level":97},{"name":"Node.js","level":93},{"name":"Angular 2","level":60},{"name":"TypeScript","level":80},{"name":"ES.Next","level":70},{"name":"Docker","level":99}],"knowledge":"精通Photoshop和Illustrator, 对产品和架构一定经验.","contact":{"email":"zj_john@qq.com","phone":"18019156602","city":"上海","website":"https://zj-john.github.io","github":"zj-john"},"lang":"cn"}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLocalstorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLocalstorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(7);
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumes_resumes__ = __webpack_require__(53);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app'
}));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);




var name = 'material-dark';

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return terms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_en__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_cn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_zh_tw__ = __webpack_require__(85);




var terms = {
  en: __WEBPACK_IMPORTED_MODULE_0__lang_en__["a" /* default */], cn: __WEBPACK_IMPORTED_MODULE_1__lang_cn__["a" /* default */], 'zh-tw': __WEBPACK_IMPORTED_MODULE_2__lang_zh_tw__["a" /* default */]
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_data_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__resume_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_skill_template1_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_experience_template1_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_education_template1_vue__ = __webpack_require__(94);











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
      template: __webpack_require__(23)
    },
    experienceTemplate1: __WEBPACK_IMPORTED_MODULE_6__components_experience_template1_vue__["a" /* default */],
    educationTemplate1: __WEBPACK_IMPORTED_MODULE_7__components_education_template1_vue__["a" /* default */]
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template1_vue__ = __webpack_require__(24);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_2d30473c_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template1_vue__ = __webpack_require__(90);
function injectStyle (context) {
  __webpack_require__(89)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d30473c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_2d30473c_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template1_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("skillTemplate1", {
  props: ["data"]
}));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("experienceTemplate1", {
  props: ["data"]
}));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("educationTemplate1", {
  props: ["data"]
}));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'left-right';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'oblique';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'side-bar';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('purple', Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'side-bar-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);




var name = 'left-right-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'TEMPLATE-NAME';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_head__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("resume", {
  name: "app",
  components: {
    appHeader: __WEBPACK_IMPORTED_MODULE_1__components_layout_head__["a" /* default */]
  },
  data: function data() {
    return {
      resumeList: [{ name: "material-dark" }, { name: "left-right" }, { name: "oblique" }, { name: "side-bar" }, { name: "purple" }, { name: "left-right-rtl" }, { name: "side-bar-rtl" }]
    };
  }
}));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("head", {
  name: "app"
}));

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_head__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app',
  components: {
    appHeader: __WEBPACK_IMPORTED_MODULE_1__components_layout_head__["a" /* default */]
  },
  data: function data() {
    return {
      resumeList: [{ 'name': 'material-dark' }, { 'name': 'left-right' }, { 'name': 'oblique' }, { 'name': 'side-bar' }, { 'name': 'purple' }, { 'name': 'left-right-rtl' }, { 'name': 'side-bar-rtl' }, { 'name': 'frontend' }]
    };
  }
}));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_head__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_foot__ = __webpack_require__(38);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component("custom", {
  name: "app",
  components: {
    appHeader: __WEBPACK_IMPORTED_MODULE_1__components_layout_head__["a" /* default */],
    appFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_foot__["default"]
  },
  data: function data() {
    return {
      sel_layout: "",
      content: [],

      sel_layout_config: [{
        name: "左右布局",
        id: "left_right",
        desc: "适合一页简历",
        img: __webpack_require__(141),
        value: "left_right"
      }, {
        name: "上下布局",
        id: "top_bottom",
        desc: "适合内容多的多页简历",
        img: __webpack_require__(142),
        value: "top_bottom"
      }, {
        name: "上下布局",
        id: "top_bottom1",
        desc: "适合内容多的多页简历",
        img: __webpack_require__(143),
        value: "top_bottom"
      }, {
        name: "上下布局",
        id: "top_bottom2",
        desc: "适合内容多的多页简历",
        img: __webpack_require__(144),
        value: "top_bottom"
      }, {
        name: "上下布局",
        id: "top_bottom3",
        desc: "适合内容多的多页简历",
        img: __webpack_require__(145),
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_foot_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_foot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_foot_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_573c80e6_hasScoped_false_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_foot_vue__ = __webpack_require__(140);
function injectStyle (context) {
  __webpack_require__(139)
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
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_foot_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_573c80e6_hasScoped_false_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_foot_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports) {



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_head__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_foot__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resume_data_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resume_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__resume_data_json__);








/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].component("custom", {
  name: "app",
  components: {
    appHeader: __WEBPACK_IMPORTED_MODULE_2__components_layout_head__["a" /* default */],
    appFooter: __WEBPACK_IMPORTED_MODULE_3__components_layout_foot__["default"]
  },
  data: function data() {
    return {
      layout: "",
      INITDATA: __WEBPACK_IMPORTED_MODULE_5__resume_data_json__,
      resume_data: null
    };
  },
  created: function created() {
    var local_data = Object(__WEBPACK_IMPORTED_MODULE_4__services_utils_js__["b" /* getLocalstorage */])("resume_data");
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

      Object(__WEBPACK_IMPORTED_MODULE_4__services_utils_js__["c" /* setLocalstorage */])({
        resume_data: this.resume_data
      });
    },
    reInit: function reInit(event) {
      this.resume_data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.INITDATA, null, 4);
    },
    timeFormat: function timeFormat(time) {
      var date = new Date(time);
      var format = "yyyy-MM-dd hh:mm";
      return Object(__WEBPACK_IMPORTED_MODULE_4__services_utils_js__["a" /* dateFormat */])(date, format);
    }
  }
}));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(49);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]
  }
});

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_9a82e094_hasScoped_false_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(48);
function injectStyle (context) {
  __webpack_require__(46)
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
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_9a82e094_hasScoped_false_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_resume__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_intro__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_custom__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_data__ = __webpack_require__(147);








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
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
    component: __WEBPACK_IMPORTED_MODULE_6__pages_data__["a" /* default */]
  }]
}));

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_resume_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5bd461cc_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_resume_vue__ = __webpack_require__(119);
function injectStyle (context) {
  __webpack_require__(52)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5bd461cc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_resume_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5bd461cc_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_resume_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_dark_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_dark_copy_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__left_right_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oblique_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__side_bar_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purple_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__side_bar_rtl_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__left_right_rtl_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__template_vue__ = __webpack_require__(116);











/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_material_dark_vue__ = __webpack_require__(16);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_407a5fc2_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_material_dark_vue__ = __webpack_require__(86);
function injectStyle (context) {
  __webpack_require__(55)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-407a5fc2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_material_dark_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_407a5fc2_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_material_dark_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/id.087ce5d.jpg";

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
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
/* 83 */
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
/* 84 */
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
/* 85 */
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
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume"},[_c('div',{staticClass:"leftCol m_box"},[_c('div',{staticClass:"shadow"}),_vm._v(" "),_c('div',{staticClass:"heading",attrs:{"id":"myselfpic"}}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v("\r\n      "+_vm._s(_vm.lang.contact)+"\r\n    ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(" "+_vm._s(_vm.lang.born)+" "+_vm._s(_vm.person.birth.year)+" "+_vm._s(_vm.lang.bornIn)+" "+_vm._s(_vm.person.birth.location))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.person.contact.city))])])])]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_c('div',{staticClass:"item"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\r\n          "+_vm._s(_vm.person.contact.phone)+"\r\n        ")])])]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_c('div',{staticClass:"item"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\r\n          "+_vm._s(_vm.person.contact.email)+"\r\n        ")])])]),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v("@"+_vm._s(_vm.person.contact.github))]),_vm._v(" "),_c('span',[_vm._v("github.com/"+_vm._s(_vm.person.contact.github))])])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v(_vm._s(_vm.person.contact.website))])])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item last"},[_c('div',{staticClass:"section-headline"},[_vm._v("\r\n        "+_vm._s(_vm.lang.skills)+"\r\n      ")]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('div',{staticClass:"right"},[_c('span',[_vm._v(_vm._s(skill.name)+" ")]),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"determinate",style:('width: '+skill.level+'%;')},[_c('i',{staticClass:"fa fa-circle"})])])])])})],2)]),_vm._v(" "),_c('div',{staticClass:"rightCol"},[_c('div',{staticClass:"title"},[_c('h2',[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('h3',{staticClass:"headline"},[_vm._v(_vm._s(experience.position)+" - "+_vm._s(experience.company))]),_vm._v(" "),_c('div',{staticClass:"subheadline"},[_vm._v(_vm._s(experience.timeperiod))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\r\n          "+_vm._s(experience.description)+"\r\n        ")])])}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\r\n        "+_vm._s(education.timeperiod)+", "+_vm._s(education.description)+"\r\n      ")])])})],2),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_material_dark_copy_vue__ = __webpack_require__(22);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_6af0b000_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_material_dark_copy_vue__ = __webpack_require__(97);
function injectStyle (context) {
  __webpack_require__(88)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6af0b000"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_material_dark_copy_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_6af0b000_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_material_dark_copy_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.data),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('div',{staticClass:"right"},[_c('span',[_vm._v(_vm._s(skill.name)+" ")]),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"determinate",style:('width: '+skill.level+'%;')},[_c('i',{staticClass:"fa fa-circle"})])])])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template1_vue__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_0cffad49_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template1_vue__ = __webpack_require__(93);
function injectStyle (context) {
  __webpack_require__(92)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0cffad49"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_0cffad49_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template1_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.data),function(experience){return _c('div',{key:experience.company,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('h3',{staticClass:"headline"},[_vm._v(_vm._s(experience.position)+" - "+_vm._s(experience.company))]),_vm._v(" "),_c('div',{staticClass:"subheadline"},[_vm._v(_vm._s(experience.timeperiod))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v(_vm._s(experience.description))])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template1_vue__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_1a045c88_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template1_vue__ = __webpack_require__(96);
function injectStyle (context) {
  __webpack_require__(95)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a045c88"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_1a045c88_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template1_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.data),function(education){return _c('div',{key:education.degree,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v(_vm._s(education.timeperiod)+", "+_vm._s(education.description))])])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume"},[_c('div',{staticClass:"leftCol m_box"},[_c('div',{staticClass:"shadow"}),_vm._v(" "),(_vm.template_config.avatar.is_show)?_c('div',[_vm._m(0)]):_vm._e(),_vm._v(" "),(_vm.template_config.contact.is_show)?_c('div',[_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.lang.born)+" "+_vm._s(_vm.person.birth.year)+" "+_vm._s(_vm.lang.bornIn)+" "+_vm._s(_vm.person.birth.location))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.person.contact.city))])])])]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_c('div',{staticClass:"item"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.person.contact.phone))])])]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_c('div',{staticClass:"item"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v(_vm._s(_vm.person.contact.email))])])]),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v("@"+_vm._s(_vm.person.contact.github))]),_vm._v(" "),_c('span',[_vm._v("github.com/"+_vm._s(_vm.person.contact.github))])])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v(_vm._s(_vm.person.contact.website))])])])]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.template_config.skill.is_show)?_c('div',{staticClass:"item last"},[_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c(_vm.skillTemplate,{tag:"component",attrs:{"data":_vm.person.skills}})],1):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"rightCol"},[(_vm.template_config.info.is_show)?_c('div',{staticClass:"title"},[_c('h2',[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.person.position))])]):_vm._e(),_vm._v(" "),(_vm.template_config.experience.is_show)?_c('div',[_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_c('experience-template-1',{attrs:{"data":_vm.person.experience}})],1):_vm._e(),_vm._v(" "),(_vm.template_config.education.is_show)?_c('div',[_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_c('education-template-1',{attrs:{"data":_vm.person.education}})],1):_vm._e()]),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"heading"},[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":__webpack_require__(56)}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_left_right_vue__ = __webpack_require__(27);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_34caba74_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_left_right_vue__ = __webpack_require__(100);
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
var __vue_scopeId__ = "data-v-34caba74"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_left_right_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_34caba74_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_left_right_vue__["a" /* default */],
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2)]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])]),_vm._v(" "),_vm._m(3)]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]),_vm._v(" "),_vm._m(4)]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_oblique_vue__ = __webpack_require__(28);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_1b9ff848_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_oblique_vue__ = __webpack_require__(103);
function injectStyle (context) {
  __webpack_require__(102)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b9ff848"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_oblique_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_1b9ff848_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_oblique_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume3"}},[_c('div',{staticClass:"resume-header"},[_c('div',{staticClass:"triangle"}),_vm._v(" "),_c('div',{staticClass:"person-header"},[_c('div',{staticClass:"person-wrapper"},[_c('div',{staticClass:"person"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',{staticClass:"position"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"img"})])])]),_vm._v(" "),_c('div',{staticClass:"resume-content"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('i',{staticClass:"fa fa-sort-down",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(", "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skill-section"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skills"},[_c('div',{staticClass:"skill-block"},[_c('i',{staticClass:"fa fa-sort-down",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-other"},[_c('span',[_vm._v(_vm._s(_vm.person.knowledge)+" ")])]),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(" "+_vm._s(_vm.person.contact.email))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.contact.city))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v("\r\n              "+_vm._s(_vm.person.contact.website))]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('span',[_vm._v("; ")]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("\r\n                https://github.com/"+_vm._s(_vm.person.contact.github))]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_side_bar_vue__ = __webpack_require__(29);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_46410925_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_side_bar_vue__ = __webpack_require__(106);
function injectStyle (context) {
  __webpack_require__(105)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-46410925"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_side_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_46410925_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_side_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_purple_vue__ = __webpack_require__(30);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_975adf8a_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_purple_vue__ = __webpack_require__(109);
function injectStyle (context) {
  __webpack_require__(108)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-975adf8a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_purple_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_975adf8a_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_purple_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"template"}},[_c('div',{attrs:{"id":"resume-header"}},[_c('div',{attrs:{"id":"header-left"}},[_c('h2',{attrs:{"id":"position"}},[_vm._v(_vm._s(_vm.person.position))]),_vm._v(" "),_c('h1',{attrs:{"id":"name"}},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',{attrs:{"id":"info-flex"}},[_c('span',{attrs:{"id":"email"}},[_c('a',{attrs:{"href":"mailto:" + _vm.person.contact.email}},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_c('span',{attrs:{"id":"phone"}},[_c('i',{staticClass:"fa fa-phone-square",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.phone))]),_vm._v(" "),(_vm.person.contact.website)?_c('span',{attrs:{"id":"website"}},[_c('a',{attrs:{"href":_vm.person.contact.website}},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.website))])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('span',{attrs:{"id":"github"}},[_c('a',{attrs:{"href":"https://github.com/" + _vm.person.contact.github}},[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{attrs:{"id":"resume-body"}},[_c('div',{attrs:{"id":"experience-container"}},[_c('h2',{attrs:{"id":"experience-title"}},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience"},[_c('h2',{staticClass:"company"},[_vm._v(_vm._s(experience.company))]),_vm._v(" "),_c('p',{staticClass:"job-info"},[_c('span',{staticClass:"job-title"},[_vm._v(_vm._s(experience.position)+" | ")]),_c('span',{staticClass:"experience-timeperiod"},[_vm._v(_vm._s(experience.timeperiod))])]),_vm._v(" "),(experience.description)?_c('p',{staticClass:"job-description"},[_vm._v(_vm._s(experience.description))]):_vm._e(),_vm._v(" "),(experience.list)?_c('ul',_vm._l((experience.list),function(item,index){return _c('li',{key:index},[_c('span',{staticClass:"list-item-black"},[_vm._v("\r\n                        "+_vm._s(item)+"\r\n                      ")])])})):_vm._e()])})],2),_vm._v(" "),_c('div',{attrs:{"id":"education-container"}},[_c('h2',{attrs:{"id":"education-title"}},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education"},[_c('h2',{staticClass:"education-description"},[_vm._v(_vm._s(education.description))]),_vm._v(" "),_c('p',[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree)+" | ")]),_c('span',{staticClass:"education-timeperiod"},[_vm._v(_vm._s(education.timeperiod))])])])})],2),_vm._v(" "),(_vm.person.skills != [])?_c('div',{attrs:{"id":"skills-container"}},[_c('h2',{attrs:{"id":"skills-title"}},[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_c('p',{attrs:{"id":"skill-description"}},[_vm._v(_vm._s(_vm.person.knowledge))]),_vm._v(" "),_c('ul',{attrs:{"id":"skill-list"}},_vm._l((_vm.person.skills),function(skill){return _c('li',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"list-item-black"},[_vm._v("\r\n                    "+_vm._s(skill.name)+"\r\n                  ")])])}))]):_vm._e()]),_vm._v(" "),_c('div',{attrs:{"id":"resume-footer"}},[(_vm.person.about)?_c('div',[_c('h2',[_vm._v(_vm._s(_vm.lang.about))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.person.about))])]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header-right"}},[_c('div',{attrs:{"id":"headshot"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__ = __webpack_require__(31);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_44339655_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__ = __webpack_require__(112);
function injectStyle (context) {
  __webpack_require__(111)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44339655"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_44339655_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":"'tel:'+person.contact.phone"}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__ = __webpack_require__(32);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5383107a_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__ = __webpack_require__(115);
function injectStyle (context) {
  __webpack_require__(114)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5383107a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5383107a_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_vm._m(1),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])])]),_vm._v(" "),_c('tr',[_vm._m(2),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])])]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_vm._m(3),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_vm._m(4),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skillDescription)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template_vue__ = __webpack_require__(33);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5c238217_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template_vue__ = __webpack_require__(118);
function injectStyle (context) {
  __webpack_require__(117)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c238217"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5c238217_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"template"}},[_c('h1',[_vm._v("This is a template")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[_c('div',{staticClass:"page",attrs:{"id":_vm.$route.params.resumeid}},[_c('div',{staticClass:"page-inner"},[_c(_vm.$route.params.resumeid,{tag:"component"})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_intro_vue__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_6a5a8a16_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_intro_vue__ = __webpack_require__(124);
function injectStyle (context) {
  __webpack_require__(121)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a5a8a16"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_intro_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_6a5a8a16_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_intro_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(5)}}),_vm._v(" "),_c('span',{staticClass:"title"},[_vm._v("快简历")]),_vm._v(" "),_c('nav',[_c('router-link',{attrs:{"to":"/resume","active-class":"link_active","exact":""}},[_c('span',[_vm._v("模板")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"/custom","active-class":"link_active"}},[_c('span',[_vm._v("自定义")])]),_vm._v(" "),_c('router-link',{attrs:{"to":"/data","active-class":"link_active"}},[_c('span',[_vm._v("数据")])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intro page-wrapper"},[_c('app-header'),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('div',[_c('div',[_c('p',{staticClass:"title"},[_vm._v("模板持续更新，完全免费使用")]),_vm._v(" "),_c('p',{staticClass:"desc"},[_vm._v("包含各类模板20+，适用于各个行业")])])]),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":__webpack_require__(5)}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('div',[_c('img',{attrs:{"src":__webpack_require__(5)}})]),_vm._v(" "),_c('div',[_c('div',[_c('p',{staticClass:"title"},[_vm._v("模板持续更新，完全免费使用")]),_vm._v(" "),_c('p',{staticClass:"desc"},[_vm._v("包含各类模板20+，适用于各个行业")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('div',[_c('div',[_c('p',{staticClass:"title"},[_vm._v("模板持续更新，完全免费使用")]),_vm._v(" "),_c('p',{staticClass:"desc"},[_vm._v("包含各类模板20+，适用于各个行业")])])]),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":__webpack_require__(5)}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(36);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_65361eaa_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(127);
function injectStyle (context) {
  __webpack_require__(126)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65361eaa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_65361eaa_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('app-header'),_vm._v(" "),_c('div',{staticClass:"previews content"},[_vm._l((_vm.resumeList),function(resume){return _c('div',{key:resume.name,staticClass:"preview"},[_c('router-link',{attrs:{"to":("/resume/" + (resume.name))}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(128)("./resume-" + (resume.name) + ".png")}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(resume.name))])])])],1)}),_vm._v(" "),_c('div',{staticClass:"preview bg-white"},[_c('router-link',{attrs:{"to":'/custom'}},[_c('div',{staticClass:"preview-wrapper"},[_c('span',[_vm._v("不满意?"),_c('br'),_vm._v("试试自定义模板")])])])],1)],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./resume-frontend.png": 129,
	"./resume-left-right-rtl.png": 130,
	"./resume-left-right.png": 131,
	"./resume-material-dark.png": 132,
	"./resume-oblique.png": 133,
	"./resume-purple.png": 134,
	"./resume-side-bar-rtl.png": 135,
	"./resume-side-bar.png": 136
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
webpackContext.id = 128;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-frontend.831adfa.png";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right-rtl.462f014.png";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right.b69e983.png";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-material-dark.bf31911.png";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-oblique.d8cc959.png";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-purple.4403335.png";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar-rtl.eb82423.png";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar.fb4d89c.png";

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_custom_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_8bd6c986_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_custom_vue__ = __webpack_require__(146);
function injectStyle (context) {
  __webpack_require__(138)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8bd6c986"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_custom_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_8bd6c986_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_custom_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 138 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"foot_wrapped"},[_c('div',[_c('a',{attrs:{"href":"https://github.com/zj-john/simplify-best-resume-ever","target":"_blank"}},[_c('img',{staticStyle:{"position":"absolute","top":"0","right":"0","border":"0"},attrs:{"src":"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67","alt":"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}})])]),_vm._v(" "),_c('div',{staticClass:"right"},[_vm._v("\n    咨询、交流、反馈请联系\n    "),_c('a',{attrs:{"href":"mailto:admin@flll.me"}},[_vm._v("admin@flll.me")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/1.bf31911.png";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/2.4403335.png";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/3.fb4d89c.png";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/4.b69e983.png";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/5.d8cc959.png";

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('app-header'),_vm._v(" "),_c('div',{staticClass:"content flex_wrapper"},[_c('div',{staticClass:"smart-timeline custom_form"},[_c('ul',{staticClass:"smart-timeline-list"},[_c('li',[_c('div',{staticClass:"smart-timeline-icon"},[_vm._v("1")]),_vm._v(" "),_c('div',{staticClass:"smart-timeline-time"},[_vm._v("选择布局")]),_vm._v(" "),_c('div',{staticClass:"smart-timeline-content"},[_c('div',{staticClass:"flex_wrapper"},_vm._l((_vm.sel_layout_config),function(layout){return _c('div',{key:layout.id,staticClass:"sel_item"},[_c('div',{staticClass:"radio_wrapper flex_wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sel_layout),expression:"sel_layout"}],attrs:{"type":"radio","id":layout.id},domProps:{"value":layout.value,"checked":_vm._q(_vm.sel_layout,layout.value)},on:{"change":function($event){_vm.sel_layout=layout.value}}}),_vm._v(" "),_c('label',{attrs:{"for":layout.id}},[_vm._v(_vm._s(layout.name))])]),_vm._v(" "),_c('div',{staticClass:"desc"},[_c('small',[_vm._v(_vm._s(layout.desc))])]),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":layout.img}})])])])}))])]),_vm._v(" "),_c('li',[_c('div',{staticClass:"smart-timeline-icon"},[_vm._v("2")]),_vm._v(" "),_c('div',{staticClass:"smart-timeline-time"},[_vm._v("选择内容")]),_vm._v(" "),_c('div',{staticClass:"smart-timeline-content"},[_c('div',{staticClass:"flex_wrapper"},_vm._l((_vm.sel_content_config),function(layout){return _c('div',{key:layout.id,staticClass:"sel_item"},[_c('div',{staticClass:"radio_wrapper flex_wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.content),expression:"content"}],attrs:{"type":"checkbox","id":layout.id},domProps:{"value":layout.id,"checked":Array.isArray(_vm.content)?_vm._i(_vm.content,layout.id)>-1:(_vm.content)},on:{"change":function($event){var $$a=_vm.content,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=layout.id,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.content=$$a.concat([$$v]))}else{$$i>-1&&(_vm.content=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.content=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":layout.id}},[_vm._v(_vm._s(layout.name))])]),_vm._v(" "),_c('div',{staticClass:"desc"},[_c('small',[_vm._v(_vm._s(layout.desc))])])])}))])])])]),_vm._v(" "),_c('div',{staticClass:"resume_demo"})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_data_vue__ = __webpack_require__(40);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_6c2acf2c_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_data_vue__ = __webpack_require__(151);
function injectStyle (context) {
  __webpack_require__(148)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c2acf2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_data_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_6c2acf2c_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_data_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('app-header'),_vm._v(" "),_c('div',{staticClass:"content flex_wrapper"},[_c('div',{staticClass:"input"},[_c('h4',[_vm._v("更新简历信息：")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.resume_data),expression:"resume_data"}],attrs:{"rows":"40"},domProps:{"value":(_vm.resume_data)},on:{"input":function($event){if($event.target.composing){ return; }_vm.resume_data=$event.target.value}}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.saveData()}}},[_vm._v("保存(至本地缓存)")]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.reInit()}}},[_vm._v("还原（恢复至样例数据）")])]),_vm._v(" "),_c('div',{staticClass:"result"},[_c('h4',[_vm._v("预览简历内容：")]),_vm._v(" "),_c('pre',{staticClass:"scroll"},[_vm._v(_vm._s(_vm.resume_data))])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"info"},[_c('li',[_vm._v("请按照样例中的格式更新简历信息，不要加key，不需要的key可以不写")]),_vm._v(" "),_c('li',[_vm._v("简历信息会保存在本地缓存中，清空缓存前建议保存信息")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[41]);
//# sourceMappingURL=app.0e96c13793feddf2f4cd.js.map