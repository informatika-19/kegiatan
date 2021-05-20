<template>
  <div class="q-pa-md">
    <q-table
      title="List Kegiatan"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="namaKegiatan" :props="props">
            {{ props.row.namaKegiatan }}
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                label="Detail"
                icon="list"
                color="primary"
                :to="{
                  name: 'tampilDetail',
                  params: {
                    id: props.row._id
                  }
                }"
                unelevated
              />
              <q-btn
                label="Edit"
                icon="edit"
                color="secondary"
                :to="{ name: 'editKegiatan', params: { id: props.row._id } }"
                unelevated
              />
              <q-btn
                @click="onDelete(props.row._id)"
                label="Delete"
                icon="delete"
                color="red"
                unelevated
              />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'namaKegiatan',
          label: 'Nama Kegiatan',
          field: 'namaKegiatan',
          align: 'center',
          sortable: true
        },
        { name: 'aksi', label: 'Aksi', field: 'aksi', align: 'center' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('kegiatan/getall').then(res => {
        if (res.data.status) {
          this.data = res.data.data
        }
      })
    },
    onDelete (id) {
      this.$q
        .dialog({
          title: 'konfirmasi',
          message: 'apa anda yakin ingin menghapus data?',
          cancel: true,
          presistent: true
        })
        .onOk(() => {
          this.$axios.delete(`kegiatan/delete/${id}`).then(res => {
            if (res.data.status) {
              this.$showNotif(res.data.pesan, 'positive')
              this.getData()
            } else {
              this.$showNotif(res.data.pesan, 'negative')
            }
          })
        })
    }
  }
}
</script>
