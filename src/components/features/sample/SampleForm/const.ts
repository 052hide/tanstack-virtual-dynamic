import * as z from 'zod'

import { MESSAGES } from '@/consts'

export const FORM_FIELD_LABEL = {
  title: 'タイトル',
} as const

export const FORM_SCHEMAS = z.object({
  title: z.string({
    required_error: MESSAGES.VALIDATION.REQUIRED(FORM_FIELD_LABEL.title),
  }),
})
