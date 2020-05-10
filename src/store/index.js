import Vue from 'vue';
import Vuex from 'vuex';
// import * as INITDATA from "../../resume/data.json";
import * as INITDATA from "../../resume/datav2.json";
import {
    getLocalstorage,
    setLocalstorage
} from "@/services/utils.js";

Vue.use(Vuex);

const resumeList = [
    // { 'name': 'material-dark' },
    // { 'name': 'left-right' },
    // { 'name': 'oblique' },
    // { 'name': 'side-bar' },
    // { 'name': 'purple' },
    // { 'name': 'left-right-rtl' },
    // { 'name': 'side-bar-rtl' },
    { 'name': 'web-frontend' }
];

const cv_init_config = {
    "BasicInformation":{
        allow_not_show : false,
        is_active :true,
        content_type : 'object'
    },
    "CareerObjective":{
        allow_not_show : true,
        is_active :true,
        content_type : 'object'
    },
    "EducationalExperience":{
        allow_not_show : true,
        is_active :true,
        content_type : 'array'
    },
    "WorkExperience":{
        allow_not_show : true,
        is_active :true,
        content_type : 'array'
    },
    "ProjectExperience":{
        allow_not_show : true,
        is_active :true,
        content_type : 'array'
    },
    "InternExperience":{
        allow_not_show : true,
        is_active :true,
        content_type : 'array'
    },
    "ExperienceAtSchool":{
        allow_not_show : true,
        is_active :true,
        content_type : 'array'
    },
    "SelfIntroduction":{
        allow_not_show : true,
        is_active :true,
        content_type : 'object'
    },
    "HonoraryAward":{
        allow_not_show : true,
        is_active :true,
        content_type : 'array'
    },
    "RelatedSkill":{
        allow_not_show : true,
        is_active :true,
        content_type : 'array'
    },
    "Customize":{
        allow_not_show : true,
        is_active :true,
        content_type : 'array'
    }
}

const store = new Vuex.Store({
    state: {
        // cv 列表
        resumeList: resumeList,
        // 当前选中的cv index
        currentResumeIndex: -1,
        // 是否显示header footer
        layoutShow: true,
        // 用户cv data
        resumeData: null,        
        // 用户
        userCvPartsConfig: null,
        // 原始data
        originData:INITDATA,
        // 原始cv part
        originParts: cv_init_config
    },
    actions: {
        setLayout(context, data) {
            context.commit('init', {
                key: 'layoutShow',
                value: data
            })
        },
        setResumeData(context, data) {
            // 判断是否为JSON
            setLocalstorage({
                resume_data: data
            })
            context.commit('init', {
                key: 'resumeData',
                value: data
            })
            return true;
        },
        setInitResumeData(context) {
            context.commit('init', {
                key: 'resumeData',
                value: JSON.stringify(INITDATA, null, 4)
            })
        },
        setCurrentResumeIndex(context, data) {
            context.commit('init', {
                key: 'currentResumeIndex',
                value: data
            })
        },
        setUserCvPartsConfig(context, data) {
            setLocalstorage({
                user_cv_part_config: data
            })
            context.commit('init', {
                key: 'userCvPartsConfig',
                value: data
            })
            return true;
        }
    },
    mutations: {
        init(state, data) {
            state[data.key] = data.value;
        }
    }
})

let cv_config = getLocalstorage("user_cv_part_config");
if (cv_config) {
    store.dispatch('setUserCvPartsConfig', cv_config);
} else {
    store.dispatch('setUserCvPartsConfig', JSON.stringify(cv_init_config, null, 4));
}

let cv_data = getLocalstorage("resume_data");
if (cv_data) {
    store.dispatch('setResumeData', cv_data);
} else {
    store.dispatch('setResumeData', JSON.stringify(INITDATA, null, 4));
}
// store.dispatch('getUser')

export default store;