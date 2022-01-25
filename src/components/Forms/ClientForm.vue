<template>
  <div>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <q-form ref="form" @submit="handleSubmit(onSubmit)" class="q-gutter-md">
        <div class="row">
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Tipo de documento"
              rules="required"
            >
              <q-select
                outlined
                dense
                v-model="form.type_document"
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
              name="Documento"
              :rules="`required|numeric|length:${documentLength}`"
            >
              <q-input
                outlined
                dense
                v-model="form.document"
                label="Documento"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Nombre Completo"
              rules="required"
            >
              <q-input
                outlined
                dense
                v-model="form.name"
                label="Nombre Completo"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
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
                v-model="form.address_main"
                label="Dirección"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Correo"
              rules="required|email"
            >
              <q-input
                outlined
                dense
                v-model="form.email"
                label="Correo"
                :readonly="readOnly"
                :error="invalid && validated"
                :error-message="errors[0]"
              />
            </ValidationProvider>
          </div>
          <div v-if="!readOnly" class="col-xs-12 col-md-6 q-pa-sm">
            <ValidationProvider
              v-slot="{ errors, invalid, validated }"
              name="Perfil"
              rules="required"
            >
              <q-file
                v-model="profile"
                outlined
                dense
                label="Perfil"
                :error="invalid && validated"
                :error-message="errors[0]"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
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
            class="q-ml-sm"
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
import { clientSchema } from "src/mixins/forms/clientSchema";
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
  name: "ClientForm",
  props: {
    typeDocuments: Array,
    defaultForm: Object,
    readOnly: Boolean,
    loading: Boolean,
  },
  mixins: [clientSchema],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    documentLength() {
      if (this.form.type_document) {
        switch (this.form.type_document) {
          case "0":
            return 8;
          case "1":
            return 11;
          default:
            return 0;
        }
      } else {
        return null;
      }
    },
  },
  data() {
    return {
      profile: null,
    };
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
