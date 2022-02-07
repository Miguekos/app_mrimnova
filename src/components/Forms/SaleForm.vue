<template>
  <div>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <q-form ref="form" @submit="handleSubmit(onSubmit)" class="q-gutter-md">
        <div class="row">
          <div class="col-xs-12 col-md-12 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Tipo de venta"
              rules="required"
            >
              <q-select
                outlined
                dense
                v-model="generalForm.type_sales"
                :options="typeSale"
                option-value="value"
                option-label="label"
                label="Tipo de venta"
                emit-value
                map-options
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Cliente"
              rules="required"
            >
              <q-select
                outlined
                dense
                use-input
                input-debounce="0"
                v-model="generalForm.client"
                :options="optionsClient"
                @filter="filterFnClient"
                option-value="id"
                option-label="name"
                label="Cliente"
                emit-value
                map-options
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No hay resultados
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </ValidationProvider>
          </div>
          <div v-if="false" class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Contrato firmado"
              rules="required"
            >
              <q-file
                v-model="profile"
                outlined
                dense
                label="Contrato firmado"
                :error="invalid && validated"
                :error-message="errors[0]"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Dirección"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="generalForm.address"
                label="Dirección"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <template v-if="generalForm.type_sales == SERVICIOS_GENERALES">
            <div class="col-xs-12 col-md-12 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Materiales"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model="generalServiceForm.materials"
                  label="Materiales"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Costo"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model="generalServiceForm.cost"
                  label="Costo"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Cotización"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model="generalServiceForm.quote"
                  label="Cotización"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Detalle"
                rules="required"
              >
                <q-input
                  type="textarea"
                  outlined
                  dense
                  v-model="generalServiceForm.details"
                  label="Detalle"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Descripción"
                rules="required"
              >
                <q-input
                  type="textarea"
                  outlined
                  dense
                  v-model="generalServiceForm.descriptions"
                  label="Descripción"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
          </template>
          <template v-if="generalForm.type_sales == PRODUCTOS_SERVICIOS">
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Productos"
                rules="required"
              >
                <q-select
                  outlined
                  dense
                  v-model="productServiceForm.products"
                  :options="listProducts"
                  option-value="id"
                  option-label="name"
                  label="Productos"
                  map-options
                  use-chips
                  multiple
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                  @input="chooseProducts"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No hay resultados
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Tipo pago producto"
                rules="required"
              >
                <q-select
                  outlined
                  dense
                  v-model="productServiceForm.type_method_products"
                  :options="paymentType"
                  option-value="value"
                  option-label="label"
                  label="Tipo pago producto"
                  emit-value
                  map-options
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Cuota inicial productos"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model="productServiceForm.down_payment_producto_cre"
                  label="Cuota inicial productos"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Cant. Cuotas productos"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model="productServiceForm.quotas_producto_cre"
                  label="Cant. Cuotas productos"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Servicios"
                rules="required"
              >
                <q-select
                  outlined
                  dense
                  v-model="productServiceForm.services"
                  :options="listServices"
                  option-value="id"
                  option-label="name"
                  label="Servicios"
                  map-options
                  use-chips
                  multiple
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No hay resultados
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Tipo pago servicio"
                rules="required"
              >
                <q-select
                  outlined
                  dense
                  v-model="productServiceForm.type_method_services"
                  :options="paymentType"
                  option-value="value"
                  option-label="label"
                  label="Tipo pago servicio"
                  emit-value
                  map-options
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Cuota inicial servicio"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model="productServiceForm.down_payment_servicios_cre"
                  label="Cuota inicial servicio"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Cant. Cuotas servicio"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model="productServiceForm.quotas_servicios_cre"
                  label="Cant. Cuotas servicio"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Bills receivable"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model="productServiceForm.bills_receivable"
                  label="Bills receivable"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                name="Notificaciones de pago"
                rules="required"
              >
                <q-checkbox
                  outlined
                  dense
                  v-model="productServiceForm.payment_notifications"
                  label="Notificaciones de pago"
                  :disabled="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
          </template>
          <template v-if="generalForm.type_sales == PRODUCTOS_SERVICIOS">
            <q-card-section class="col-xs-12 col-md-12 q-pa-sm">
              <div class="text-h7">Cantidad de productos</div>
            </q-card-section>
            <div
              class="col-xs-12 col-md-6 q-pa-sm"
              v-for="product in productServiceForm.products"
              :key="`p-${product.id}`"
            >
              <ValidationProvider
                v-slot="{ errors, invalid, validated }"
                :name="product.name"
                rules="required"
              >
                <q-input
                  outlined
                  dense
                  v-model.number="
                    listCantProducts[`producto${product.id}`].cant
                  "
                  :label="product.name"
                  type="number"
                  :readonly="readOnly"
                  :error="invalid && validated"
                  :error-message="errors[0]"
                />
              </ValidationProvider>
            </div>
          </template>
        </div>
        <q-separator />
        <div align="right">
          <q-btn
            label="Cancelar"
            color="red"
            flat
            @click="clickCancel"
            class="q-ml-sm q-mr-md"
          />
          <q-btn
            v-if="!readOnly"
            label="Guardar"
            type="submit"
            color="primary"
            :loading="loading"
          />
        </div>
      </q-form>
    </ValidationObserver>
  </div>
</template>

<script>
import { saleSchema } from "src/mixins/forms/saleSchema";
import { SERVICIOS_GENERALES, PRODUCTOS_SERVICIOS } from "src/enums/venta";
import { required, email, numeric, length } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");
extend("required", {
  ...required,
  message: "El campo {_field_} es obligatorio",
});
extend("email", {
  ...email,
  message: "El correo no es válido",
});
extend("numeric", {
  ...numeric,
  message: "El campo {_field_} solo debe contener números",
});
extend("length", {
  ...length,
  message: "El campo {_field_} debe contener {length} caracteres",
});
export default {
  name: "SaleForm",
  props: {
    typeSale: Array,
    listClients: Array,
    listProducts: Array,
    listServices: Array,
    paymentType: Array,
    defaultForm: Object,
    readOnly: Boolean,
    loading: Boolean,
  },
  mixins: [saleSchema],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      optionsClient: this.listClients,
      profile: null,
      SERVICIOS_GENERALES,
      PRODUCTOS_SERVICIOS,
      listCantProducts: {},
    };
  },
  methods: {
    chooseProducts() {
      this.productServiceForm.products.forEach(
        (item) =>
          (this.listCantProducts = {
            ...this.listCantProducts,
            [`producto${item.id}`]: { cant: 0, id_pro: item.id },
          })
      );
    },
    onSubmit() {
      if (this.generalForm.type_sales == this.SERVICIOS_GENERALES) {
        this.$emit("handleSubmit", {
          ...this.generalForm,
          ...this.generalServiceForm,
          products: [],
          type_method_products: null,
          down_payment_producto_cre: null,
          quotas_producto_cre: null,
          services: [],
          type_method_services: null,
          down_payment_servicios_cre: null,
          quotas_servicios_cre: null,
          bills_receivable: null,
          payment_notifications: false,
        });
      } else if (this.generalForm.type_sales == this.PRODUCTOS_SERVICIOS) {
        const newArrayProducts = Object.keys(this.listCantProducts).map(
          (product) => {
            return {
              id_pro: this.listCantProducts[product].id_pro,
              cant: this.listCantProducts[product].cant,
            };
          }
        );
        this.$emit("handleSubmit", {
          ...this.generalForm,
          ...this.productServiceForm,
          products: newArrayProducts,
          services: [],
          details: "",
          details: null,
          descriptions: null,
          materials: null,
          cost: null,
          quote: null,
        });
      } else {
        this.$emit("handleSubmit", {});
      }
    },
    clickCancel() {
      this.$emit("handleCancel");
    },
    filterFnClient(val, update) {
      if (val === "") {
        update(() => {
          this.optionsClient = this.listClients;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.optionsClient = this.listClients.filter(
          (v) => v.name.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
  mounted() {
    if (this.defaultForm) {
      Object.keys(this.generalForm).forEach(
        (key) => (this.generalForm[key] = this.defaultForm[key])
      );
      Object.keys(this.generalServiceForm).forEach(
        (key) => (this.generalServiceForm[key] = this.defaultForm[key])
      );
      Object.keys(this.productServiceForm).forEach(
        (key) => (this.productServiceForm[key] = this.defaultForm[key])
      );

      this.defaultForm.products.forEach(
        (item) =>
          (this.listCantProducts = {
            ...this.listCantProducts,
            [`producto${item.id}`]: { id_pro: item.id, cant: item.quantity },
          })
      );
    }
  },
};
</script>

<style scoped></style>
