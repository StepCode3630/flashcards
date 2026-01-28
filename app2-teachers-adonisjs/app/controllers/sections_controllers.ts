import Section from '#models/section'
import Teacher from '#models/teacher'
import { teacherValidator } from '#validators/teacher'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'

export default class SectionsController {
  /**
   * Afficher la liste des enseignants
   */
  async indexv2({ view }: HttpContext) {
    //
    // Récupérer la liste des enseignants triés par ordre alphabétique sur le nom et le prénom
    const sections = await Section.query().orderBy('name', 'asc')
    // Pour obtenir des infos sur la variable teachers
    //dd(sections) //A enlever en commentaire ou remettre

    // Appel de la vue
    return view.render('pages/sections/sections', { sections })
  }

  async destroy({ params, session, response }: HttpContext) {
    //Sélectionne l'enseignant à supprimer
    const section = await Section.findOrFail(params.id)

    //Supprimer l'enseignant
    await section.delete()

    //Affiche un message à l'utilisateur
    session.flash('success', `La section ${section.name}  a été supprimé avec succès !`)

    //redirige l'utilisateur sur la home
    return response.redirect().toRoute('section.index')
  }
}
