const kegiatanModel = require('../model/kegiatan')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
  new Promise((resolve, reject) => {
    //fungsi untuk menyimpan kegiatan yang di imput
    kegiatanModel.create(data)
      .then(() => resolve({
        status: true,
        pesan: 'Berhasil Input Kegiatan'
      })).catch(() => ({
        status: false,
        pesan: 'Gagal Input Kegiatan'
      }))
  })

exports.showAllData = () =>
  new Promise((resolve, reject) => {
    kegiatanModel.find()
      .then(result => {
        resolve({
          status: true,
          pesan: 'Berhasil Menampilkan Data!',
          data: result
        })
      }).catch(() => reject({
        status: false,
        pesan: 'Gagal Menampilkan Data!',
        data: []
      }))
  })

exports.showbyID = (id) =>
  new Promise((resolve, reject) => {
    kegiatanModel.findOne({
      _id: objectid(id)
    })
      .then(result => {
        resolve({
          status: true,
          pesan: 'Berhasil Menampilkan Data!',
          data: result
        })
      })
      .catch(() => reject({
        status: false,
        pesan: 'Gagal Menampilkan Data!',
        data: null
      }))
  })

exports.update = (id, data) =>
  new Promise((resolve, reject) => {
    kegiatanModel.updateOne({
      _id: objectid(id)
    }, data).then(() => resolve({
      status: true,
      pesan: 'berhasil update data',
    })).catch(() => reject({
      status: false,
      pesan: 'gagal update data',
    }))
  })

exports.delete = (id) =>
  new Promise((resolve, reject) => {
    kegiatanModel.deleteOne({
      _id: objectid(id)
    }).then(() => resolve({
      status: true,
      pesan: 'berhasil Hapus data',
    })).catch(() => reject({
      status: false,
      pesan: 'gagal hapus data',
    }))
  })
