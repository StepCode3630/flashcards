import vine from '@vinejs/vine'

const cardValidator = vine.compile(
  vine.object({
    question: vine.string().trim().minLength(10),
    answer: vine.string().trim(),
    deckId: vine.number(),
  })
)

export { cardValidator }
