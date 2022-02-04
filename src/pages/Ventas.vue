<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Ventas"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="[]"
      :isActions="true"
      @handleEdit="editSales"
      @handleDelete="deleteSales"
    />
  </div>
</template>

<script>
import { headTableVenta } from "src/enums/venta";
export default {
  name: "SalesComponent",
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
    editSales(payload) {
      console.log("Editando venta: ", payload);
    },
    deleteSales(payload) {
      console.log("Eliminando venta: ", payload);
    },
  },
  mounted() {
    this.headTable = headTableVenta;
  },
};
</script>

<style></style>
