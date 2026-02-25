import vine from '@vinejs/vine'

const deckValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    description: vine.string().trim().minLength(10).maxLength(255),
  })
)

export { deckValidator }
