<template>
  <div>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <q-form ref="form" @submit="handleSubmit(onSubmit)" class="q-gutter-md">
        <div class="row">
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Nombre del servicio"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.name"
                label="Nombre del servicio"
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
              rules="required|numeric"
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
              name="Plazo"
              rules="required|numeric"
            >
              <q-input
                outlined
                dense
                v-model="form.term"
                label="Plazo"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Cuota"
              rules="required|numeric"
            >
              <q-input
                outlined
                dense
                v-model="form.quota"
                label="Cuota"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Activo"
              rules="required"
            >
              <q-checkbox
                outlined
                dense
                v-model="form.active"
                label="Activo"
                :disabled="readOnly"
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
import { serviceSchema } from "src/mixins/forms/serviceSchema";
import { required, numeric } from "vee-validate/dist/rules";
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
extend("numeric", {
  ...numeric,
  message: "El campo {_field_} solo debe contener números",
});
export default {
  name: "ServiceForm",
  props: {
    defaultForm: Object,
    readOnly: Boolean,
    loading: Boolean,
  },
  mixins: [serviceSchema],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      this.$emit("handleSubmit", this.form);
    },
    clickCancel() {
      this.$emit("handleCancel");
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
