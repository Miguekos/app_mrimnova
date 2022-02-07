<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="isModalCreate = true"
      titulo="Ventas"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="getSales"
      :isActions="true"
      :notEdit="true"
      @handleView="openViewModal"
      @handleEdit="openEditModal"
      @handleDelete="submitDeleteSale"
    />
    <q-dialog v-model="isModalCreate">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.createSale }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <SaleForm
            :listClients="getClients"
            :listProducts="getProducts"
            :listServices="getServices"
            :typeSale="typeSale"
            :paymentType="paymentType"
            :loading="loading"
            @handleSubmit="submitAddSale"
            @handleCancel="closeAddModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalEdit">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.editSale }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <SaleForm
            :listClients="getClients"
            :listProducts="getProducts"
            :listServices="getServices"
            :typeSale="typeSale"
            :paymentType="paymentType"
            :defaultForm="defaultFormSale"
            :loading="loading"
            @handleSubmit="submitEditSale"
            @handleCancel="closeEditModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalDetails">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.detailsSale }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <SaleForm
            :readOnly="true"
            :listClients="getClients"
            :listProducts="getProducts"
            :listServices="getServices"
            :typeSale="typeSale"
            :paymentType="paymentType"
            :defaultForm="defaultFormSale"
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
  headTableVenta,
  titleModals,
  notifySales,
  typeSale,
  paymentType,
} from "src/enums/venta";
export default {
  name: "SalesComponent",
  computed: {
    ...mapGetters("sale", ["getSales"]),
    ...mapGetters("client", ["getClients"]),
    ...mapGetters("product", ["getProducts"]),
    ...mapGetters("service", ["getServices"]),
  },
  components: {
    TitleGeneric: () => import("src/components/Title.vue"),
    GenericTable: () => import("src/components/Tables/GenericTable"),
    SaleForm: () => import("src/components/Forms/SaleForm"),
  },
  data() {
    return {
      isModalCreate: false,
      isModalEdit: false,
      isModalDetails: false,
      headTable: headTableVenta,
      defaultFormSale: null,
      loading: false,
      titleModals,
      typeSale,
      paymentType,
    };
  },
  methods: {
    ...mapActions("sale", [
      "actionGetSales",
      "actionCreateSale",
      "actionEditSale",
      "actionDeleteSale",
    ]),
    ...mapActions("client", ["actionGetClient"]),
    ...mapActions("product", ["actionGetProduct"]),
    ...mapActions("service", ["actionGetService"]),
    openViewModal(payload) {
      this.isModalDetails = true;
      this.defaultFormSale = { ...payload };
    },
    openEditModal(payload) {
      this.isModalEdit = true;
      this.defaultFormSale = { ...payload };
    },
    closeAddModal() {
      this.isModalCreate = false;
      this.defaultFormSale = null;
    },
    closeViewModal() {
      this.isModalDetails = false;
      this.defaultFormSale = null;
    },
    closeEditModal() {
      this.isModalEdit = false;
      this.defaultFormSale = null;
    },
    async submitAddSale(payload) {
      try {
        delete payload.contracts;
        this.loading = true;
        await this.actionCreateSale(payload);
        this.loading = false;
        this.closeAddModal();
        this.$q.notify(notifySales.successAddSale);
        await this.actionGetSales();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifySales.errorAddSale);
      }
    },
    async submitEditSale(payload) {
      try {
        delete payload.contracts;
        this.loading = true;
        await this.actionEditSale(payload);
        this.loading = false;
        this.closeEditModal();
        this.$q.notify(notifySales.successEditSale);
        await this.actionGetSales();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifySales.errorEditSale);
      }
    },
    submitDeleteSale(payload) {
      this.$q
        .dialog({
          title: "Confirmar eliminación",
          message: `Estas seguro que deseas eliminar la venta "${payload.type_sales_name} - ${payload.client.name} - Documento: ${payload.client.document}"`,
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          try {
            this.$q.loading.show();
            await this.actionDeleteSale(payload);
            await this.actionGetSales();
            this.$q.loading.hide();
          } catch (error) {
            this.$q.loading.hide();
            this.$q.notify(notifySales.errorDeleteSale);
          }
        });
    },
  },
  async created() {
    this.$q.loading.show();
    await this.actionGetSales();
    await this.actionGetClient();
    await this.actionGetProduct();
    await this.actionGetService();
    this.$q.loading.hide();
  },
};
</script>

<style></style>
