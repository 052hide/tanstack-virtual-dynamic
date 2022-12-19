import type { AppProviderProps } from './type'

import { queryClient } from '@/lib/reactQuery/const'

import { QueryClientProvider } from './QueryClientProvider'

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
