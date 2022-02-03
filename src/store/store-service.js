import {
  apiGetService,
  apiEditService,
  apiDeleteService,
  apiCreateService,
} from "src/api/service";

const state = {
  listServices: [],
};

const mutations = {
  SET_SERVICE(state, payload) {
    state.listServices = payload;
  },
};

const actions = {
  async actionGetService({ commit }) {
    const responseGetService = await apiGetService();
    commit("SET_SERVICE", responseGetService);
  },
  async actionCreateService({ commit }, paylaod) {
    const responseCreateService = await apiCreateService(paylaod);
    return responseCreateService;
  },
  async actionEditService({ commit }, payload) {
    const responseEditService = await apiEditService(payload);
    return responseEditService;
  },
  async actionDeleteService({ commit }, paylaod) {
    const responseDeleteService = await apiDeleteService(paylaod);
    return responseDeleteService;
  },
};

const getters = {
  getServices(state) {
    return state.listServices;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
