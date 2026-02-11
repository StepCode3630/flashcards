import factory from '@adonisjs/lucid/factories'
import Card from '#models/card'
import Deck from '#models/deck'
import { DeckFactory } from './deck_factory.js'

export const CardFactory = factory
  .define(Card, async ({ faker }) => {
    return {
      question: faker.lorem.sentence(),
      answer: faker.lorem.sentence(),
    }
  })
  .relation('deck', () => DeckFactory)
  .build()
