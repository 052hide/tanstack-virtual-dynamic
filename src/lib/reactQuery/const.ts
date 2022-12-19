import { QueryClient } from '@tanstack/react-query'

import type { DefaultOptions } from '@tanstack/react-query'

const defaultQueryOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    cacheTime: 0,
    networkMode: 'offlineFirst',
  },
  mutations: {
    networkMode: 'offlineFirst',
  },
}

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryOptions,
})
