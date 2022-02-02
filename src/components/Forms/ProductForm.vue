<template>
  <div>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <q-form ref="form" @submit="handleSubmit(onSubmit)" class="q-gutter-md">
        <div class="row">
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Nombre del producto"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.name"
                label="Nombre del producto"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Factura relacionada"
              rules="required"
            >
              <q-select
                outlined
                dense
                use-input
                input-debounce="0"
                v-model="form.id_invoice"
                :options="optionsInvoice"
                @filter="filterFn"
                option-value="id"
                option-label="codigo"
                label="Factura relacionada"
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
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Marca"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.marca"
                label="Marca"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Modelo"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.modelo"
                label="Modelo"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Código de artículo"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.code"
                label="Código de artículo"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Fecha y hora de entrega"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.date_of_entry"
                label="Fecha y hora de entrega"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              >
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="form.date_of_entry"
                        mask="YYYY-MM-DD HH:mm"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time
                        v-model="form.date_of_entry"
                        mask="YYYY-MM-DD HH:mm"
                        format24h
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Código interno de producto"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.internal_product_code"
                label="Código interno de producto"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Código de barra"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.bar_code"
                label="Código de barra"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Cantidad"
              rules="required|double"
            >
              <q-input
                outlined
                dense
                v-model="form.quantity"
                label="Cantidad"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Número de serie"
              rules="required"
            >            
              <q-select
                outlined
                dense
                v-model="form.serial_number"
                use-input
                use-chips
                multiple
                hide-dropdown-icon
                input-debounce="0"
                @new-value="createValue"
                label="Número de serie"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Costo de compra"
              rules="required|double"
            >
              <q-input
                outlined
                dense
                v-model="form.purchase_cost"
                label="Costo de compra"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Observaciones"
            >
              <q-input
                outlined
                dense
                v-model="form.obervations"
                label="Observaciones"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Stock mínimo"
              rules="required|double"
            >
              <q-input
                outlined
                dense
                v-model="form.tickets_purchases"
                label="Stock mínimo"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Ventas"
              rules="required|double"
            >
              <q-input
                outlined
                dense
                v-model="form.outflows_sales"
                label="Ventas"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Costo de venta"
              rules="required|double"
            >
              <q-input
                outlined
                dense
                v-model="form.cost"
                label="Costo de venta"
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
            >
              <q-input
                outlined
                dense
                v-model="form.description"
                label="Descripción"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
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
import { productSchema } from "src/mixins/forms/productSchema";
import { required, email, double, length } from "vee-validate/dist/rules";
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
extend("double", {
  ...double,
  message: "El campo {_field_} solo debe contener números",
});
export default {
  name: "ProductForm",
  props: {
    invoiceList: Array,
    defaultForm: Object,
    readOnly: Boolean,
    loading: Boolean,
  },
  mixins: [productSchema],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      optionsInvoice: this.invoiceList,
    };
  },
  methods: {
    onSubmit() {
      this.$emit("handleSubmit", this.form);
    },
    clickCancel() {
      this.$emit("handleCancel");
    },
    createValue(val, done) {
      console.log("val: ", val);
      done(val, "add-unique");
    },
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.optionsInvoice = this.invoiceList;

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.optionsInvoice = this.invoiceList.filter(
          (v) => v.codigo.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
  mounted() {
    if (this.defaultForm) {
      this.form = { ...this.form, ...this.defaultForm };
    }
  },
};
</script>

<style scoped></style>
