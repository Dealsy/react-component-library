'use client'

import { InputProps } from '@/types/inputTypes'
import clsx from 'clsx'
import { useState } from 'react'

export function Input(props: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e)
    }
    setHasValue(e.target.value !== '')
  }

  return (
    <div className={clsx(props.disabled ? 'opacity-40' : 'flex flex-col')}>
      <div
        className={clsx(
          props.error ? 'border-red-600' : 'border-gray-600',
          props.labelContainerStyle,
          'relative px-3 py-2 border-2  rounded-lg'
        )}
      >
        <label
          className={clsx(
            props.error ? 'text-red-600' : 'text-gray-600',
            props.labelStyle ? props.labelStyle : 'bg-[#dde3e8]',
            'absolute px-1 py-0.5 text-sm font-medium  left-3 transition-all duration-200 z-10',
            isFocused || hasValue
              ? ['-top-3 text-gray-500']
              : ['top-1/2 transform -translate-y-1/2 text-xl']
          )}
          htmlFor={props.id}
        >
          {props.label}
        </label>

        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          role="input"
          aria-label={props.label}
          onChange={handleInputChange}
          value={props.value}
          disabled={props.disabled}
          type={props.type}
          name={props.name}
          className={clsx(
            props.inputStyle ? props.inputStyle : 'bg-[#dde3e8]',
            'w-full my-2 pb-1',
            'focus:ring-none focus:outline-none'
          )}
          required={props.required}
          id={props.id}
        />
      </div>

      {props.error ? (
        <div
          className={clsx(
            props.errorStyle ? props.errorStyle : 'text-red-600 text-sm',
            'p-2 rounded-lg'
          )}
        >
          {props.error}
        </div>
      ) : null}
    </div>
  )
}
