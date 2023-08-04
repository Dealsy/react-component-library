'use client'

import { ModalProps } from '@/types/modalTypes'
import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Button } from '..'

export function Modal({
  open,
  close,
  children,
  title,
  handleSubmit,
  cancelText,
  confirmText,
  hasCancel,
  hasConfirm,
  footerStyles,
  cancelButtonStyle,
  confirmButtonStyle,
}: ModalProps) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (open) {
      setOpacity(1)
    } else {
      setOpacity(0)
    }
  }, [open])

  if (!open && opacity === 0) {
    return null
  }

  return (
    <div
      style={{ opacity }}
      onClick={close}
      className={clsx(
        'fixed inset-0 z-40 flex items-center justify-center',
        'transition-opacity duration-1000 ease-in-out bg-gray-900 bg-opacity-40'
      )}
    >
      <dialog
        className={clsx(
          'fixed inset-0 z-50 flex flex-col rounded-3xl w-[32rem]',
          'transition-all duration-1000 ease-in-out transform shadow-2xl'
        )}
        onClick={(event) => event.stopPropagation()}
        open={open}
      >
        <div className="flex justify-between px-5 py-2 border-b-2 border-gray-400">
          <h1 className="p-2 text-3xl font-semibold">{title} </h1>
          <button onClick={close}>
            <XMarkIcon
              height={20}
              width={20}
              className="duration-300 ease-in transform hover:scale-125 "
            />{' '}
          </button>
        </div>

        <div className="p-10">{children}</div>

        <footer
          className={clsx(
            footerStyles
              ? footerStyles
              : 'flex flex-row justify-between p-5 border-t-2 border-gray-400'
          )}
        >
          {hasCancel ? (
            <Button
              title={cancelText ? cancelText : 'Cancel'}
              buttonStyle="text"
              onClick={close}
              size="medium"
              className={clsx(
                'hover:text-white hover:bg-red-600 active:bg-red-500 focus:bg-red-500',
                cancelButtonStyle
              )}
            />
          ) : null}

          {hasConfirm ? (
            <Button
              title={confirmText ? confirmText : 'Confirm'}
              onClick={handleSubmit}
              size="medium"
              className={clsx(
                'bg-sky-700 hover:bg-sky-600 active:bg-sky-700 focus:bg-sky-700 ',
                confirmButtonStyle
              )}
            />
          ) : null}
        </footer>
      </dialog>
    </div>
  )
}
