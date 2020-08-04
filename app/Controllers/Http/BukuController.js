'use strict'
const Buku = use('App/Models/Buku')

class BukuController {


  async store({ request, response }) {
    const dataBuku = request.only(['nama', 'stok', 'rak'])
    const bukuBaru = new Buku
    bukuBaru.nama = dataBuku.nama
    bukuBaru.stok = dataBuku.stok
    bukuBaru.rak = dataBuku.rak
    await bukuBaru.save()

    return response.status(200).json({
      message: 'Data berhasil disimpan'
    })

  }

  // ori dari aa
  async index({ request, response }) {
    // const buku = await Buku.all()
    // Dibawah adalah contoh dari a yuli jadi pake relation
    const buku = await Buku.query().with('pinjam').fetch()
    return response.status(200).json(buku)
  }

  async show({ request, response, params }) {
    const buku = await Buku.find(request.params.id);
    return response.status(200).json(buku)
  }

  async update({ request, response, params }) {
    const dataBuku = request.only(['nama', 'stok', 'rak'])
    const buku = await Buku.find(request.params.id);
    buku.nama = dataBuku.nama;
    buku.stok = dataBuku.stok;
    buku.rak = dataBuku.rak;
    await buku.save();

    return response.status(200).json(buku)
  }

  async delete({ request, response, params, session }) {
    const buku = await Buku.find(request.params.id);
    await buku.delete();

    return response.status(200).json({
      message: 'Data berhasil dihapus'
    })

  }

}

module.exports = BukuController
