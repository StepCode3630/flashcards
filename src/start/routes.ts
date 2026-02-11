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
