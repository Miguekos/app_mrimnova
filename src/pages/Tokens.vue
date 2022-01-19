<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Tokens"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="[]"
      :isActions="true"
      @handleEdit="editToken"
      @handleDelete="deleteToken"
    />
  </div>
</template>

<script>
import { headTableToken } from "src/enums/token";
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
    editToken(payload) {
      console.log("Editando token: ", payload);
    },
    deleteToken(payload) {
      console.log("Eliminando token: ", payload);
    },
  },
  mounted() {
    this.headTable = headTableToken;
  },
};
</script>

<style></style>
