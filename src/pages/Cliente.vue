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
      @handleView="openViewModal"
      @handleEdit="openEditModal"
      @handleDelete="submitDeleteClient"
    />
    <q-dialog v-model="isModalCreate">
      <q-card>
        <q-card-section>
          <div class="text-h6">Agregar cliente</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ClientForm
            :typeDocuments="typeDocuments"
            :loading="loading"
            @handleSubmit="submitAddClient"
            @handleCancel="isModalCreate = false"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalEdit">
      <q-card>
        <q-card-section>
          <div class="text-h6">Editar cliente</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ClientForm
            :typeDocuments="typeDocuments"
            :defaultForm="defaultFormClient"
            @handleSubmit="submitEditClient"
            @handleCancel="closeEditModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalDetails">
      <q-card>
        <q-card-section>
          <div class="text-h6">Datos del cliente</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ClientForm
            :readOnly="true"
            :typeDocuments="typeDocuments"
            :defaultForm="defaultFormClient"
            @handleCancel="closeViewModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { headTableCliente, typeDocuments } from "src/enums/cliente";

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
      isModalEdit: false,
      isModalDetails: false,
      headTable: headTableCliente,
      typeDocuments,
      defaultFormClient: null,
      loading: false,
    };
  },
  methods: {
    ...mapActions("client", ["get_client", "post_client"]),
    openViewModal(payload) {
      this.isModalDetails = true;
      this.defaultFormClient = { ...payload };
    },
    openEditModal(payload) {
      this.isModalEdit = true;
      this.defaultFormClient = { ...payload };
    },
    closeViewModal() {
      this.isModalDetails = false;
      this.defaultFormClient = null;
    },
    closeEditModal() {
      this.isModalEdit = false;
      this.defaultFormClient = null;
    },
    async submitAddClient(payload) {
      try {
        this.loading = true;
        await this.post_client(payload);
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
    submitEditClient(payload) {
      console.log("Editando cliente: ", payload);
    },
    submitDeleteClient(payload) {
      console.log("Eliminando cliente: ", payload);
    },
  },
  async created() {
    this.$q.loading.show();
    await this.get_client();
    this.$q.loading.hide();
  },
};
</script>
