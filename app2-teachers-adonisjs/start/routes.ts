/*
|--------------------------------------------------------------------------
| Le fichier des routes
|--------------------------------------------------------------------------
|
| Le fichier des routes a pour but de définir toutes les routes HTTP.
|
*/
const TeachersController = () => import('#controllers/teachers_controller')

const SectionsController = () => import('#controllers/sections_controllers')
import router from '@adonisjs/core/services/router'

router.get('/', [TeachersController, 'index']).as('home')

// Route permettant de voir les détails d'un enseignant
router.get('/teacher/:id/show', [TeachersController, 'show']).as('teacher.show')

// Route permettant de supprimer un enseignant
router.delete('/teacher/:id/destroy', [TeachersController, 'destroy']).as('teacher.destroy')

//Route permettant d'afficher le formulaire permettant l'ajout d'un ensaignat
router.get('/teacher/add', [TeachersController, 'create']).as('teacher.create')

// Route permettant l'ajout de l'enseingant
router.post('/teacher/add', [TeachersController, 'store']).as('teacher.store')

// Route permettant de voir la page des sections
router.get('/sections', [SectionsController, 'indexv2']).as('section.index')
