'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PinjamsSchema extends Schema {
  up() {
    this.create('pinjams', (table) => {
      table.increments()
      table.date('tgl_pinjam')
      table.date('tgl_kembali')
      table.integer('kembali', 1)
      table.integer('buku_id')
      table.integer('anggota_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('pinjams')
  }
}

module.exports = PinjamsSchema
