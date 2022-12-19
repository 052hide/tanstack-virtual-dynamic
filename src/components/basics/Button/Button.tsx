import clsx from 'clsx'
import * as React from 'react'

import type { ButtonProps } from './type'

export const Button = ({
  inputRef,
  children,
  name,
  type,
  disabled = false,
  isBlock = true,
  onClick,
}: ButtonProps) => {
  return (
    <button
      ref={inputRef}
      name={name}
      type={type}
      disabled={disabled}
      className={clsx(
        'tw-h-10',
        'tw-flex tw-items-center tw-justify-center',
        'tw-rounded',
        'tw-text-sm tw-text-white',
        disabled
          ? 'tw-bg-gray-400 focus:tw-bg-gray-400 hover:tw-bg-gray-400'
          : 'tw-bg-indigo-600 focus:tw-bg-indigo-700 hover:tw-bg-indigo-500',
        'tw-transition-all tw-duration-300',
        'focus:tw-outline-none',
        'disabled:tw-cursor-not-allowed',
        isBlock && 'tw-w-full'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
