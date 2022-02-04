export const headTableServicio = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "quantity",
    label: "Cantidad",
  },
  {
    name: "quota",
    label: "Cuota",
  },
  {
    name: "accion",
    align: "right",
    label: "Acciones",
  },
];

export const titleModals = {
  createService: "Agregar servicio",
  editService: "Editar servicio",
  detailsService: "Datos del servicio",
};

export const notifyService = {
  successAddService: {
    type: "positive",
    message: `Se agregó un nuevo servicio.`,
    position: "top",
  },
  successEditService: {
    type: "positive",
    message: `Se editó correctamente los datos del servicio.`,
    position: "top",
  },
  errorAddService: {
    type: "negative",
    message: `No se pudo agregar el servicio.`,
    position: "top",
  },
  errorEditService: {
    type: "negative",
    message: `No se pudo editar los datos del servicio.`,
    position: "top",
  },
  errorDeleteService: {
    type: "negative",
    message: `No se pudo eliminar el servicio.`,
    position: "top",
  },
};
