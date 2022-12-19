import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'

import type { FormSchemas, SampleFormProps } from './type'
import type { SubmitHandler } from 'react-hook-form'

import { Button } from '@/components/basics'

import { FORM_SCHEMAS } from './const'
import { FormFieldTitle } from './formFields'

export const SampleForm = ({ onSubmitSuccess }: SampleFormProps) => {
  const { control, formState, handleSubmit } = useForm<FormSchemas>({
    resolver: zodResolver(FORM_SCHEMAS),
  })

  const submitHandler: SubmitHandler<FormSchemas> = (form) => {
    console.log({
      form,
    })
    onSubmitSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <FormFieldTitle
        control={control}
        errorMessage={formState.errors['title']?.message || ''}
      />

      <div className={clsx('tw-mt-4')}>
        <Button type={'submit'}>送信する</Button>
      </div>
    </form>
  )
}
