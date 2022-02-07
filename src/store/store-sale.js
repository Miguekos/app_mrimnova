import {
  apiGetSales,
  apiEditSale,
  apiDeleteSale,
  apiCreateSale,
} from "src/api/sale";

const state = {
  listSales: [],
};

const mutations = {
  SET_SALES(state, payload) {
    state.listSales = payload;
  },
};

const actions = {
  async actionGetSales({ commit }) {
    const responseGetSales = await apiGetSales();
    commit("SET_SALES", responseGetSales);
  },
  async actionCreateSale({ commit }, paylaod) {
    const responseCreateSale = await apiCreateSale(paylaod);
    return responseCreateSale;
  },
  async actionEditSale({ commit }, payload) {
    const responseEditSale = await apiEditSale(payload);
    return responseEditSale;
  },
  async actionDeleteSale({ commit }, paylaod) {
    const responseDeleteSale = await apiDeleteSale(paylaod);
    return responseDeleteSale;
  },
};

const getters = {
  getSales(state) {
    return state.listSales;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
