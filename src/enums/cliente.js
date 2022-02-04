export const headTableCliente = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "address_main",
    label: "Dirección",
  },
  {
    name: "email",
    label: "Correo",
  },
  {
    name: "type_document_name",
    label: "Tipo de Documento",
  },
  {
    name: "document",
    label: "Documento",
  },
  {
    name: "accion",
    align: "right",
    label: "Acciones",
  },
];

export const typeDocuments = [
  {
    label: "DNI",
    value: "0",
  },
  {
    label: "RUC",
    value: "1",
  },
];

export const titleModals = {
  createClient: "Agregar cliente",
  editClient: "Editar cliente",
  detailsClient: "Datos del cliente",
};

export const notifyClients = {
  successAddClient: {
    type: "positive",
    message: `Se agregó un nuevo cliente.`,
    position: "top",
  },
  successEditClient: {
    type: "positive",
    message: `Se editó correctamente los datos del cliente.`,
    position: "top",
  },
  errorAddClient: {
    type: "negative",
    message: `No se pudo agregar el cliente.`,
    position: "top",
  },
  errorEditClient: {
    type: "negative",
    message: `No se pudo editar los datos del cliente.`,
    position: "top",
  },
  errorDeleteClient: {
    type: "negative",
    message: `No se pudo dar de baja al cliente.`,
    position: "top",
  },
};
