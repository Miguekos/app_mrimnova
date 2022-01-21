<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="group"
      color="red"
      @click="isModalCreate = true"
      titulo="Clientes"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="getClients"
      :isActions="true"
      @handleEdit="editClient"
      @handleDelete="deleteClient"
    />
    <q-dialog v-model="isModalCreate">
      <q-card>
        <q-card-section>
          <div class="text-h6">Crear nuevo cliente</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ClientForm
            :typeDocuments="typeDocuments"
            @handleSubmit="addClient"
            @handleCancel="isModalCreate = false"
          />
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
    ClientForm: () => import("src/components/Forms/ClientForm"),
  },
  data() {
    return {
      isModalCreate: false,
      headTable: [],
      typeDocuments: [
        {
          label: "DNI",
          value: 1,
        },
        {
          label: "RUC",
          value: 2,
        },
      ],
      defaultForm: {
        name: "Diego U.",
        address: "Av. Santa Gertrudis",
        email: "diegourbina1284@gmail.com",
        documentType: {
          label: "DNI",
          value: 0,
        },
        document: "77344583",
        perfil: null,
      },
    };
  },
  methods: {
    ...mapActions("client", ["get_client"]),
    editClient(payload) {
      console.log("Editando cliente: ", payload);
    },
    deleteClient(payload) {
      console.log("Eliminando cliente: ", payload);
    },
    addClient(payload) {
      console.log("Agregando cliente: ", payload);
    },
  },
  async created() {
    this.$q.loading.show();
    await this.get_client();
    this.$q.loading.hide();
  },
  mounted() {
    this.headTable = headTableCliente;
  },
};
</script>
