'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosSchema extends Schema {
  up() {
    this.create('produtos', (table) => {
      table.increments()
      table.integer('entrega_id').unsigned().references('id').inTable('entregas')
      table.string('nome', 50).notNullable()
      table.string('valor', 10).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('produtos')
  }
}

module.exports = ProdutosSchema
