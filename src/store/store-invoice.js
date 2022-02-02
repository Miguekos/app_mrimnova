import { apiGetInvoice } from "src/api/invoice";

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
