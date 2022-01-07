<template>
  <div>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="row">
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.name"
            label="Nombre Completo"
            hint="Nombre Completo"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.type_document"
            label="Tipo de documento *"
            hint="Tipo de documento *"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.document"
            label="Documento *"
            hint="Documento *"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.address"
            label="Dirección *"
            hint="Dirección *"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.email"
            label="Correo"
            hint="Correo"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.cash_payment"
            label="Pago efectivo"
            hint="Pago efectivo"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.payment_to_credit"
            label="pago a credito"
            hint="Name and surname"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.bills_receivable"
            label="Letras"
            hint="Name and surname"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
        <div class="col-xs-12 col-md-4 q-pa-sm">
          <q-input
            filled
            v-model="form.payment_notifications"
            label="Activar notificacion"
            hint="Name and surname"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obligatorio']"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-select
            filled
            v-model="model"
            use-input
            use-chips
            multiple
            input-debounce="0"
            @new-value="createValue"
            :options="filterOptions"
            @filter="filterFn"
          />
        </div>

        <div class="col-xs-12 col-md-6 q-pa-sm">
          <q-select
            filled
            v-model="model"
            use-input
            use-chips
            multiple
            input-debounce="0"
            @new-value="createValue"
            :options="filterOptions"
            @filter="filterFn"
          />
        </div>
      </div>

      <q-separator />

      <div align="right">
        <q-btn
          label="Cancelar"
          color="red"
          flat
          @click="$emit('click')"
          class="q-ml-sm"
        />
        <q-btn label="Guardar" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
export default {
  name: "CreateClient",
  data() {
    return {
      model: null,
      filterOptions: stringOptions,
      form: {
        products: ["1"],
        type_method_products: "1",
        services: ["1"],
        type_method_services: "1",
        name: "Miguel C",
        address: "Los Olivos",
        email: "miguekos1233@gmail.com",
        type_document: "0",
        document: "001811529",
        cash_payment: false,
        payment_to_credit: false,
        bills_receivable: 0,
        payment_notifications: false,
        date_received: null,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
    createValue(val, done) {
      // Calling done(var) when new-value-mode is not set or "add", or done(var, "add") adds "var" content to the model
      // and it resets the input textbox to empty string
      // ----
      // Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
      // only if is not already set
      // and it resets the input textbox to empty string
      // ----
      // Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
      // (adds to model if not already in the model, removes from model if already has it)
      // and it resets the input textbox to empty string
      // ----
      // If "var" content is undefined/null, then it doesn't tampers with the model
      // and only resets the input textbox to empty string

      if (val.length > 0) {
        if (!stringOptions.includes(val)) {
          stringOptions.push(val);
        }
        done(val, "toggle");
      }
    },

    filterFn(val, update) {
      update(() => {
        if (val === "") {
          this.filterOptions = stringOptions;
        } else {
          const needle = val.toLowerCase();
          this.filterOptions = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    },
  },
};
</script>

<style scoped></style>
