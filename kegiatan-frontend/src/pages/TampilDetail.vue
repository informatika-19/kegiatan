<template>
  <div class="q-pa-md">
    <q-table
      title="Detail Kegiatan"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="namaKegiatan" :props="props">
            {{ props.row.namaKegiatan }}
          </q-td>
          <q-td key="deskripsi" :props="props">
            {{ props.row.deskripsi }}
          </q-td>
          <q-td key="waktu" :props="props">
            {{ props.row.waktu }}
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
        {
          name: 'deskripsi',
          label: 'deskripsi Kegiatan',
          field: 'deskripsi',
          align: 'center',
          sortable: true
        },
        {
          name: 'waktu',
          label: 'Waktu Kegiatan',
          field: 'waktu',
          align: 'center',
          sortable: true
        }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      const id = this.$route.params.id
      this.$axios.get(`kegiatan/getbyid/${id}`).then(res => {
        if (res.data.status) {
          this.data.push(res.data.data)
        }
      })
    }
  }
}
</script>
