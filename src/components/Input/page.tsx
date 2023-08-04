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
    <>
      <div className="relative px-3 py-2 border-2 border-gray-600 rounded-lg">
        <label
          className={clsx(
            'absolute  px-1 text-sm font-medium bg-[#dde3e8] left-3 transition-all duration-200',
            isFocused || hasValue
              ? '-top-3 text-gray-500 '
              : 'top-1/2 transform -translate-y-1/2 text-xl text-gray-400'
          )}
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
          value={props.value}
          disabled={props.disabled}
          type={props.type}
          name={props.name}
          className={clsx(
            'w-full my-2 pb-1 bg-[#dde3e8]',
            'focus:ring-none focus:outline-none'
          )}
          required={props.required}
          id={props.id}
        />
      </div>

      {props.error ? <div>Error!</div> : null}
    </>
  )
}
