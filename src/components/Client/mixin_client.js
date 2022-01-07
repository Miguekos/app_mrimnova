const Mixin_client = {
    data() {
        return {
            columns: [
                {
                    name: "name",
                    required: true,
                    label: "Nombre",
                    align: "left",
                    field: (row) => row.name,
                    format: (val) => `${val}`,
                    sortable: true,
                },
                {
                    name: "address",
                    align: "left",
                    label: "Direccion",
                    field: "address",
                    sortable: true,
                },
                {name: "type_document_name", align: "left", label: "Documento", field: (row) => row, format: (val) => `${val.type_document_name} - ${val.document}`, sortable: true},
                {
                    name: "email",
                    align: "left",
                    label: "Email",
                    field: "email",
                    sortable: true,
                },
                {
                    name: "cash_payment",
                    align: 'left',
                    label: "Contado",
                    field: (row) => row.cash_payment,
                    format: (val) => `${val ? 'SI' : 'NO'}`,
                    sortable: true,
                },
                {
                    name: "payment_to_credit",
                    align: 'left',
                    label: "Credito",
                    field: (row) => row.payment_to_credit,
                    format: (val) => `${val ? 'SI' : 'NO'}`,
                    sortable: true,
                },
                {
                    name: "payment_notifications",
                    align: 'left',
                    label: "Notificacion",
                    field: (row) => row.payment_notifications,
                    format: (val) => `${val ? 'SI' : 'NO'}`,
                    sortable: true,
                },
                {
                    name: "accion",
                    align: 'right',
                    label: "Acciones",
                    field: 'accion',
                    sortable: true,
                },
            ],
        }
    }
}

export {Mixin_client};