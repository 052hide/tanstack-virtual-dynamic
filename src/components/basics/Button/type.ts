import type { ReactNode, MutableRefObject } from 'react'

export type ButtonProps = {
  inputRef?: MutableRefObject<HTMLButtonElement>
  children: ReactNode
  name?: string
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
  isBlock?: boolean
  onClick?: () => void
}
