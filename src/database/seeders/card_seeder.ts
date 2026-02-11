import Card from '#models/card'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Card.createMany([
      {
        question: 'Question 1',
        answer: 'Answer 1',
        decks_id: 1,
      },
      {
        question: 'Question 2',
        answer: 'Answer 2',
        decks_id: 1,
      },
      {
        question: 'Question 3',
        answer: 'Answer 3',
        decks_id: 2,
      },
    ])
  }
}
