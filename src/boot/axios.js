import axios from "axios";
import {LocalStorage} from "quasar";

axios.defaults.withCredentials = false;

const info_storage = LocalStorage.getAll().UserDetalle
console.log("info_storage", info_storage)
if (info_storage) {
    axios.defaults.headers.common['Authorization'] = `Token ${info_storage.token}`;
} else {

}

// import qs from "qs";
// import proxy from "http-proxy-middleware";
// // var proxy = require('http-proxy-middleware');
// proxy("/api", {
//   target: "http://127.0.0.1:3000",
//   changeOrigin: true, // needed for virtual hosted sites
//   // ws: true, // proxy websockets
//   pathRewrite: {
//     '^/api/': '', // rewrite path
//   },
// });

const axiosImpresora = axios.create({
    // paramsSerializer: params => {
    //   return qs.stringify(params, { arrayFormat: "repeat" });
    // },
    // proxy: {login
    //   host: '127.0.0.1',
    //   port: 9000
    // }
    // baseURL: "http://172.105.17.123:4100"
    // baseURL: "http://192.168.0.32:9876"
    // baseURL: "http://192.168.0.21:9876"
    // baseURL: "https://api.apps.com.pe"
    // baseURL: "http://192.168.31.2:5454",
    withCredentials: false,
    baseURL: `${process.env.IP_IMPRESORA}`
    // headers: { Authorization: `${process.env.AUTH_BASIC}` }
});

// let headersrs = ''
// if (LocalStorage.getAll().UserDetalle) {
//     headersrs = `headers: { Authorization: Token ${LocalStorage.getAll().UserDetalle.token} }`
// }

// console.log("asdasdas", LocalStorage.getAll().UserDetalle.token)

const axiosInstance = axios.create({
    // paramsSerializer: params => {
    //   return qs.stringify(params, { arrayFormat: "repeat" });
    // },
    // proxy: {login
    //   host: '127.0.0.1',
    //   port: 9000
    // }
    // baseURL: "http://172.105.17.123:4100"
    // baseURL: "http://192.168.0.32:9876"
    baseURL: "http://127.0.0.1:8000",
    // baseURL: "https://api.apps.com.pe"
    // baseURL: "http://192.168.0.33:9876"
    // baseURL: `${process.env.API_URL}`,
    // headers: {
    //     Authorization: `Token ${LocalStorage.getAll().UserDetalle.token}`,
    //     // 'Access-Control-Allow-Origin' : '*' ,
    //     // 'Access-Control-Allow-Headers' : '*'
    // }
    // headersrs
});

const axiosInstanceImagen = axios.create({
    // paramsSerializer: params => {
    //   return qs.stringify(params, { arrayFormat: "repeat" });
    // },
    // proxy: {login
    //   host: '127.0.0.1',
    //   port: 9000
    // }
    // baseURL: "http://172.105.17.123:4100"
    // baseURL: "http://192.168.0.32:9876"
    // baseURL: "http://192.168.0.21:9876"
    // baseURL: "https://api.apps.com.pe"
    // baseURL: "http://192.168.0.33:9876"
    baseURL: `${process.env.Imagen_URL}`,
    headers: {Authorization: `${process.env.AUTH_BASIC}`}
});

export default ({Vue}) => {
    Vue.prototype.$axios = axiosInstance;
};

export {axiosInstance, axiosInstanceImagen, axiosImpresora};
