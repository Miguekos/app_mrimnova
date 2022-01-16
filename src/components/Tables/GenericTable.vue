<template>
  <div>
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      virtual-scroll
      class="my-sticky-header-table-v2"
      dense
      row-key="name"
      :data="dataTable"
      :columns="columnTable"
      :pagination="initialPagination"
    >
      <template v-if="isActions" v-slot:body-cell-accion="props">
        <q-td :props="props">
          <div class="q-gutter-xs">
            <q-btn
              round
              size="xs"
              color="orange"
              icon="edit"
              @click="clickEdit(props.row)"
            />
            <q-btn
              round
              size="xs"
              color="red"
              glossy
              text-color="white"
              icon="delete"
              @click="clickDelete(props.row)"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            <b style="font-size: 14px">{{ col.label }}</b>
          </q-th>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  props: {
    headTable: Array,
    dataTable: Array,
    isActions: Boolean,
  },
  data() {
    return {
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 20,
      },
      columnTable: [],
    };
  },
  methods: {
    clickEdit(payload) {
      this.$emit("handleEdit", payload);
    },
    clickDelete(payload) {
      this.$emit("handleDelete", payload);
    },
  },
  mounted() {
    this.columnTable = this.headTable.map((rowMap) => {
      return {
        name: rowMap.name,
        required: true,
        label: rowMap.label,
        align: rowMap.align || "left",
        field: rowMap.name,
        format: rowMap.format || ((val) => `${val}`),
        sortable: true,
      };
    });
  },
};
</script>

<style></style>
