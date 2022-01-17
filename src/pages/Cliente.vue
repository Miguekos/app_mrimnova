<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="group"
      color="red"
      @click="create_client = !create_client"
      titulo="Clientes"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="getClients"
      :isActions="true"
      @handleEdit="editClient"
      @handleDelete="deleteClient"
    />
    <q-dialog v-model="create_client">
      <q-card>
        <q-card-section>
          <div class="text-h6">Crear nuevo cliente</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 70vh" class="scroll">
          <createClient @click="create_client = !create_client" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { headTableCliente } from "src/enums/cliente";

export default {
  name: "ClientComponent",
  computed: {
    ...mapGetters("client", ["getClients"]),
  },
  components: {
    TitleGeneric: () => import("src/components/Title"),
    GenericTable: () => import("src/components/Tables/GenericTable"),
    createClient: () => import("src/components/Client/CreateClient"),
  },
  data() {
    return {
      create_client: false,
      headTable: [],
    };
  },
  methods: {
    ...mapActions("client", ["get_client"]),
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
    editClient(payload) {
      console.log("Editando cliente: ", payload);
    },
    deleteClient(payload) {
      console.log("Eliminando cliente: ", payload);
    },
  },
  async created() {
    console.log("asd");
    this.$q.loading.show();
    await this.get_client();
    this.$q.loading.hide();
  },
  mounted() {
    this.headTable = headTableCliente;
  },
};
</script>
