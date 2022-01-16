<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Productos"
    />
    <GenericTable />
  </div>
</template>

<script>
export default {
  components: {
    TitleGeneric: () => import("src/components/Title.vue"),
    GenericTable: () => import("src/components/Tables/GenericTable.vue"),
  },
  data() {
    return {
      isModalCreate: false,
    };
  },
  methods: {
    openModal() {
      this.isModalCreate = true;
    },
  },
};
</script>

<style></style>
