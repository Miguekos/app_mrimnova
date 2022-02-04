import {
  apiGetProduct,
  apiEditProduct,
  apiDeleteProduct,
  apiCreateProduct,
} from "src/api/product";

const state = {
  listProducts: [],
};

const mutations = {
  SET_PRODUCT(state, payload) {
    state.listProducts = payload;
  },
};

const actions = {
  async actionGetProduct({ commit }) {
    const responseGetProduct = await apiGetProduct();
    commit("SET_PRODUCT", responseGetProduct);
  },
  async actionCreateProduct({ commit }, paylaod) {
    const responseCreateProduct = await apiCreateProduct(paylaod);
    return responseCreateProduct;
  },
  async actionEditProduct({ commit }, payload) {
    const responseEditProduct = await apiEditProduct(payload);
    return responseEditProduct;
  },
  async actionDeleteProduct({ commit }, paylaod) {
    const responseDeleteProduct = await apiDeleteProduct(paylaod);
    return responseDeleteProduct;
  },
};

const getters = {
  getProducts(state) {
    return state.listProducts;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
