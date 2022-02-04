<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="isModalCreate = true"
      titulo="Servicios"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="getServices"
      :isActions="true"
      @handleView="openViewModal"
      @handleEdit="openEditModal"
      @handleDelete="submitDeleteService"
    />
    <q-dialog v-model="isModalCreate">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.createService }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ServiceForm
            :loading="loading"
            @handleSubmit="submitAddService"
            @handleCancel="closeAddModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalEdit">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.editService }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ServiceForm
            :defaultForm="defaultFormService"
            :loading="loading"
            @handleSubmit="submitEditService"
            @handleCancel="closeEditModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalDetails">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.detailsService }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ServiceForm
            :readOnly="true"
            :defaultForm="defaultFormService"
            :loading="loading"
            @handleSubmit="submitDeleteService"
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
  headTableServicio,
  titleModals,
  notifyService,
} from "src/enums/servicio";
export default {
  name: "ServiceComponent",
  computed: {
    ...mapGetters("service", ["getServices"]),
  },
  components: {
    TitleGeneric: () => import("src/components/Title.vue"),
    GenericTable: () => import("src/components/Tables/GenericTable"),
    ServiceForm: () => import("src/components/Forms/ServiceForm"),
  },
  data() {
    return {
      headTable: headTableServicio,
      isModalCreate: false,
      isModalEdit: false,
      isModalDetails: false,
      defaultFormService: null,
      loading: false,
      titleModals,
    };
  },
  methods: {
    ...mapActions("service", [
      "actionGetService",
      "actionCreateService",
      "actionEditService",
      "actionDeleteService",
    ]),
    openViewModal(payload) {
      this.isModalDetails = true;
      this.defaultFormService = { ...payload };
    },
    openEditModal(payload) {
      this.isModalEdit = true;
      this.defaultFormService = { ...payload };
    },
    closeAddModal() {
      this.isModalCreate = false;
      this.defaultFormService = null;
    },
    closeViewModal() {
      this.isModalDetails = false;
      this.defaultFormService = null;
    },
    closeEditModal() {
      this.isModalEdit = false;
      this.defaultFormService = null;
    },
    async submitAddService(payload) {
      try {
        this.loading = true;
        await this.actionCreateService(payload);
        this.loading = false;
        this.closeAddModal();
        this.$q.notify(notifyService.successAddService);
        await this.actionGetService();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifyService.errorAddService);
      }
    },
    async submitEditService(payload) {
      try {
        delete payload.profile;
        this.loading = true;
        await this.actionEditService(payload);
        this.loading = false;
        this.closeEditModal();
        this.$q.notify(notifyService.successEditService);
        await this.actionGetService();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifyService.errorEditService);
      }
    },
    submitDeleteService(payload) {
      this.$q
        .dialog({
          title: "Confirmar eliminación",
          message: `Estas seguro que deseas eliminar el servicio"${payload.name}"`,
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          try {
            this.$q.loading.show();
            await this.actionDeleteService(payload);
            await this.actionGetService();
            this.$q.loading.hide();
          } catch (error) {
            this.$q.loading.hide();
            this.$q.notify(notifyService.errorDeleteService);
          }
        });
    },
  },
  async created() {
    this.$q.loading.show();
    await this.actionGetService();
    this.$q.loading.hide();
  },
};
</script>

<style></style>
