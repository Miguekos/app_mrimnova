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
          <div class="text-h6">{{ titleModals.createClient }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ClientForm
            :typeDocuments="typeDocuments"
            :loading="loading"
            @handleSubmit="submitAddClient"
            @handleCancel="closeAddModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalEdit">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.editClient }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ClientForm
            :typeDocuments="typeDocuments"
            :defaultForm="defaultFormClient"
            :loading="loading"
            @handleSubmit="submitEditClient"
            @handleCancel="closeEditModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalDetails">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.detailsClient }}</div>
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
import {
  headTableCliente,
  typeDocuments,
  titleModals,
  notifyClients,
} from "src/enums/cliente";

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
      titleModals,
    };
  },
  methods: {
    ...mapActions("client", [
      "actionGetClient",
      "actionCreateClient",
      "actionEditClient",
      "actionDeleteClient",
    ]),
    openViewModal(payload) {
      this.isModalDetails = true;
      this.defaultFormClient = { ...payload };
    },
    openEditModal(payload) {
      this.isModalEdit = true;
      this.defaultFormClient = { ...payload };
    },
    closeAddModal() {
      this.isModalCreate = false;
      this.defaultFormClient = null;
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
        await this.actionCreateClient(payload);
        this.loading = false;
        this.closeAddModal();
        this.$q.notify(notifyClients.successAddClient);
        await this.actionGetClient();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifyClients.errorAddClient);
      }
    },
    async submitEditClient(payload) {
      try {
        delete payload.profile;
        this.loading = true;
        await this.actionEditClient(payload);
        this.loading = false;
        this.closeEditModal();
        this.$q.notify(notifyClients.successEditClient);
        await this.actionGetClient();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifyClients.errorEditClient);
      }
    },
    submitDeleteClient(payload) {
      this.$q
        .dialog({
          title: "Confirmar eliminación",
          message: `Estas seguro que deseas eliminar a "${payload.name}"`,
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          try {
            this.$q.loading.show();
            await this.actionDeleteClient(payload);
            await this.actionGetClient();
            this.$q.loading.hide();
          } catch (error) {
            this.$q.loading.hide();
            this.$q.notify(notifyClients.errorDeleteClient);
          }
        });
    },
  },
  async created() {
    this.$q.loading.show();
    await this.actionGetClient();
    this.$q.loading.hide();
  },
};
</script>
