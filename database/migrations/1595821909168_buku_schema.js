'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BukuSchema extends Schema {
  up() {
    this.create('bukus', (table) => {
      table.increments()
      table.string('nama')
      table.integer('stok')
      table.string('rak')
      table.integer('pinjam_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('bukus')
  }
}

module.exports = BukuSchema
