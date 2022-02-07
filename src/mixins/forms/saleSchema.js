const saleSchema = {
  data() {
    return {
      generalForm: {
        id: null,
        type_sales: null,
        client: null,
        contracts: null,
        address: null,
      },
      generalServiceForm: {
        details: null,
        descriptions: null,
        materials: null,
        cost: null,
        quote: null,
      },
      productServiceForm: {
        products: [],
        type_method_products: null,
        down_payment_producto_cre: null,
        quotas_producto_cre: null,
        services: [],
        type_method_services: null,
        down_payment_servicios_cre: null,
        quotas_servicios_cre: null,
        bills_receivable: null,
        payment_notifications: false,
      },
    };
  },
};

export { saleSchema };
