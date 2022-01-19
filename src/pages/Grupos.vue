<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Grupos"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="[]"
      :isActions="true"
      @handleEdit="editGroup"
      @handleDelete="deleteGroup"
    />
  </div>
</template>

<script>
import { headTableGrupo } from "src/enums/grupo";
export default {
  name: "GroupsComponent",
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
    editGroup(payload) {
      console.log("Editando grupo: ", payload);
    },
    deleteGroup(payload) {
      console.log("Eliminando grupo: ", payload);
    },
  },
  mounted() {
    this.headTable = headTableGrupo;
  },
};
</script>

<style></style>
