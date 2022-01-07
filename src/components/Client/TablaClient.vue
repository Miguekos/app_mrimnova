<template>
  <div>
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      :pagination="initialPagination"
      virtual-scroll
      class="my-sticky-header-table-v2"
      dense
      :data="info"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-accion="props">
        <q-td :props="props">
          <div class="q-gutter-xs">
            <q-btn round size="xs" color="orange" icon="edit" />
            <q-btn
              round
              size="xs"
              color="red"
              glossy
              text-color="white"
              icon="delete"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            <b style="font-size: 14px">{{ titulos(col.label) }}</b>
          </q-th>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { MixinDefault } from "src/mixins/mixin.js";
import { Mixin_client } from "./mixin_client";

export default {
  props: {
    info: {
      type: Array,
    },
  },
  mixins: [MixinDefault, Mixin_client],
  name: "TablaClient",
  computed: {
    dataTable() {
      let data = [];
      console.log("this.info.length", this.info.length);
      for (let index = 0; index < this.info.length; index++) {
        const element = this.info[index];
        console.log("element", element);
        data.push({
          ...this.ObjKeyRename(element, this.labels),
          acciones: "",
        });
      }
      console.log("-------->", data);
      return data;
    },
  },
  data() {
    return {
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 1000,
        // rowsNumber: xx if getting data from a server
      },
    };
  },
  methods: {
    titulos(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
  },
};
</script>

<style scoped></style>
