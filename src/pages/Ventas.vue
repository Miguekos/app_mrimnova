<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="openModal"
      titulo="Ventas"
    />
  </div>
</template>

<script>
export default {
  name: "SalesComponent",
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
