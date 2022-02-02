const productSchema = {
    data() {
      return {
        form: {
            name: null,
            marca: null,
            modelo: null,
            code: null,
            internal_product_code: null,
            bar_code: null,
            quantity: null,
            serial_number: [],
            purchase_cost: null,
            obervations: null,
            tickets_purchases: null,
            outflows_sales: null,
            cost: null,
            description: null,
            id_invoice: null,
            date_of_entry: null,
        },
      };
    },
  };
  
  export { productSchema };
  