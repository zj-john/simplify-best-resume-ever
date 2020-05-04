import Vue from 'vue';
import Vuex from 'vuex';
import * as INITDATA from "../../resume/data.json";
import {
    getLocalstorage,
    setLocalstorage
} from "@/services/utils.js";

Vue.use(Vuex);

const resumeList = [
    { 'name': 'material-dark' },
    { 'name': 'left-right' },
    { 'name': 'oblique' },
    { 'name': 'side-bar' },
    { 'name': 'purple' },
    { 'name': 'left-right-rtl' },
    { 'name': 'side-bar-rtl' },
    { 'name': 'frontend' }
];

const store = new Vuex.Store({
    state: {
        resumeList: resumeList,
        layoutShow: true,
        resumeData: null
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
        }
    },
    mutations: {
        init(state, data) {
            state[data.key] = data.value;
        }
    }
})

let local_data = getLocalstorage("resume_data");
if (local_data) {
    store.dispatch('setResumeData', local_data);
} else {
    store.dispatch('setResumeData', JSON.stringify(INITDATA, null, 4));
}
// store.dispatch('getUser')

export default store;