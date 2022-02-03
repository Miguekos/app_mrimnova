export const headTableFactura = [
  {
    name: "codigo",
    label: "Código",
  },
  {
    name: "label_document",
    label: "Tipo de pedido",
  },
  {
    name: "accion",
    align: "right",
    label: "Acciones",
  },
];

export const typeDocuments = [
  {
    label: "Factura",
    value: "0",
  },
  {
    label: "Boleta",
    value: "1",
  },
];

export const titleModals = {
  createInvoice: "Agregar factura",
  editInvoice: "Editar factura",
  detailsInvoice: "Datos de la factura",
};

export const notifyInvoice = {
  successAddInvoice: {
    type: "positive",
    message: `Se agregó una nueva factura.`,
    position: "top",
  },
  successEditInvoice: {
    type: "positive",
    message: `Se editó correctamente los datos de la factura.`,
    position: "top",
  },
  errorAddInvoice: {
    type: "negative",
    message: `No se pudo agregar la factura.`,
    position: "top",
  },
  errorEditInvoice: {
    type: "negative",
    message: `No se pudo editar los datos de la factura.`,
    position: "top",
  },
  errorDeleteInvoice: {
    type: "negative",
    message: `No se pudo eliminar la factura.`,
    position: "top",
  },
};