<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="create_personal = !create_personal"
      titulo="Personal"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="getPersonal"
      :isActions="true"
      @handleEdit="editPersonal"
      @handleDelete="deletePersonal"
    />
    <q-dialog v-model="create_personal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Crear nuevo personal</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <createPersonal @click="create_personal = !create_personal" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { headTablePersonal } from "src/enums/personal";

export default {
   name: "PersoalComponent",
  computed: {
    ...mapGetters("personal", ["getPersonal"]),
  },
  components: {
    TitleGeneric: () => import("src/components/Title"),
    GenericTable: () => import("src/components/Tables/GenericTable"),
    createPersonal: () => import("src/components/Personal/CreatePersonal"),
  },
  data() {
    return {
      create_personal: false,
      headTable: [],
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
    editPersonal(payload) {
      console.log("Editando cliente: ", payload);
    },
    deletePersonal(payload) {
      console.log("Eliminando cliente: ", payload);
    },
  }, 
  async created() {
    this.$q.loading.show();
    await this.get_personal();
    this.$q.loading.hide();
  },
  mounted() {
    this.headTable = headTablePersonal;
  },
};
</script>
