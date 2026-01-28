// import Section from '#models/section'
import vine from '@vinejs/vine'
// import { triggerAsyncId } from 'async_hooks'
// import { fileURLToPath } from 'url'

export const teacherValidator = vine.compile(
  vine.object({
    //Utilisation d'un enum pour le genre
    gender: vine.enum(['woman', 'man', 'other'] as const),

    firstname: vine.string().trim().minLength(2),
    lastname: vine.string().trim().minLength(2),
    nickname: vine.string().trim().minLength(2),
    origine: vine.string().trim().minLength(2),

    //S'assurer que c'est un nombre entier positif
    sectionId: vine.number().positive(),
  })
)
