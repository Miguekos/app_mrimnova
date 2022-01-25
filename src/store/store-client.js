import { axiosInstance } from "boot/axios";

const state = {
    Clients: [],
    OneClient: [],

};

const mutations = {
    setClient(state, payload) {
        state.Clients = payload;
    },
    setOneClient(state, payload) {
        state.OneClient = payload;
    }
};


const actions = {
    async get_client({commit}) {
        const response = await axiosInstance.get(`/mrinnova/v2/clientes/`);
        commit('setClient', response.data)
    },
    async get_retrieve_client({commit}, payload) {
        console.log(payload)
        const response = await axiosInstance.get(`/mrinnova/v2/clientes/${payload}/`);
        commit('setOneClient', response.data)
    },
    async post_client({commit}, payload) {
        console.log(payload)
        const response = await axiosInstance.post(`/mrinnova/v2/clientes/`, payload);
        return response.data;
    },
    async destroy_client({commit}, payload) {
        console.log(payload)
        const response = await axiosInstance.destroy(`/mrinnova/v2/clientes/`, payload);
        return response.data;
    }
};

const getters = {
    getClients(state) {
        return state.Clients
    },
    getOneClient(state) {
        return state.OneClient
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
