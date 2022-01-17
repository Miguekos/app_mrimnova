<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Servicios"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="[]"
      :isActions="true"
      @handleEdit="editService"
      @handleDelete="deletetService"
    />
  </div>
</template>

<script>
import { headTableServicio } from "src/enums/servicio";
export default {
  name: "ServiceComponent",
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
    editService(payload) {
      console.log("Editando cliente: ", payload);
    },
    deletetService(payload) {
      console.log("Eliminando cliente: ", payload);
    },
  },
  mounted() {
    this.headTable = headTableServicio;
  },
};
</script>

<style></style>
