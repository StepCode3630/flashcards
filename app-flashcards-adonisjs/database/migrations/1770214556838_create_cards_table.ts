import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cards'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('defenition').notNullable()
      table.text('reponse').notNullable()

      table.timestamp('created_at') //Ces 2 lignes sont optionnels
      table.timestamp('updated_at')

      table
        .integer('decks_id')
        .unsigned()
        .references('id')
        .inTable(`decks`)
        .onDelete(`CASCADE`)
        .onUpdate(`CASCADE`)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
