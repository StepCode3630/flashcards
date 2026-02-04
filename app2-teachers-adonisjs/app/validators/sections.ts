// import Section from '#models/section'
import vine from '@vinejs/vine'
// import { triggerAsyncId } from 'async_hooks'
// import { fileURLToPath } from 'url'

export const sectionValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2),
  })
)
