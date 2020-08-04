'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Buku extends Model {
  pinjam() {
    return this.hasMany('App/Models/Pinjam')
  }
}

module.exports = Buku
