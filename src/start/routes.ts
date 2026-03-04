/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const DecksController = () => import('#controllers/decks_controller')
const CardsController = () => import('#controllers/cards_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [DecksController, 'index']).as('home')
router.get('/cards', [CardsController, 'index']).as('cards')

router.get('/deck/create', [DecksController, 'create']).as('deck.create')
router.post('/deck/create', [DecksController, 'store']).as('decks.store')

router.get('/deck/:id/show', [DecksController, 'show']).as('deck.show')

router.get('/deck/:id/edit', [DecksController, 'edit']).as('deck.edit')

//router.put('/decks/:id', [DecksController, 'update']).as('decks.update')

router.delete('/deck/:id/destroy', [DecksController, 'destroy']).as('deck.destroy')
