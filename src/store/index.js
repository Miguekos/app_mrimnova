import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import auth from './store-auth';
import client from './store-client';
import personal from './store-personal';
import product from './store-product';
import invoice from './store-invoice';
import service from './store-service';
import supplier from './store-supplier';
import sale from './store-sale';

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            // example
            auth,
            client,
            personal,
            product,
            invoice,
            service,
            supplier,
            sale
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEBUGGING
    })

    return Store
}
