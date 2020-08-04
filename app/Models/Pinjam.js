'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pinjam extends Model {
  buku() {
    return this.belongsTo('App/Models/Buku')
  }

  anggota() {
    return this.belongsTo('App/Models/Anggota')
  }
}

module.exports = Pinjam
