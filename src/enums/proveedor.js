export const headTableProveedor = [
  {
    name: "label_document",
    label: "Tipo de documento",
  },
  {
    name: "document",
    label: "Documento",
  },
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "accion",
    align: "right",
    label: "Acciones",
  },
];

export const titleModals = {
  createSupplier: "Agregar proveedor",
  editSupplier: "Editar proveedor",
  detailsSupplier: "Datos del proveedor",
};

export const notifySupplier = {
  successAddSupplier: {
    type: "positive",
    message: `Se agregó un nuevo proveedor.`,
    position: "top",
  },
  successEditSupplier: {
    type: "positive",
    message: `Se editó correctamente los datos del proveedor.`,
    position: "top",
  },
  errorAddSupplier: {
    type: "negative",
    message: `No se pudo agregar el proveedor.`,
    position: "top",
  },
  errorEditSupplier: {
    type: "negative",
    message: `No se pudo editar los datos del proveedor.`,
    position: "top",
  },
  errorDeleteSupplier: {
    type: "negative",
    message: `No se pudo dar de baja al proveedor.`,
    position: "top",
  },
};
