import type { Control, FieldValues } from 'react-hook-form'

export type BaseFormFieldProps<T extends FieldValues> = {
  control: Control<T>
  errorMessage: string
  disabled?: boolean
}
