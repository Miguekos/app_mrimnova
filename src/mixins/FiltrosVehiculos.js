const FiltrosVehioculos = {
  computed: {
    filtrosNuevos() {
      // console.log("NUevos filtros", this.filteredByAll);
      const array = this.filteredByAll;
      this.status = [];
      this.city = [];
      this.mobil = [];
      this.payment_method_title = [];
      this.$q.loading.show();
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        // console.log(element.no_marveh);
        this.status.push(element.no_marveh);
        this.city.push(element.no_modveh);
        this.mobil.push(element.nu_anofab);
      }
      this.$q.loading.hide();
    },
    filteredByAll() {
      const keyw = this.getByKeyword(this.getVehiculos, this.keyword),
        keyid = this.getById(keyw, this.findID),
        stat = this.getByStatus(keyid, this.statuss),
        cunt = this.getByCity(stat, this.citys),
        mobiles = this.getByMobil(cunt, this.mobils);
      return mobiles;
    },
    filtro1_unique() {
      return [...new Set(this.status)];
    },
    filtro2_unique() {
      return [...new Set(this.city)];
    },
    filtro3_unique() {
      return [...new Set(this.mobil)];
    }
  },
  data() {
    return {
      loadtable : false,
      infoDate: [],
      editarinfo: false,
      opciones: false,
      jsonEnviar: [],
      idRegistro: null,
      detalleData: "",
      selected: [],
      city: [],
      citys: "",
      mobil: [],
      mobils: "",
      payment_method_title: [],
      payment_method_titles: "",
      keyword: "",
      findID: "",
      detalleInfo: [],
      status: [],
      statuss: "",
      inception: false,
      filter: "",
      loading: false,
      dateIni: "",
      dateFin: ""
    };
  },
  created: function() {
    console.log("Mixin FiltrosVehioculos");
  },
  methods: {
    noti(val) {
      if (val === 1) {
        this.$q.notify({
          message: "Se actualizo correctamente",
          color: "white",
          textColor: "blue-5",
          position: "top"
        });
      }
      if (val === 2) {
        this.$q.notify({
          message: "Ya esta asignado a este usuario",
          color: "white",
          textColor: "blue-5",
          position: "top"
        });
      }
      if (val === 3) {
        this.$q.notify({
          message: "Oh oh, algo salio mal",
          color: "white",
          textColor: "red-5",
          position: "top"
        });
      }
      if (val === 4) {
        this.$q.notify({
          message: "No puedes dejar campos vacios",
          color: "white",
          textColor: "red-5",
          position: "top"
        });
      }
      if (val === 5) {
        this.$q.notify({
          message: "No se encontro el registro",
          color: "white",
          textColor: "red-5",
          position: "top"
        });
      }
    },
    getByKeyword(list, keyword) {
      const search = keyword.trim().toLowerCase();
      // console.log(search);
      if (!search.length) return list;
      return list.filter(
        item => item.co_plaveh.toLowerCase().indexOf(search) > -1
      );
    },
    getById(list, id) {
      const search = id.toString();
      // console.log(search);
      if (!search.length) return list;
      // return list.filter(item => item.registro == id);
      return list.filter(
        item =>
          item.co_vehicu
            .toString()
            .toLowerCase()
            .indexOf(search) > -1
      );
      // return list.filter((id) => id > 0 && id % parseInt(id) === 0 ).map( (id) => Math.pow(id, 5));
    },
    getByStatus(list, status) {
      if (!status) return list;
      return list.filter(item => item.no_marveh === status);
    },
    getByCity(list, city) {
      if (!city) return list;
      return list.filter(item => item.no_modveh === city);
    },
    getByMobil(list, mobil) {
      if (!mobil) return list;
      return list.filter(item => item.nu_anofab === mobil);
    }
  }
};

export { FiltrosVehioculos };
