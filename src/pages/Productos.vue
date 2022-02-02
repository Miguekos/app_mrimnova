<template>
  <div class="q-pa-sm">
    <TitleGeneric
      icon="face"
      color="green"
      @click="isModalCreate = true"
      titulo="Productos"
    />
    <GenericTable
      :headTable="headTable"
      :dataTable="getProducts"
      :isActions="true"
      @handleView="openViewModal"
      @handleEdit="openEditModal"
      @handleDelete="submitDeleteProduct"
    />
    <q-dialog v-model="isModalCreate">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.createProduct }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ProductForm
            :invoiceList="getInvoice"
            :loading="loading"
            @handleSubmit="submitAddProduct"
            @handleCancel="closeAddModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalEdit">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.editProduct }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ProductForm
            :invoiceList="getInvoice"
            :defaultForm="defaultFormProduct"
            :loading="loading"
            @handleSubmit="submitEditProduct"
            @handleCancel="closeEditModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isModalDetails">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ titleModals.detailsProduct }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 70vh" class="scroll">
          <ProductForm
            :readOnly="true"
            :invoiceList="getInvoice"
            :defaultForm="defaultFormProduct"
            @handleCancel="closeViewModal"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { headTableProducto, titleModals, notifyProducts } from "src/enums/producto";
export default {
  name: "ProductComponent",
  components: {
    TitleGeneric: () => import("src/components/Title.vue"),
    GenericTable: () => import("src/components/Tables/GenericTable"),
    ProductForm: () => import("src/components/Forms/ProductForm"),
  },
  computed: {
    ...mapGetters("product", ["getProducts"]),
    ...mapGetters("invoice", ["getInvoice"]),
  },
  data() {
    return {
      headTable: headTableProducto,
      isModalCreate: false,
      isModalEdit: false,
      isModalDetails: false,
      defaultFormProduct: null,
      loading: false,
      titleModals,
    };
  },
  methods: {
    ...mapActions("product", [
      "actionGetProduct",
      "actionCreateProduct",
      "actionEditProduct",
      "actionDeleteProduct",
    ]),
    ...mapActions("invoice", ["actionGetInvoice"]),
    openViewModal(payload) {
      this.isModalDetails = true;
      this.defaultFormProduct = { ...payload };
    },
    openEditModal(payload) {
      this.isModalEdit = true;
      this.defaultFormProduct = { ...payload };
    },
    closeAddModal() {
      this.isModalCreate = false;
      this.defaultFormProduct = null;
    },
    closeViewModal() {
      this.isModalDetails = false;
      this.defaultFormProduct = null;
    },
    closeEditModal() {
      this.isModalEdit = false;
      this.defaultFormProduct = null;
    },
    async submitAddProduct(payload) {
      try {
        this.loading = true;
        await this.actionCreateProduct(payload);
        this.loading = false;
        this.closeAddModal();
        this.$q.notify(notifyProducts.successAddProduct);
        await this.actionGetProduct();
      } catch (error) {
        this.loading = false;
        this.$q.notify(notifyProducts.errorAddProduct);
      }
    },
    async submitEditProduct(payload) {
       try {
        this.loading = true;
        await this.actionEditProduct(payload);
        this.loading = false;
        this.closeEditModal();
        this.$q.notify(notifyProducts.successEditProduct);
        await this.actionGetProduct();
      } catch (error) {
        console.log("error: ", error);
        this.loading = false;
        this.$q.notify(notifyProducts.errorEditProduct);
      }
    },
    submitDeleteProduct(payload) {
      this.$q
        .dialog({
          title: "Confirmar eliminación",
          message: `Estas seguro que deseas eliminar el producto "${payload.name}"`,
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          try {
            this.$q.loading.show();
            await this.actionDeleteProduct(payload);
            await this.actionGetProduct();
            this.$q.loading.hide();
          } catch (error) {
            this.$q.loading.hide();
            this.$q.notify(notifyProducts.errorDeleteProduct);
          }
        });
    },
  },
  mounted() {
    this.headTable = headTableProducto;
  },
  async created() {
    this.$q.loading.show();
    await this.actionGetProduct();
    await this.actionGetInvoice();
    this.$q.loading.hide();
  },
};
</script>

<style></style>
