<template>
  <div>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="row">
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-select
            outlined
            dense
            v-model="form.documentType"
            :options="typeDocuments"
            label="Tipo de documento"
            :readonly="readOnly"
          />
        </div>
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-input
            outlined
            dense
            v-model="form.document"
            label="Documento *"
            lazy-rules
            :readonly="readOnly"
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-input
            outlined
            dense
            v-model="form.name"
            label="Nombre Completo"
            :readonly="readOnly"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-input
            outlined
            dense
            v-model="form.address"
            label="Dirección *"
            :readonly="readOnly"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-input
            outlined
            dense
            v-model="form.email"
            label="Correo"
            :readonly="readOnly"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div v-if="!readOnly" class="col-xs-12 col-md-6 q-pa-sm">
          <q-file v-model="form.perfil" outlined dense label="Perfil">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
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
        <q-btn v-if="!readOnly" label="Guardar" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "ClientForm",
  props: {
    typeDocuments: Array,
    defaultForm: Object,
    readOnly: Boolean,
  },
  data() {
    return {
      form: {
        name: "Miguel C",
        address: "Los Olivos",
        email: "miguekos1233@gmail.com",
        documentType: {
          label: "DNI",
          value: 0,
        },
        document: "001811529",
        perfil: null,
      },
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
