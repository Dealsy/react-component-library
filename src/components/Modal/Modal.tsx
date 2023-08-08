'use client'

import { ModalProps } from '@/types/modalTypes'
import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Button } from '..'
import { useEffect, useRef, useState } from 'react'

export function Modal({
  open,
  close,
  children,
  title,
  handleSubmit,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  hasCancel,
  hasConfirm,
  footerStyles,
  cancelButtonStyle,
  confirmButtonStyle,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const [isVisible, setIsVisible] = useState(open)
  const [opacityClass, setOpacityClass] = useState(open ? 'opacity-0' : 'opacity-100')

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        close()
      }
    }

    // Attach the event listener to the document when the modal is open
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Cleanup: Remove the event listener when the modal is closed or when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, close])

  useEffect(() => {
    if (open) {
      setIsVisible(true)
      setTimeout(() => {
        setOpacityClass('opacity-100')
      }, 10) // short delay to ensure the modal has been added to the DOM
    } else {
      setOpacityClass('opacity-0')
      setTimeout(() => {
        setIsVisible(false)
      }, 1000) // match this with your transition duration
    }
  }, [open])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={clsx(
        'fixed inset-0 z-40 flex items-center justify-center',
        opacityClass,
        'transition-opacity duration-1000 ease-in-out bg-gray-900 bg-opacity-40'
      )}
    >
      <dialog
        ref={modalRef}
        className={clsx(
          'fixed inset-0 z-50 flex flex-col rounded-3xl w-[32rem] ', // Added max-h-[80vh] here
          'transition-all duration-1000 ease-in-out transform shadow-2xl ' // Added overflow-y-auto here
        )}
        open={open}
      >
        <div className="flex justify-between px-5 py-2 border-b-2 border-gray-400">
          <h1 className="p-2 text-3xl font-semibold">{title}</h1>
          <button onClick={close}>
            <XMarkIcon
              height={20}
              width={20}
              className="duration-300 ease-in transform hover:scale-125 "
            />{' '}
          </button>
        </div>

        <div className="p-10 max-h-[60vh] overflow-y-auto">{children}</div>

        <footer
          className={clsx(
            footerStyles
              ? footerStyles
              : 'flex flex-row justify-between p-5 border-t-2 border-gray-400'
          )}
        >
          {hasCancel ? (
            <Button
              title={cancelText}
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
              title={confirmText}
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
