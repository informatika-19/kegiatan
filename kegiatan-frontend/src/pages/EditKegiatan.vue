<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="form.namaKegiatan"
        label="Nama Kegiatan"
        hint="Nama Kegiatan"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Nama Kegiatan Tidak Bpleh Kosang!'
        ]"
      />
      <q-input
        filled
        v-model="form.deskripsi"
        label="Deskripsi Kegiatan"
        hint="Deskripsi Kegiatan"
        lazy-rules
        :rules="[
          val =>
            (val && val.length > 0) || 'Deskripsi Kegiatan Tidak Bpleh Kosang!'
        ]"
      />

      <q-input
        filled
        v-model="form.waktu"
        label="Waktu Kegiatan"
        hint="Waktu Kegiatan"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Waktu Kegiatan Tidak Bpleh Kosang!'
        ]"
      />

      <div>
        <q-btn label="Update Kegiatan" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        namaKegiatan: null,
        deskripsi: null,
        waktu: null
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get(`kegiatan/getbyid/${this.$route.params.id}`).then(res => {
        if (res.data.status) {
          this.form = res.data.data
        } else {
          this.$showNotif(res.data.pesan, 'negative')
        }
      })
    },
    onSubmit () {
      this.$axios
        .put(`kegiatan/update/${this.$route.params.id}`, this.form)
        .then(res => {
          if (res.data.status) {
            this.$showNotif(res.data.pesan, 'positive')
            this.$router.push({ name: 'tampilKegiatan' })
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>
