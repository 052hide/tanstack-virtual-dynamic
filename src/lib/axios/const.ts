import axios from 'axios'

export const DEFAULT_API_URL = process.env.NEXT_PUBLIC_DEFAULT_API_URL || ''

const instance = axios.create({
  baseURL: DEFAULT_API_URL,
  headers: {
    Accept: 'application/json',
  },
})

export const defaultAxiosInstance = (token?: string) => {
  instance.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : undefined
  return instance
}
