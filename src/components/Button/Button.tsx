'use client'

import clsx from 'clsx'
import { ButtonProps } from '@/types/buttonTypes'
import { styles, sizes } from '@/constants'

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

  const buttonClasses = clsx(
    'transition duration-300 ease-in-out transform rounded-full leading-none font-medium',
    {
      'py-1 px-3 text-xs': size === sizes.small,
      'py-3 px-4 text-base': size === sizes.medium,
      'py-5 px-5 text-lg': size === sizes.large,
      // Style mappings
      'bg-green-600 text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 active:scale-105':
        buttonStyle === styles.filled,
      'bg-red-500 text-white hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white active:bg-red-500 active:scale-105':
        buttonStyle === styles.filledCancel,
      'opacity-50 bg-gray-300 text-gray-500 cursor-default hover:bg-gray-300 active:scale-105':
        buttonStyle === styles.filledDisabledStyle,
      'hover:bg-inherit active:bg-inherit active:scale-100': buttonStyle === styles.text,
      'opacity-50 text-gray-500 cursor-default': buttonStyle === 'textDisabledStyle',
      'border border-green-600 hover:bg-inherit active:bg-[#bbe0a7] text-green-800':
        buttonStyle === styles.outlined,
      'border border-red-600 hover:bg-inherit active:bg-red-300 text-red-800 active:scale-105':
        buttonStyle === styles.outlinedCancel,
      'opacity-50 border border-gray-400 text-gray-500 cursor-default':
        buttonStyle === styles.outlinedDisabledStyle,
      'shadow-md shadow-inner border-b-2 border-gray-400 text-sm font-normal hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white active:bg-[#8fd48c] active:scale-105':
        buttonStyle === styles.elevated,
      'shadow-md shadow-inner border-b-2 border-gray-400 bg-red-500 text-sm text-white font-normal hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white active:bg-red-500 active:scale-105':
        buttonStyle === styles.elevatedCancel,
      'opacity-50 bg-gray-300 text-gray-500 shadow-md shadow-inner border-b-2 border-gray-400 cursor-default ':
        buttonStyle === styles.elevatedDisabledStyle,
    },
    disabled && 'disabledStyle',
    className
  )
  return (
    <button
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
      onKeyDown={handleKeyDown}
      role="button"
      aria-disabled={disabled}
      aria-label={title}
    >
      <div className="flex items-center justify-between gap-5">
        {leftIcon || <div className="flex-shrink-0"></div>}
        {title}
        {rightIcon || <div className="flex-shrink-0"></div>}
      </div>
    </button>
  )
}
