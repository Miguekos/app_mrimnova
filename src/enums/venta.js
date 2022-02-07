export const headTableVenta = [
  {
    name: "client",
    label: "Cliente",
    field: (row) => row.name,
    format: (val) => `${val.name}`,
    sortable: true,
  },
  {
    name: "type_sales_name",
    label: "Tipo de venta",
  },
  {
    name: "address",
    label: "Dirección de la venta",
  },
  {
    name: "accion",
    align: "right",
    label: "Acciones",
  },
];

export const SERVICIOS_GENERALES = "0";
export const PRODUCTOS_SERVICIOS = "1";

export const typeSale = [
  {
    label: "Servicios Generales (Obras)",
    value: SERVICIOS_GENERALES,
  },
  {
    label: "Productos y Servicios (Video Vigilancia)",
    value: PRODUCTOS_SERVICIOS,
  },
];

export const paymentType = [
  {
    label: "Contado",
    value: "0",
  },
  {
    label: "Crédito",
    value: "1",
  },
];

export const titleModals = {
  createSale: "Agregar venta",
  editSale: "Editar venta",
  detailsSale: "Datos de la venta",
};

export const notifySales = {
  successAddSale: {
    type: "positive",
    message: `Se agregó una nueva venta.`,
    position: "top",
  },
  successEditSale: {
    type: "positive",
    message: `Se editó correctamente los datos de la venta.`,
    position: "top",
  },
  errorAddSale: {
    type: "negative",
    message: `No se pudo agregar la venta.`,
    position: "top",
  },
  errorEditSale: {
    type: "negative",
    message: `No se pudo editar los datos de la venta.`,
    position: "top",
  },
  errorDeleteSale: {
    type: "negative",
    message: `No se pudo elimianr la venta.`,
    position: "top",
  },
};
