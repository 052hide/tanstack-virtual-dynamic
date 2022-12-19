import { QueryClientProvider as Provider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import type { QueryClientProviderProps } from './type'

export const QueryClientProvider = ({
  client,
  children,
}: QueryClientProviderProps) => {
  return (
    <Provider client={client}>
      {children}
      {process.env.NEXT_IS_TEST !== 'true' && <ReactQueryDevtools />}
    </Provider>
  )
}
