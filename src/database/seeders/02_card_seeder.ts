import Card from '#models/card'
import { CardFactory } from '#database/factories/card_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Card.createMany([
      {
        question: 'Question 1',
        answer: 'Answer 1',
        deckId: 1,
      },
      {
        question: 'Question 2',
        answer: 'Answer 2',
        deckId: 1,
      },
      {
        question: 'Question 3',
        answer: 'Answer 3',
        deckId: 2,
      },
      {
        question: 'Question 4',
        answer: 'Answer 4',
        deckId: 2,
      },
      {
        question: 'Question 5',
        answer: 'Answer 5',
        deckId: 3,
      },
    ])
    await CardFactory.createMany(20)
  }
}
