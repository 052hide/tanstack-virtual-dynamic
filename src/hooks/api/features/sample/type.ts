import type { MutationConfig, QueryConfig } from '@/lib/reactQuery/type'

import { postSample } from './sampleMutation'
import { getSample } from './sampleQuery'

export type GetSampleParams = {
  sampleParam: string
}

export type PostSampleRequestBody = {
  sampleParam: string
}

export type UseGetSampleOptions = {
  config?: QueryConfig<typeof getSample>
  params: GetSampleParams
}

export type UsePostSampleOptions = {
  config?: MutationConfig<typeof postSample>
}
