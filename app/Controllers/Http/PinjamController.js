'use strict'

const Pinjam = use('App/Models/Pinjam')

class PinjamController {
  async store({ request, response }) {
    const dataPinjam = request.only(['tgl_pinjam', 'tgl_kembali'/*, 'kembali'*/, 'buku_id', 'anggota_id'])
    const pinjamBaru = new Pinjam
    pinjamBaru.tgl_pinjam = dataPinjam.tgl_pinjam
    pinjamBaru.tgl_kembali = dataPinjam.tgl_kembali
    // pinjamBaru.kembali = dataPinjam.kembali
    pinjamBaru.buku_id = dataPinjam.buku_id
    pinjamBaru.anggota_id = dataPinjam.anggota_id
    await pinjamBaru.save()

    return response.status(200).json({
      message: 'Data berhasil disimpan'
    })

  }

  // ori dari aa
  async index({ request, response }) {
    // const pinjam = await Pinjam.all()
    const pinjam = await Pinjam.query().with('buku').with('anggota').fetch()
    return response.status(200).json(pinjam)
  }

  async show({ request, response, params }) {
    const pinjam = await Pinjam.find(request.params.id);
    return response.status(200).json(pinjam)
  }

  async update({ request, response, params }) {
    const dataPinjam = request.only(['tgl_pinjam', 'tgl_kembali', 'kembali'])
    const pinjam = await Pinjam.find(request.params.id);
    pinjam.tgl_pinjam = dataPinjam.tgl_pinjam
    pinjam.tgl_kembali = dataPinjam.tgl_kembali
    pinjam.kembali = dataPinjam.kembali
    await pinjam.save();

    return response.status(200).json(pinjam)
  }

  async delete({ request, response, params, session }) {
    const pinjam = await Pinjam.find(request.params.id);
    await pinjam.delete();

    return response.status(200).json({
      message: 'Data berhasil dihapus'
    })

  }

  async pinjamAnggota({ request, response, params, session }) {
    // const buku_id = await Pinjam.query().with('buku').fetch()
    const pinjam = await Pinjam.query().with('anggota').fetch()
    // const pinjam = await Pinjam.all()
    // const buku = await pinjam.Bukus.fetch();
    return response.status(200).json(pinjam)
  }
  async cobapilih({ request, response, params, session }) {
    // const buku_id = await Pinjam.findBy('buku_id', request.params.id)
    const buku_id = await Pinjam.query().where('buku_id', request.params.id).select('buku_id').first()
    // const pinjam = await Pinjam.all()
    // const buku = await pinjam.Bukus.fetch();
    return response.status(200).json(buku_id)
  }

}

module.exports = PinjamController
