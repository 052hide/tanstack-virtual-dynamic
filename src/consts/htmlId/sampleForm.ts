const BASE = 'sample-form'

const fieldId = (field: string) => `${BASE}-form-fields-${field}`

export const FIELD = {
  title: fieldId('title'),
} as const
