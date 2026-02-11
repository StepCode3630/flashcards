import Deck from '#models/deck'
import type { HttpContext } from '@adonisjs/core/http'

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
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

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
