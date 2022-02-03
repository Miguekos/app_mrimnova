import {
    apiGetSupplier,
    apiEditSupplier,
    apiDeleteSupplier,
    apiCreateSupplier,
  } from "src/api/supplier";
  
  const state = {
    listSuppliers: [],
  };
  
  const mutations = {
    SET_SUPPLIER(state, payload) {
      state.listSuppliers = payload;
    },
  };
  
  const actions = {
    async actionGetSupplier({ commit }) {
      const responseGetSupplier = await apiGetSupplier();
      commit("SET_SUPPLIER", responseGetSupplier);
    },
    async actionCreateSupplier({ commit }, paylaod) {
      const responseCreateSupplier = await apiCreateSupplier(paylaod);
      return responseCreateSupplier;
    },
    async actionEditSupplier({ commit }, payload) {
      const responseEditSupplier = await apiEditSupplier(payload);
      return responseEditSupplier;
    },
    async actionDeleteSupplier({ commit }, paylaod) {
      const responseDeleteSupplier = await apiDeleteSupplier(paylaod);
      return responseDeleteSupplier;
    },
  };
  
  const getters = {
    getSuppliers(state) {
      return state.listSuppliers;
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  