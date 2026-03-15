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
    const decks = await Deck.query()
      .withCount('cards')
      .orderBy('created_at', 'desc')
      .orderBy('name', 'asc')

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
  async edit({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    return view.render('pages/decks/edit.edge', { title: 'Modifier un deck', deck })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, session, response }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    const { name, description } = await request.validateUsing(deckValidator)
    deck.merge({ name, description })
    await deck.save()
    session.flash('success', `Deck ${deck.name} modifié avec succès`)
    return response.redirect().toRoute('deck.show', { id: deck.id })
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    await deck.delete()
    session.flash('success', `Deck ${deck.name} supprimé avec succès`)
    return response.redirect().toRoute('home')
  }

  /**
   * Study a deck
   */
  async study({ params, view }: HttpContext) {
    const deck = await Deck.query().where('id', params.id).preload('cards').firstOrFail()
    return view.render('pages/decks/study.edge', { title: `Étudier le deck ${deck.name}`, deck })
  }

  async studyFirst({ params, request, response, view }: HttpContext) {
    const mode = request.input('mode', 'basique')
    const index = Number(request.input('index', 0))
    const deck = await Deck.query()
      .where('id', params.id)
      .preload('cards', (query) => query.orderBy('id', 'asc'))
      .firstOrFail()

    if (!deck.cards || deck.cards.length === 0) {
      return response.redirect().toRoute('deck.show', { id: deck.id })
    }

    const totalCards = deck.cards.length
    if (index >= totalCards) {
      return view.render('pages/decks/studyFinal.edge', {
        title: `Étude terminée : ${deck.name}`,
        deck,
        totalCards,
      })
    }

    const card = deck.cards[index]
    const nextIndex = index + 1

    return view.render('pages/decks/studyQuestion.edge', {
      title: `Étude : ${deck.name} (carte ${index + 1}/${totalCards})`,
      deck,
      card,
      mode,
      index,
      nextIndex,
      totalCards,
    })
  }
}
