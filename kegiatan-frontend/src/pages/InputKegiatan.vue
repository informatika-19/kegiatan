<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="namaKegiatan"
        label="Nama Kegiatan"
        hint="Nama Kegiatan"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Nama Kegiatan Tidak Bpleh Kosang!'
        ]"
      />
      <q-input
        filled
        v-model="deskripsi"
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
        v-model="waktu"
        label="Waktu Kegiatan"
        hint="Waktu Kegiatan"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Waktu Kegiatan Tidak Bpleh Kosang!'
        ]"
      />

      <div>
        <q-btn label="Simpan Kegiatan" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      namaKegiatan: null,
      deskripsi: null,
      waktu: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios
        .post('kegiatan/insert', {
          namaKegiatan: this.namaKegiatan,
          deskripsi: this.deskripsi,
          waktu: this.waktu
        })
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
