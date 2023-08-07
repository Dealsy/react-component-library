'use client'

import clsx from 'clsx'
import { ButtonProps } from '@/types/buttonTypes'

const common = `transition duration-300 
 ease-in-out 
 transform 
 rounded-full 
 text-sm 
 leading-none`

const hoverEffect = `hover:scale-110`

const focusEffect = `focus:scale-110`

export const classNamesMap = {
  filled: `${common}
 ${hoverEffect}
 ${focusEffect}
 bg-green-600 
 text-white 
 hover:bg-green-500
 focus:bg-green-500 
 active:bg-green-600`,

  disabledStyle: `${common}
 opacity-50 
 bg-gray-300 
 text-gray-500 
 cursor-default 
 hover:bg-gray-300`,

  text: `${common}
 ${hoverEffect}
 hover:bg-inherit 
 active:bg-inherit 
 active:scale-100`,

  outlined: `${common}
 ${hoverEffect}
 ${focusEffect}
 border 
 border-green-600 
 hover:bg-inherit 
 active:bg-[#bbe0a7] 
 text-green-800`,

  elevated: `${common}
 ${hoverEffect}
 ${focusEffect}
 shadow-md 
 shadow-inner 
 border-b-2 border-gray-400 
 text-sm font-normal 
 hover:bg-green-600 
 hover:text-white 
 focus:bg-green-600 
 focus:text-white 
 active:bg-[#8fd48c]`,
}

export const sizes = {
  small: 'py-1 px-3 text-xs',
  medium: 'py-3 px-4 text-base',
  large: 'py-5 px-5 text-lg',
}

export const buttonType = {
  submit: 'submit',
  button: 'button',
  reset: 'reset',
}

export function Button({
  title,
  buttonStyle = 'filled',
  buttonType = 'button',
  size = 'medium',
  className,
  disabled,
  leftIcon,
  onClick,
  rightIcon,
}: ButtonProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    // Run onClick function when enter or space is pressed
    if (event.key === 'Enter' || event.key === ' ') {
      onClick && onClick(event as any)
    }
  }
  return (
    <button
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'transition duration-300 ease-in-out transform rounded-full leading-none',
        'font-medium',
        sizes[size],
        classNamesMap[buttonStyle],
        disabled && 'disabledStyle',
        className && className
      )}
      onKeyDown={handleKeyDown}
      role="button"
      aria-disabled={disabled}
      aria-label={title}
    >
      <div className="flex items-center justify-center gap-5">
        {leftIcon ? leftIcon : null}
        {title}
        {rightIcon ? rightIcon : null}
      </div>
    </button>
  )
}
