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
  },
};

const actions = {
  async actionGetClient({ commit }) {
    const response = await axiosInstance.get(`/mrinnova/v2/clientes/`);
    commit("setClient", response.data);
  },
  async actionCreateClient({ commit }, payload) {
    const response = await axiosInstance.post(
      `/mrinnova/v2/clientes/`,
      payload
    );
    return response.data;
  },
  async actionEditClient({ commit }, payload) {
    const response = await axiosInstance.put(
      `/mrinnova/v2/clientes/${payload.id}/`,
      payload
    );
    return response.data;
  },
  async actionDeleteClient({ commit }, payload) {
    const response = await axiosInstance.delete(
      `/mrinnova/v2/clientes/${payload.id}/`
    );
    return response.data;
  },
};

const getters = {
  getClients(state) {
    return state.Clients;
  },
  getOneClient(state) {
    return state.OneClient;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
