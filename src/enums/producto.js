export const headTableProducto = [
    {
      name: "internal_product_code",
      label: "Código Interno",
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
    createProduct: "Agregar producto",
    editProduct: "Editar producto",
    detailsProduct: "Datos del producto",
  };

  export const notifyProducts = {
    successAddProduct: {
      type: "positive",
      message: `Se agregó un nuevo producto.`,
      position: "top",
    },
    successEditProduct: {
      type: "positive",
      message: `Se editó correctamente los datos del producto.`,
      position: "top",
    },
    errorAddProduct: {
      type: "negative",
      message: `No se pudo agregar el producto.`,
      position: "top",
    },
    errorEditProduct: {
      type: "negative",
      message: `No se pudo editar el producto.`,
      position: "top",
    },
    errorDeleteProduct: {
      type: "negative",
      message: `No se pudo eliminar el producto.`,
      position: "top",
    },
  };
  