import { useMutation } from '@tanstack/react-query'

import type { PostSampleRequestBody, UsePostSampleOptions } from './type'

import { defaultAxiosInstance } from '@/lib/axios/const'

export const postSample = ({
  requestBody,
}: {
  requestBody: PostSampleRequestBody
}) => {
  return defaultAxiosInstance().post('/sample', requestBody)
}

export const usePostSample = ({ config }: UsePostSampleOptions) => {
  return useMutation({
    ...config,
    mutationFn: postSample,
  })
}
