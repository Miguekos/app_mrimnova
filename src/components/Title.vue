<template>
  <div>
    <q-list separator>
      <q-item>
        <q-item-section class="text-h5" :class="`text-${color}`">
          <div>
            <q-icon
              :name="`${icon}`"
              :class="`text-${color}`"
              size="sm"
              style="font-size: 24px; margin-bottom: 4px"
            />
            {{ titulo }}
          </div>
        </q-item-section>
        <q-item-section side>
          <q-btn
            color="grey-4"
            :text-color="color"
            unelevated
            icon="add_circle_outline"
            @click="boton"
            label="Agregar"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <q-separator class="q-mb-sm" :color="`${color}`" />
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
    },
    color: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  // name: 'ComponentName',
  data() {
    return {};
  },
  methods: {
    boton() {
      // this.$store.commit(`vehiculos/activarEdit`, true);
      this.$emit("click", 1);
    },
  },
};
</script>
