import { Controller } from 'react-hook-form'

import type { FormFieldTitleProps } from './type'

import { HTML_ID } from '@/consts'

import { FORM_FIELD_LABEL } from '../../const'

export const FormFieldTitle = ({
  control,
  errorMessage,
  disabled,
}: FormFieldTitleProps) => {
  return (
    <div>
      <p>{FORM_FIELD_LABEL.title}</p>
      <Controller
        name={'title'}
        control={control}
        render={({ field: { value, onChange } }) => (
          <input
            id={HTML_ID.sampleForm.FIELD.title}
            type={'text'}
            name={'title'}
            disabled={disabled}
            value={value}
            onChange={onChange}
          />
        )}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}
