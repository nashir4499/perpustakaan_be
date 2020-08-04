'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnggotaSchema extends Schema {
  up() {
    this.create('anggotas', (table) => {
      table.increments()
      table.string('nama')
      table.string('jk')
      table.string('ttl')
      table.string('alamat')
      table.integer('no_telpon')
      table.integer('no_ktp')
      table.integer('pinjam_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('anggotas')
  }
}

module.exports = AnggotaSchema
