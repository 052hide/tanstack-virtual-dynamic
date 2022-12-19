import type { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

export type QueryConfig<FetcherFnType extends (...args: any) => any> =
  UseQueryOptions<Awaited<ReturnType<FetcherFnType>>, AxiosError>

export type MutationConfig<FetcherFnType extends (...args: any) => any> =
  UseMutationOptions<
    Awaited<ReturnType<FetcherFnType>>,
    AxiosError,
    Parameters<FetcherFnType>[0]
  >
