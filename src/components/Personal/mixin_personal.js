const Mixin_personal = {
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Nombre",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "lastnames",
          align: "left",
          label: "Apellidos",
          field: "lastnames",
          sortable: true,
        },
        {
          name: "dni",
          align: "left",
          label: "Documento",
          field: "dni",
          sortable: true,
        },
        {
          name: "phone",
          align: "left",
          label: "Telefono",
          field: "phone",
          sortable: true,
        },
        {
          name: "email",
          align: "left",
          label: "Email",
          field: "email",
          sortable: true,
        },
        {
          name: "address",
          align: "left",
          label: "Direccion",
          field: (row) => row,
          format: (val) => `${val.address}`,
          sortable: true,
        },
        {
          name: "accion",
          align: "right",
          label: "Acciones",
          field: "accion",
          sortable: true,
        },
      ],
    };
  },
};

export { Mixin_personal };
