webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVueOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_data_json__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__resume_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(67);




function getVueOptions(name) {
  var opt = {
    name: name,
    data: function data() {
      return {
        person: __WEBPACK_IMPORTED_MODULE_1__resume_data_json__,
        terms: __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* terms */]
      };
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumes_resumes__ = __webpack_require__(36);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app'
}));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);




var name = 'material-dark';

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'left-right';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'oblique';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'side-bar';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('purple', Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'side-bar-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);




var name = 'left-right-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);





var name = 'TEMPLATE-NAME';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app'
}));

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(32);





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
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_9a82e094_hasScoped_false_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(31);
function injectStyle (context) {
  __webpack_require__(29)
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
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_resume__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home__ = __webpack_require__(94);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'home',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_home__["a" /* default */]
  }, {
    path: '/resume/:resumeid',
    name: 'resume',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_resume__["a" /* default */]
  }]
}));

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_resume_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5bd461cc_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_resume_vue__ = __webpack_require__(93);
function injectStyle (context) {
  __webpack_require__(35)
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
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_dark_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_right_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oblique_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_bar_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purple_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_bar_rtl_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__left_right_rtl_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__template_vue__ = __webpack_require__(90);










/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_material_dark_vue__ = __webpack_require__(11);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_407a5fc2_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_material_dark_vue__ = __webpack_require__(71);
function injectStyle (context) {
  __webpack_require__(38)
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
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports) {

module.exports = {"name":{"cn":"张三","en":"John"},"about":"爱前端、爱小说、爱音乐、爱产品、爱游泳、爱动漫、爱家务、爱安静、爱萧萧。人生这么短，且行且努力。","position":"前端开发工程师","birth":{"year":1990,"location":"上海"},"experience":[{"company":"百度","position":"开发工程师","timeperiod":"2016.07-2017.01","description":"写逻辑代码"},{"company":"腾讯","position":"前端开发工程师","timeperiod":"2017.02-2018.02","description":"写前端代码"},{"company":"阿里巴巴","position":"全栈开发工程师","timeperiod":"2018.03-","description":"独立写应用"}],"education":[{"degree":"计算机应用与技术 硕士","timeperiod":"2012.09 - 2015.07","description":"遗传算法 SVM Python"},{"degree":"电子信息科学与技术 学士","timeperiod":"2008.09 - 2012.07","description":"模电 数电 单片机 C语言"}],"skills":[{"name":"HTML5","level":99},{"name":"CSS3","level":95},{"name":"JavaScript","level":97},{"name":"Node.js","level":93},{"name":"Angular 2","level":60},{"name":"TypeScript","level":80},{"name":"ES.Next","level":70},{"name":"Docker","level":99}],"knowledge":"精通Photoshop和Illustrator, 对产品和架构一定经验.","contact":{"email":"zj_john@qq.com","phone":"18019156602","city":"上海","website":"https://zj-john.github.io","github":"zj-john"},"lang":"cn"}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return terms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_en__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_cn__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_zh_tw__ = __webpack_require__(70);




var terms = {
  en: __WEBPACK_IMPORTED_MODULE_0__lang_en__["a" /* default */], cn: __WEBPACK_IMPORTED_MODULE_1__lang_cn__["a" /* default */], 'zh-tw': __WEBPACK_IMPORTED_MODULE_2__lang_zh_tw__["a" /* default */]
};

/***/ }),
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume"},[_c('div',{staticClass:"leftCol m_box"},[_c('div',{staticClass:"shadow"}),_vm._v(" "),_c('div',{staticClass:"heading",attrs:{"id":"myselfpic"}}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v("\r\n      "+_vm._s(_vm.lang.contact)+"\r\n    ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(" "+_vm._s(_vm.lang.born)+" "+_vm._s(_vm.person.birth.year)+" "+_vm._s(_vm.lang.bornIn)+" "+_vm._s(_vm.person.birth.location))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.person.contact.city))])])])]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_c('div',{staticClass:"item"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\r\n          "+_vm._s(_vm.person.contact.phone)+"\r\n        ")])])]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_c('div',{staticClass:"item"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\r\n          "+_vm._s(_vm.person.contact.email)+"\r\n        ")])])]),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v("@"+_vm._s(_vm.person.contact.github))]),_vm._v(" "),_c('span',[_vm._v("github.com/"+_vm._s(_vm.person.contact.github))])])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v(_vm._s(_vm.person.contact.website))])])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item last"},[_c('div',{staticClass:"section-headline"},[_vm._v("\r\n        "+_vm._s(_vm.lang.skills)+"\r\n      ")]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('div',{staticClass:"right"},[_c('span',[_vm._v(_vm._s(skill.name)+" ")]),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"determinate",style:('width: '+skill.level+'%;')},[_c('i',{staticClass:"fa fa-circle"})])])])])})],2)]),_vm._v(" "),_c('div',{staticClass:"rightCol"},[_c('div',{staticClass:"title"},[_c('h2',[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('h3',{staticClass:"headline"},[_vm._v(_vm._s(experience.position)+" - "+_vm._s(experience.company))]),_vm._v(" "),_c('div',{staticClass:"subheadline"},[_vm._v(_vm._s(experience.timeperiod))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\r\n          "+_vm._s(experience.description)+"\r\n        ")])])}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\r\n        "+_vm._s(education.timeperiod)+", "+_vm._s(education.description)+"\r\n      ")])])})],2),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_left_right_vue__ = __webpack_require__(16);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_34caba74_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_left_right_vue__ = __webpack_require__(74);
function injectStyle (context) {
  __webpack_require__(73)
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
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2)]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])]),_vm._v(" "),_vm._m(3)]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]),_vm._v(" "),_vm._m(4)]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_oblique_vue__ = __webpack_require__(17);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_1b9ff848_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_oblique_vue__ = __webpack_require__(77);
function injectStyle (context) {
  __webpack_require__(76)
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
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume3"}},[_c('div',{staticClass:"resume-header"},[_c('div',{staticClass:"triangle"}),_vm._v(" "),_c('div',{staticClass:"person-header"},[_c('div',{staticClass:"person-wrapper"},[_c('div',{staticClass:"person"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',{staticClass:"position"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"img"})])])]),_vm._v(" "),_c('div',{staticClass:"resume-content"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('i',{staticClass:"fa fa-sort-down",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(", "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skill-section"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skills"},[_c('div',{staticClass:"skill-block"},[_c('i',{staticClass:"fa fa-sort-down",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-other"},[_c('span',[_vm._v(_vm._s(_vm.person.knowledge)+" ")])]),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(" "+_vm._s(_vm.person.contact.email))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.contact.city))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v("\r\n              "+_vm._s(_vm.person.contact.website))]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('span',[_vm._v("; ")]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("\r\n                https://github.com/"+_vm._s(_vm.person.contact.github))]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_side_bar_vue__ = __webpack_require__(18);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_46410925_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_side_bar_vue__ = __webpack_require__(80);
function injectStyle (context) {
  __webpack_require__(79)
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
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_purple_vue__ = __webpack_require__(19);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_975adf8a_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_purple_vue__ = __webpack_require__(83);
function injectStyle (context) {
  __webpack_require__(82)
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
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"template"}},[_c('div',{attrs:{"id":"resume-header"}},[_c('div',{attrs:{"id":"header-left"}},[_c('h2',{attrs:{"id":"position"}},[_vm._v(_vm._s(_vm.person.position))]),_vm._v(" "),_c('h1',{attrs:{"id":"name"}},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))]),_vm._v(" "),_c('div',{attrs:{"id":"info-flex"}},[_c('span',{attrs:{"id":"email"}},[_c('a',{attrs:{"href":"mailto:" + _vm.person.contact.email}},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_c('span',{attrs:{"id":"phone"}},[_c('i',{staticClass:"fa fa-phone-square",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.phone))]),_vm._v(" "),(_vm.person.contact.website)?_c('span',{attrs:{"id":"website"}},[_c('a',{attrs:{"href":_vm.person.contact.website}},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.website))])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('span',{attrs:{"id":"github"}},[_c('a',{attrs:{"href":"https://github.com/" + _vm.person.contact.github}},[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{attrs:{"id":"resume-body"}},[_c('div',{attrs:{"id":"experience-container"}},[_c('h2',{attrs:{"id":"experience-title"}},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience"},[_c('h2',{staticClass:"company"},[_vm._v(_vm._s(experience.company))]),_vm._v(" "),_c('p',{staticClass:"job-info"},[_c('span',{staticClass:"job-title"},[_vm._v(_vm._s(experience.position)+" | ")]),_c('span',{staticClass:"experience-timeperiod"},[_vm._v(_vm._s(experience.timeperiod))])]),_vm._v(" "),(experience.description)?_c('p',{staticClass:"job-description"},[_vm._v(_vm._s(experience.description))]):_vm._e(),_vm._v(" "),(experience.list)?_c('ul',_vm._l((experience.list),function(item,index){return _c('li',{key:index},[_c('span',{staticClass:"list-item-black"},[_vm._v("\r\n                        "+_vm._s(item)+"\r\n                      ")])])})):_vm._e()])})],2),_vm._v(" "),_c('div',{attrs:{"id":"education-container"}},[_c('h2',{attrs:{"id":"education-title"}},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education"},[_c('h2',{staticClass:"education-description"},[_vm._v(_vm._s(education.description))]),_vm._v(" "),_c('p',[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree)+" | ")]),_c('span',{staticClass:"education-timeperiod"},[_vm._v(_vm._s(education.timeperiod))])])])})],2),_vm._v(" "),(_vm.person.skills != [])?_c('div',{attrs:{"id":"skills-container"}},[_c('h2',{attrs:{"id":"skills-title"}},[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_c('p',{attrs:{"id":"skill-description"}},[_vm._v(_vm._s(_vm.person.knowledge))]),_vm._v(" "),_c('ul',{attrs:{"id":"skill-list"}},_vm._l((_vm.person.skills),function(skill){return _c('li',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"list-item-black"},[_vm._v("\r\n                    "+_vm._s(skill.name)+"\r\n                  ")])])}))]):_vm._e()]),_vm._v(" "),_c('div',{attrs:{"id":"resume-footer"}},[(_vm.person.about)?_c('div',[_c('h2',[_vm._v(_vm._s(_vm.lang.about))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.person.about))])]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header-right"}},[_c('div',{attrs:{"id":"headshot"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__ = __webpack_require__(20);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_44339655_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__ = __webpack_require__(86);
function injectStyle (context) {
  __webpack_require__(85)
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
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":"'tel:'+person.contact.phone"}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__ = __webpack_require__(21);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5383107a_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__ = __webpack_require__(89);
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
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.cn)+" "+_vm._s(_vm.person.name.en))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_vm._m(1),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])])]),_vm._v(" "),_c('tr',[_vm._m(2),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])])]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_vm._m(3),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_vm._m(4),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skillDescription)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_template_vue__ = __webpack_require__(22);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_5c238217_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_template_vue__ = __webpack_require__(92);
function injectStyle (context) {
  __webpack_require__(91)
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
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"template"}},[_c('h1',[_vm._v("This is a template")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[_c('div',{staticClass:"page",attrs:{"id":_vm.$route.params.resumeid}},[_c('div',{staticClass:"page-inner"},[_c(_vm.$route.params.resumeid,{tag:"component"})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_2e799b6c_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(96);
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
var __vue_scopeId__ = "data-v-2e799b6c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_0_3_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_0_3_vue_loader_lib_template_compiler_index_id_data_v_2e799b6c_hasScoped_true_buble_transforms_node_modules_vue_loader_14_0_3_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_vm._m(0),_vm._v(" "),_c('h3',{staticClass:"title"},[_vm._v("快简历")]),_vm._v(" "),_c('div',{staticClass:"previews"},[_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/material-dark'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(97)}}),_vm._v(" "),_c('span',[_vm._v("material-dark")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/left-right'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(98)}}),_vm._v(" "),_c('span',[_vm._v("left-right")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/oblique'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(99)}}),_vm._v(" "),_c('span',[_vm._v("oblique")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/side-bar'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(100)}}),_vm._v(" "),_c('span',[_vm._v("side-bar")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/purple'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(101)}}),_vm._v(" "),_c('span',[_vm._v("purple")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/side-bar-rtl'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(102)}}),_vm._v(" "),_c('span',[_vm._v("side-bar-rtl")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/left-right-rtl'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(103)}}),_vm._v(" "),_c('span',[_vm._v("left-right-rtl")])])])],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"https://github.com/zj-john/simplify-best-resume-ever","target":"_blank"}},[_c('img',{staticStyle:{"position":"absolute","top":"0","right":"0","border":"0"},attrs:{"src":"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67","alt":"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-material-dark.bf31911.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right.b69e983.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-oblique.d8cc959.png";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar.fb4d89c.png";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-purple.4403335.png";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar-rtl.eb82423.png";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right-rtl.462f014.png";

/***/ })
],[24]);
//# sourceMappingURL=app.466c7a0e53fbb937c45d.js.map