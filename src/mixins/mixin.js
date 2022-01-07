// Define un objeto _mixin_
import { Fechas } from "../directives/formatFecha";

const MixinDefault = {
  data() {
    return {
      labels: {
        address: "Direccion",
        type_document: "Tipo de documento",
        name: "Nombre",
        email: "Correo",
        type_method_products: "Metodo de pago Productos",
        type_method_services: "Metodo de pago Servicios",
        document: "Documento",
        cash_payment: "Pago Efectivo",
        payment_to_credit: "Pago Credito",
        bills_receivable: "Letras",
        payment_notifications: "Recordatoria de pago",
        date_received: "Recibido",
        no_asesor: "Asesor",
        no_zongeo: "Zona Geográfica",
        ti_landin: "código Tipo",
        ca_precal: "Cant. Precalificados",
        ca_singes: "Cant. Sin Gestión",
        ca_totges: "Cant. Total",
        no_coment: "Comentario",
        no_estlla: "Est. llamada",
        no_estdoc: "Est. Documento",
        co_landin: "CodLanding",
        no_expsis: "Exp. Sistema",
        no_tiplan: "landing",
        no_resges: "Resul. Gestion",
        co_expedi: "Cod. Expediente",
        il_conver: "Converus",
        fe_citcvr: "Fecha Cita",
        no_rescvr: "Resp. Converus",
        fe_nacimi: "Fecha de naciemiento",
        no_estciv: "Estado civil",
        no_result: "Resultado",
        no_liccon: "Licencia de Conducir",
        no_depart: "Departamento",
        no_provin: "Provincia",
        no_distri: "Distrito",
        de_experi: "Experiencia",
        no_estado: "Estado",
        co_docide: "Documento",
        no_apepat: "Ap. Paterno",
        no_apemat: "Ap. Materno",
        no_nombre: "Nombres",
        fe_regist: "Fecha de registro",
        co_empres: "Cod. Empresa",
        co_almace: "Cod. Almacen",
        no_empres: "Empresa",
        no_almace: "Almacén",
        co_articu: "Código",
        fe_movini: "Fecha",
        co_docume: "Documento",
        co_transa: "Transacción",
        ca_entuni: "Cantidad",
        im_entuni: "Precio",
        im_enttot: "Importe",
        ca_saluni: "Cantidad",
        im_saluni: "Precio",
        im_saltot: "Precio",
        ca_resuni: "Cantidad",
        im_resuni: "Precio",
        im_restot: "Precio",
        accion: "Accion",
        no_descri: "Descripcion",
        fe_actual: "Fecha",
        ca_rechaz: "Cant. Rechazo",
        im_rechaz: "Imp. Rechazo",
        un_rechaz: "Prom. Rechazo",
        ca_penide: "Cantidad pendiente",
        im_pendie: "Imp. Pendiente",
        un_pendie: "Prom. Pendiente",
        ca_autori: "Cantidad autorizada",
        im_autori: "Imp. Autorizado",
        un_autori: "Prom Autorizado",
        ca_proces: "Cant. Proceso",
        im_proces: "Imp. Proceso",
        un_proces: "Prom. Proceso",
        ca_cerrad: "Cant. Cerrado",
        im_cerrad: "Imp. Cerrado",
        un_cerrad: "Prom. Cerrado",
        ca_totale: "Cantidad total",
        im_totale: "Imp. Total",
        un_totale: "Prom. Total",
        ca_dispon: "Cant. Disponible",
        im_dispon: "Imp. Disponible",
        un_dispon: "Prom. Disponible",
        co_operac: "Codigo",
        co_descri: "Codigo",
        co_vehicu: "Codigo Vehiculo",
        codigoProducto: "CodigoProducto",
        numDocumento: "NumDocumento",
        descDocumento: "DescDocumento",
        fechaVencimiento: "FechaVencimiento",
        fechaEmision: "FechaEmision",
        deuda: "Deuda",
        mora: "Mora",
        gastosAdm: "GastosAdm",
        pagoMinimo: "PagoMinimo",
        periodo: "Periodo",
        anio: "Anio",
        cuota: "Cuota",
        monedaDoc: "MonedaDoc",
        no_period: "Periodo",
        co_barras: "Código",
        no_articu: "Nombre Artículo",
        co_unimed: "Unidad de Medida",
        ca_articu: "Cant. Artículo",
        ca_ingres: "Cant. Ingreso",
        ca_pendie: "Cant. Pendiente",
        no_operac: "Operación",
        co_plaveh: "Placa",
        no_marmod: "Marca Modelo",
        fe_inipro: "Inicio Proceso",
        fe_finpro: "Fin Proceso",
        no_person: "Persona o Cliente",
        no_marveh: "Marca",
        no_modveh: "Modelo",
        nu_anomod: "Año",
        nu_anoveh: "Año",
        no_colveh: "Color",
        nu_serveh: "Chasis",
        nu_motveh: "Motor",
        ti_servic: "Tipo Servicio",
        se_ventas: "Servicios Venta",
        se_costos: "Servicios Costo",
        se_margen: "Servicios Margen",
        se_rentab: "Servicios Rentabilidad",
        ma_ventas: "Materiales Venta",
        ma_costos: "Materiales Costo",
        ma_margen: "Materiales Margen",
        ma_rentab: "Materiales Rentabilidad",
        ma_sd: "Sin Despachar",
        to_ventas: "Total Venta",
        to_costos: "Total Costo",
        to_margen: "Total Margen",
        to_rentab: "Total Rentabilidad",
        or_numbre: "Item",
        no_client: "Cliente",
        nu_telefo: "Teléfono",
        no_marcav: "Marca",
        no_modelo: "Modelo",
        ti_client: "Tipo Cliente",
        fe_entreg: "Fecha de Entrega",
        km_priing: "Kilometraje",
        no_tipser: "Tipo Servicio",
        ca_sinter: "C. Sin Term.",
        fec_1k: "1000 KM",
        fec_5k: "5000 KM",
        fec_10k: "10000 KM",
        fec_15k: "15000 KM",
        fec_20k: "20000 KM",
        fec_25k: "25000 KM",
        fec_30k: "30000 KM",
        fec_35k: "35000 KM",
        fec_40k: "40000 KM",
        fec_45k: "45000 KM",
        fec_50k: "50000 KM",
        fec_55k: "55000 KM",
        fec_60k: "60000 KM",
        fec_65k: "65000 KM",
        fec_70k: "70000 KM",
        fec_75k: "75000 KM",
        fec_80k: "80000 KM",
        fec_85k: "85000 KM",
        fec_90k: "90000 KM",
        fec_100k: "100000 KM",
        fe_actchi: "Activacion de Chip",
        no_correo: "Correo",
        no_nivedu: "Nivel de Educación",
        no_tipdoc: "Tipo de Documento",
        no_tipcom: "Tipo de Combustible",
        no_tipcom2: "Convertir",
        no_perfil: "Perfil",
        no_respon: "Responsable",
        fe_mangen: "Mnt. General",
        ca_diaatr: "Dias Atraso",
        id_operac: "Operación",
        fe_termin: "Fecha Término",
        im_servic: "Imp.Servicio",
        im_materi: "Imp.Materiales",
        im_basimp: "Base Imponible",
        im_totigv: "IGV",
        im_totope: "Total Operación",
        no_produc: "Producto",
        no_tippla: "Tipo Plan",
        no_entida: "Entidad",
        no_exacvr: "Converus",
        ca_aproba: "Cant. Aprobada",
        im_aproba: "Imp. Aprobado",
        ca_porpag: "Cant. por Pagar",
        im_porpag: "Imp. por Pagar",
        ca_pagado: "Cant. Pagado",
        im_pagado: "Imp. Pagado",
        ca_comref: "Cant. Total",
        im_comisi: "Imp. Total",
        ca_operac: "Operaciones",
      },
    };
  },
  async created() {
    console.log("Cargando Mixin Default");
  },
  methods: {
    ObjKeyRename(src, map) {
      var dst = {};
      for (var key in src) {
        if (key in map) {
          // rename key
          if (src[key] instanceof Array) {
            dst[map[key]] = src[key].map((i) => ObjKeyRename(i, map));
          } else {
            dst[map[key]] = src[key];
          }
        } else {
          // same key
          dst[key] = src[key];
        }
      }
      return dst;
    },
    noti(val) {
      if (val === 1) {
        this.$q.notify({
          message: "Se actualizo correctamente",
          color: "white",
          textColor: "blue-5",
          position: "top",
        });
      }
      if (val === 2) {
        this.$q.notify({
          message: "Ya esta asignado a este usuario",
          color: "white",
          textColor: "blue-5",
          position: "top",
        });
      }
      if (val === 3) {
        this.$q.notify({
          message: "Oh oh, algo salio mal",
          color: "white",
          textColor: "red-5",
          position: "top",
        });
      }
      if (val === 4) {
        this.$q.notify({
          message: "No puedes dejar campos vacios",
          color: "white",
          textColor: "red-5",
          position: "top",
        });
      }
      if (val === 5) {
        this.$q.notify({
          message: "No se encontro el registro",
          color: "white",
          textColor: "red-5",
          position: "top",
        });
      }
    },
    formatFecha(val) {
      return Fechas.larga(val);
    },
    formatFechaCorta(val) {
      return Fechas.Custom(val);
    },
  },
};

const storagelocal = {
  data() {
    return {
      userLocal: null,
      idLocal: null,
    };
  },
  created: function () {
    const todo = this.$q.localStorage.getAll();
    this.idLocal = todo.co_usuari;
    this.userLocal = todo.UserDetalle;
    console.log("todo.UserDetalle", todo.UserDetalle);
  },
  methods: {},
};

export { MixinDefault, storagelocal };
