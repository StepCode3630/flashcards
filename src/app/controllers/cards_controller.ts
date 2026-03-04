import Card from '#models/card'
import Deck from '#models/deck'
import { cardValidator } from '#validators/card'
import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const cards = await Card.query().orderBy('created_at', 'desc').orderBy('name', 'asc')

    return view.render('pages/home', { cards })
  }

  /**
   * Display form to create a new record
   */
  async create({ view, params }: HttpContext) {
    const deck = await Deck.findOrFail(params.deckId)

    return view.render('pages/cards/newcard', {
      title: 'Créer une carte',
      deck,
    })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {
    const { question, answer, deckId } = await request.validateUsing(cardValidator)
    const card = await Card.create({ question, answer, deckId })

    session.flash('success', `Carte ${card.question} créée avec succès`)
    return response.redirect().toRoute('deck.show', { id: deckId })
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const card = await Card.findOrFail(params.id)
    return view.render('pages/cards/showcard.edge', { title: "Détails d'une carte", card })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  //async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
