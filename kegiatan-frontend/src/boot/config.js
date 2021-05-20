import Vue from 'vue'
import { Notify } from 'quasar'

Vue.prototype.$showNotif = (pesan, warna) => {
  Notify.create({
    message: pesan,
    color: warna,
    timeout: 2000,
    actions: [{ icon: 'close', color: 'white' }]
  })
}
