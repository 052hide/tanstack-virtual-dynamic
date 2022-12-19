import * as z from 'zod'

import { FORM_SCHEMAS } from './const'

export type SampleFormProps = {
  onSubmitSuccess?: () => void
}

export type FormSchemas = z.infer<typeof FORM_SCHEMAS>
