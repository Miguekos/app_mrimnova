<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="isModalCreate = true"
      titulo="Facturas"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="dataTableInvoice"
      :isActions="true"
      @handleView="openViewModal"
      @handleEdit="openEditModal"
      @handleDelete="submitDeleteInvoice"
    />
    <q-dialog v-model="isModalCreate">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.createInvoice }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <InvoiceForm
            :typeDocuments="typeDocuments"
            :supplierList="getSuppliers"
            :loading="loading"
            @handleSubmit="submitAddInvoice"
            @handleCancel="closeAddModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalEdit">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.editInvoice }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <InvoiceForm
            :typeDocuments="typeDocuments"
            :supplierList="getSuppliers"
            :loading="loading"
            :defaultForm="defaultFormInvoice"
            @handleSubmit="submitEditInvoice"
            @handleCancel="closeEditModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalDetails">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.detailsInvoice }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <InvoiceForm
            :typeDocuments="typeDocuments"
            :supplierList="getSuppliers"
            :loading="loading"
            :readOnly="true"
            :defaultForm="defaultFormInvoice"
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
  headTableFactura,
  typeDocuments,
  titleModals,
  notifyInvoice,
} from "src/enums/factura";
export default {
  name: "InvoicesComponent",
  computed: {
    ...mapGetters("invoice", ["getInvoice"]),
    ...mapGetters("supplier", ["getSuppliers"]),
    dataTableInvoice() {
      if (this.getInvoice.length > 0) {
        const newGetInvoice = this.getInvoice.map((invoice) => {
          const selectDocument = this.typeDocuments.filter(
            (document) => document.value === invoice.type_invoice
          );
          return {
            ...invoice,
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
    TitleGeneric: () => import("src/components/Title.vue"),
    GenericTable: () => import("src/components/Tables/GenericTable"),
    InvoiceForm: () => import("src/components/Forms/InvoiceForm"),
  },
  data() {
    return {
      headTable: headTableFactura,
      isModalCreate: false,
      isModalEdit: false,
      isModalDetails: false,
      defaultFormInvoice: null,
      loading: false,
      titleModals,
      typeDocuments,
    };
  },
  methods: {
    ...mapActions("invoice", [
      "actionGetInvoice",
      "actionCreateInvoice",
      "actionEditInvoice",
      "actionDeleteInvoice",
    ]),
    ...mapActions("supplier", ["actionGetSupplier"]),
    openViewModal(payload) {
      this.isModalDetails = true;
      this.defaultFormInvoice = { ...payload };
    },
    openEditModal(payload) {
      this.isModalEdit = true;
      this.defaultFormInvoice = { ...payload };
    },
    closeAddModal() {
      this.isModalCreate = false;
      this.defaultFormInvoice = null;
    },
    closeViewModal() {
      this.isModalDetails = false;
      this.defaultFormInvoice = null;
    },
    closeEditModal() {
      this.isModalEdit = false;
      this.defaultFormInvoice = null;
    },
    async submitAddInvoice(payload) {
      console.log("Agregando factura: ", payload);
      try {
        this.loading = true;
        await this.actionCreateInvoice(payload);
        this.loading = false;
        this.closeAddModal();
        this.$q.notify(notifyInvoice.successAddInvoice);
        await this.actionGetInvoice();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifyInvoice.errorAddInvoice);
      }
    },
    async submitEditInvoice(payload) {
      console.log("Editando factura: ", payload);
      try {
        this.loading = true;
        await this.actionEditInvoice(payload);
        this.loading = false;
        this.closeEditModal();
        this.$q.notify(notifyInvoice.successEditInvoice);
        await this.actionGetInvoice();
      } catch (error) {
        console.log("error: ", error);
        this.loading = false;
        this.$q.notify(notifyInvoice.errorEditInvoice);
      }
    },
    submitDeleteInvoice(payload) {
      console.log("Eliminando factura: ", payload);
      this.$q
        .dialog({
          title: "Confirmar eliminación",
          message: `Estas seguro que deseas eliminar la factura "${payload.codigo}"`,
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          try {
            this.$q.loading.show();
            await this.actionDeleteInvoice(payload);
            await this.actionGetInvoice();
            this.$q.loading.hide();
          } catch (error) {
            this.$q.loading.hide();
            this.$q.notify(notifyInvoice.errorDeleteInvoice);
          }
        });
    },
  },
  async created() {
    this.$q.loading.show();
    await this.actionGetInvoice();
    await this.actionGetSupplier();
    this.$q.loading.hide();
  },
};
</script>

<style></style>
