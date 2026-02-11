import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'decks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nom').notNullable()
      table.text('description').notNullable()

      table.timestamp('created_at') //Ces 2 lignes sont optionnels
      table.timestamp('updated_at')
    })
  }
}
