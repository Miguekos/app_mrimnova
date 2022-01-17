<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Productos"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="[]"
      :isActions="true"
      @handleEdit="editProduct"
      @handleDelete="deleteProduct"
    />
  </div>
</template>

<script>
import { headTableProducto } from "src/enums/producto";
export default {
  name: "ProductComponent",
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
    editProduct(payload) {
      console.log("Editando cliente: ", payload);
    },
    deleteProduct(payload) {
      console.log("Eliminando cliente: ", payload);
    },
  },
  mounted() {
    this.headTable = headTableProducto;
  },
};
</script>

<style></style>
