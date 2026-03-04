import Deck from '#models/deck'
import type { HttpContext } from '@adonisjs/core/http'
import { deckValidator } from '#validators/deck'
// import { title } from 'process'
// import { title } from 'process'o

export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    //Affiche tous les decks
    const decks = await Deck.query().orderBy('created_at', 'desc').orderBy('name', 'asc')

    return view.render('pages/home', { decks })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    const decks = await Deck.query().orderBy('created_at', 'desc').orderBy('name', 'asc')

    return view.render('pages/decks/create', { title: 'Créer un deck', decks })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {
    const { name, description } = await request.validateUsing(deckValidator)

    const deck = await Deck.create({ name, description })

    session.flash('success', `Deck ${deck.name} créé avec succès`)

    return response.redirect().toRoute('home')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const deck = await Deck.query().where('id', params.id).preload('cards').firstOrFail()
    // const nbcards = deck.cards.length
    return view.render('pages/decks/show.edge', { title: "Détails d'un deck", deck })
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
