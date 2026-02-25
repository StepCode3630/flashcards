import Deck from '#models/deck'
import { DeckFactory } from '#database/factories/deck_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Deck.createMany([
      {
        name: 'Deck 1',
        description: 'Description du deck 1',
      },
      {
        name: 'Deck 2',
        description: 'Description du deck 2',
      },
      {
        name: 'Deck 3',
        description: 'Description du deck 3',
      },
    ])
    await DeckFactory.createMany(10)
  }
}
