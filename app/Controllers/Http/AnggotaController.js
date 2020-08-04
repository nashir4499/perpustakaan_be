'use strict'
const Anggota = use('App/Models/Anggota')

class AnggotaController {

  async insert({ request, response }) {
    const dataAnggota = request.only(['nama', 'jk', 'ttl', 'alamat', 'no_telpon', 'no_ktp'])
    const anggotaBaru = new Anggota
    anggotaBaru.nama = dataAnggota.nama
    anggotaBaru.jk = dataAnggota.jk
    anggotaBaru.ttl = dataAnggota.ttl
    anggotaBaru.alamat = dataAnggota.alamat
    anggotaBaru.no_telpon = dataAnggota.no_telpon
    anggotaBaru.no_ktp = dataAnggota.no_ktp
    await anggotaBaru.save();

    return response.status(200).json({
      message: 'Data berhasil disimpan'
    })
  }

  async index({ request, response }) {
    const anggota = await Anggota.all()
    return response.status(200).json(anggota)
  }

  async show({ request, response, params }) {
    const anggota = await Anggota.find(request.params.id);
    return response.status(200).json(anggota)
  }

  async update({ request, response, params }) {
    const dataAnggota = request.only(['nama', 'jk', 'ttl', 'alamat', 'no_telpon', 'no_ktp'])
    const anggota = await Anggota.find(request.params.id);
    anggota.nama = dataAnggota.nama
    anggota.jk = dataAnggota.jk
    anggota.ttl = dataAnggota.ttl
    anggota.alamat = dataAnggota.alamat
    anggota.no_telpon = dataAnggota.no_telpon
    anggota.no_ktp = dataAnggota.no_ktp
    await anggota.save();

    return response.status(200).json(anggota)
  }

  async delete({ request, response, params, session }) {
    const anggota = await Anggota.find(request.params.id);
    await anggota.delete();

    return response.status(200).json({
      message: 'Data Berhasil Dihapus'
    })
  }

}

module.exports = AnggotaController
