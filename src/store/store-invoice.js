import {
  apiGetInvoice,
  apiEditInvoice,
  apiDeleteInvoice,
  apiCreateInvoice,
} from "src/api/invoice";

const state = {
  listInvoices: [],
};

const mutations = {
  SET_INVOICE(state, payload) {
    state.listInvoices = payload;
  },
};

const actions = {
  async actionGetInvoice({ commit }) {
    const responseGetInvoice = await apiGetInvoice();
    commit("SET_INVOICE", responseGetInvoice);
  },
  async actionCreateInvoice({ commit }, paylaod) {
    const responseCreateInvoice = await apiCreateInvoice(paylaod);
    return responseCreateInvoice;
  },
  async actionEditInvoice({ commit }, payload) {
    const responseEditInvoice = await apiEditInvoice(payload);
    return responseEditInvoice;
  },
  async actionDeleteInvoice({ commit }, paylaod) {
    const responseDeleteInvoice = await apiDeleteInvoice(paylaod);
    return responseDeleteInvoice;
  },
};

const getters = {
  getInvoice(state) {
    return state.listInvoices;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
