import type { QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

export type QueryClientProviderProps = {
  client: QueryClient
  children: ReactNode
}
