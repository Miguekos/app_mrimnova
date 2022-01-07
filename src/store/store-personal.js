import { axiosInstance } from "boot/axios";

const state = {
    Personal: [],
    OnePersonal: [],

};

const mutations = {
    setPersonal(state, payload) {
        state.Personal = payload;
    },
    setOnePersonal(state, payload) {
        state.OnePersonal = payload;
    }
};


const actions = {
    async get_personal({commit}) {
        const response = await axiosInstance.get(`/mrinnova/v2/personal/`);
        commit('setPersonal', response.data)
    },
    async get_retrieve_personal({commit}, payload) {
        console.log(payload)
        const response = await axiosInstance.get(`/mrinnova/v2/personal/${payload}/`);
        commit('setOnePersonal', response.data)
    },
    async post_personal({commit}, payload) {
        console.log(payload)
        const response = await axiosInstance.put(`/mrinnova/v2/personal/`, payload);
        return response.data;
    },
    async destroy_personal({commit}, payload) {
        console.log(payload)
        const response = await axiosInstance.destroy(`/mrinnova/v2/personal/`, payload);
        return response.data;
    }
};

const getters = {
    getPersonal(state) {
        return state.Personal
    },
    getOnePersonal(state) {
        return state.OnePersonal
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
