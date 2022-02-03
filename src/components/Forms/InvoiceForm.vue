<template>
  <div>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <q-form ref="form" @submit="handleSubmit(onSubmit)" class="q-gutter-md">
        <div class="row">
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Proveedor"
              rules="required"
            >
              <q-select
                outlined
                dense
                use-input
                input-debounce="0"
                v-model="form.proveedor"
                :options="optionsSupplier"
                @filter="filterFn"
                option-value="id"
                option-label="name"
                label="Proveedor"
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
              name="Tipo de documento"
              rules="required"
            >
              <q-select
                outlined
                dense
                v-model="form.type_invoice"
                :options="typeDocuments"
                option-value="value"
                option-label="label"
                label="Tipo de documento"
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
              name="Código"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.codigo"
                label="Código"
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
import { invoiceSchema } from "src/mixins/forms/invoiceSchema";
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
  name: "InvoiceForm",
  props: {
    typeDocuments: Array,
    supplierList: Array,
    defaultForm: Object,
    readOnly: Boolean,
    loading: Boolean,
  },
  mixins: [invoiceSchema],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      optionsSupplier: this.supplierList,
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
      done(val, "add-unique");
    },
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.optionsSupplier = this.supplierList;

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.optionsSupplier = this.supplierList.filter(
          (v) => v.name.toLowerCase().indexOf(needle) > -1
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
