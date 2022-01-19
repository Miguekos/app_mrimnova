<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Usuarios"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="[]"
      :isActions="true"
      @handleEdit="editUser"
      @handleDelete="deleteUser"
    />
  </div>
</template>

<script>
import { headTableUsuario } from "src/enums/usuario";
export default {
  name: "UsersComponent",
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
    editUser(payload) {
      console.log("Editando usuario: ", payload);
    },
    deleteUser(payload) {
      console.log("Eliminando usuario: ", payload);
    },
  },
  mounted() {
    this.headTable = headTableUsuario;
  },
};
</script>

<style></style>
