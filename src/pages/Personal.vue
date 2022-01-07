<template>
  <div class="q-pa-sm">
    <TitleGeneric
        icon="face"
        color="green"
        @click="create_personal = !create_personal"
        titulo="Personal"
    />
    <personalComponent :info="getPersonal" />
    <q-dialog v-model="create_personal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Crear nuevo personal</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 70vh" class="scroll">
          <createPersonal @click="create_personal = !create_personal" />
        </q-card-section>

        <!--        <q-separator />-->

        <!--        <q-card-actions align="right">-->
        <!--          <q-btn flat label="Decline" color="primary" v-close-popup />-->
        <!--          <q-btn flat label="Accept" color="primary" v-close-popup />-->
        <!--        </q-card-actions>-->
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("personal", ["getPersonal"]),
  },
  components: {
    personalComponent: () => import("src/components/Personal/TablaPersonal"),
    createPersonal: () => import("src/components/Personal/CreatePersonal"),
    TitleGeneric: () => import("src/components/Title"),
  },
  data() {
    return {
      create_personal: false,
    };
  },
  methods: {
    ...mapActions("personal", ["get_personal"]),
    click_title(val) {
      console.log("Boton en Citas");
      this.tipo = val;
      if (val === 1) {
        console.log("Boton en Citas 1");
        this.dialogCrear = true;
        console.log("se preciono el boton");
        this.$store.commit("citas/dialogCrear", true);
      } else if (val === 2) {
        this.dataEdit = this.$store.state.citas.dataEdit;
        console.log("Boton en Citas 2");
        this.dialogCrear = true;
        console.log("se preciono el boton");
        this.$store.commit("citas/dialogCrear", true);
      }
    },
  },
  name: "PersoalComponent",
  async created() {
    this.$q.loading.show();
    await this.get_personal();
    this.$q.loading.hide();
  },
};
</script>
