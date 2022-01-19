<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Facturas"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="[]"
      :isActions="true"
      @handleEdit="editInvoice"
      @handleDelete="deleteInvoice"
    />
  </div>
</template>

<script>
import { headTableFactura } from "src/enums/factura";
export default {
  name: "InvoicesComponent",
  components: {
    TitleGeneric: () => import("src/components/Title.vue"),
    GenericTable: () => import("src/components/Tables/GenericTable"),
  },
  data() {
    return {
      isModalCreate: false,
      headTable: [],
    };
  },
  methods: {
    openModal() {
      this.isModalCreate = true;
    },
    editInvoice(payload) {
      console.log("Editando factura: ", payload);
    },
    deleteInvoice(payload) {
      console.log("Eliminando factura: ", payload);
    },
  },
  mounted() {
    this.headTable = headTableFactura;
  },
};
</script>

<style></style>
