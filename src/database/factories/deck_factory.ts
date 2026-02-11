import factory from '@adonisjs/lucid/factories'
import Deck from '#models/deck'

export const DeckFactory = factory
  .define(Deck, async ({ faker }) => {
    const name = faker.lorem.words(3)
    const description = faker.lorem.sentence()
    return {
      name,
      description,
    }
  })
  .build()
