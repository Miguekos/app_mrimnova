<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Facturas"
    />
  </div>
</template>

<script>
export default {
  name: "InvoicesComponent",
  components: {
    TitleGeneric: () => import("src/components/Title.vue"),
  },
  data() {
    return {
      isModalCreate: false,
    };
  },
  methods: {
    openModal() {
      this.isModalCreate = true;
    }
  },
};
</script>

<style></style>
