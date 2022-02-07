<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="group"
      color="red"
      @click="isModalCreate = true"
      titulo="Proveedores"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="dataTableSupplier"
      :isActions="true"
      @handleView="openViewModal"
      @handleEdit="openEditModal"
      @handleDelete="submitDeleteSupplier"
    />
    <q-dialog v-model="isModalCreate">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.createSupplier }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <SupplierForm
            :typeDocuments="typeDocuments"
            :loading="loading"
            @handleSubmit="submitAddSupplier"
            @handleCancel="closeAddModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalEdit">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.editSupplier }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <SupplierForm
            :typeDocuments="typeDocuments"
            :defaultForm="defaultFormSupplier"
            :loading="loading"
            @handleSubmit="submitEditSupplier"
            @handleCancel="closeEditModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalDetails">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.detailsSupplier }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <SupplierForm
            :readOnly="true"
            :typeDocuments="typeDocuments"
            :defaultForm="defaultFormSupplier"
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
  headTableProveedor,
  titleModals,
  notifySupplier,
} from "src/enums/proveedor";
import { typeDocuments } from "src/enums/shared";

export default {
  name: "SupplierComponent",
  computed: {
    ...mapGetters("supplier", ["getSuppliers"]),
    dataTableSupplier() {
      if (this.getSuppliers.length > 0) {
        const newGetInvoice = this.getSuppliers.map((supplier) => {
          const selectDocument = this.typeDocuments.filter(
            (document) => document.value === supplier.type_document
          );
          return {
            ...supplier,
            label_document: selectDocument[0] ? selectDocument[0].label : null,
          };
        });
        return newGetInvoice;
      } else {
        return [];
      }
    },
  },
  components: {
    TitleGeneric: () => import("src/components/Title"),
    GenericTable: () => import("src/components/Tables/GenericTable"),
    SupplierForm: () => import("src/components/Forms/SupplierForm"),
  },
  data() {
    return {
      isModalCreate: false,
      isModalEdit: false,
      isModalDetails: false,
      headTable: headTableProveedor,
      typeDocuments,
      defaultFormSupplier: null,
      loading: false,
      titleModals,
    };
  },
  methods: {
    ...mapActions("supplier", [
      "actionGetSupplier",
      "actionCreateSupplier",
      "actionEditSupplier",
      "actionDeleteSupplier",
    ]),
    openViewModal(payload) {
      this.isModalDetails = true;
      this.defaultFormSupplier = { ...payload };
    },
    openEditModal(payload) {
      this.isModalEdit = true;
      this.defaultFormSupplier = { ...payload };
    },
    closeAddModal() {
      this.isModalCreate = false;
      this.defaultFormSupplier = null;
    },
    closeViewModal() {
      this.isModalDetails = false;
      this.defaultFormSupplier = null;
    },
    closeEditModal() {
      this.isModalEdit = false;
      this.defaultFormSupplier = null;
    },
    async submitAddSupplier(payload) {
      try {
        this.loading = true;
        await this.actionCreateSupplier(payload);
        this.loading = false;
        this.closeAddModal();
        this.$q.notify(notifySupplier.successAddSupplier);
        await this.actionGetSupplier();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifySupplier.errorAddSupplier);
      }
    },
    async submitEditSupplier(payload) {
      try {
        delete payload.profile;
        this.loading = true;
        await this.actionEditSupplier(payload);
        this.loading = false;
        this.closeEditModal();
        this.$q.notify(notifySupplier.successEditSupplier);
        await this.actionGetSupplier();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifySupplier.errorEditSupplier);
      }
    },
    submitDeleteSupplier(payload) {
      this.$q
        .dialog({
          title: "Confirmar eliminación",
          message: `Estas seguro que deseas eliminar al proveedor "${payload.name}"`,
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          try {
            this.$q.loading.show();
            await this.actionDeleteSupplier(payload);
            await this.actionGetSupplier();
            this.$q.loading.hide();
          } catch (error) {
            this.$q.loading.hide();
            this.$q.notify(notifySupplier.errorDeleteSupplier);
          }
        });
    },
  },
  async created() {
    this.$q.loading.show();
    await this.actionGetSupplier();
    this.$q.loading.hide();
  },
};
</script>
