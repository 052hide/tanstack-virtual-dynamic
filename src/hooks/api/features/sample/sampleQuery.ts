import { useQuery } from '@tanstack/react-query'

import type { UseGetSampleOptions } from './type'

import { defaultAxiosInstance } from '@/lib/axios/const'
import type { QueryConfig } from '@/lib/reactQuery/type'

import { sampleKeyFactory } from './key'

export const getSample = ({
  params,
}: Parameters<typeof sampleKeyFactory.sample>[0]) => {
  return defaultAxiosInstance().get('/sample', {
    params,
  })
}

export const useGetSample = ({ config, params }: UseGetSampleOptions) => {
  const queryConfig: QueryConfig<typeof getSample> = {
    ...config,
    queryKey: sampleKeyFactory.sample({ params }),
    queryFn: () => getSample({ params }),
  }
  return useQuery(queryConfig)
}
