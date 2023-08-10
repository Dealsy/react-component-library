'use client'

import { CancelType, ConfirmType, ModalOptions, ModalProps } from '@/types/modalTypes'
import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Button } from '..'
import { useEffect, useRef, useState } from 'react'
import { AllOrNothing } from '@/types/helpers'

export function Modal<T extends ModalOptions>(props: ModalProps<T>) {
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const [isVisible, setIsVisible] = useState(props.open)
  const [opacityClass, setOpacityClass] = useState(
    props.open ? 'opacity-0' : 'opacity-100'
  )

  const { open, close } = props

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
    if (props.open) {
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
  }, [props.open])

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
          'fixed inset-0 z-50 flex flex-col rounded-3xl w-[32rem]',
          'transition-all duration-1000 ease-in-out transform shadow-2xl'
        )}
        open={props.open}
      >
        <div className="flex justify-between px-5 py-2 border-b-2 border-gray-400">
          <h1 className="p-2 text-3xl font-semibold">{props.title}</h1>
          <button onClick={props.close}>
            <XMarkIcon
              height={20}
              width={20}
              className="duration-300 ease-in transform hover:scale-125 "
            />{' '}
          </button>
        </div>

        <div className="p-10 max-h-[60vh] overflow-y-auto">{props.children}</div>

        <footer
          className={clsx(
            props.footerStyles
              ? props.footerStyles
              : 'flex flex-row justify-between p-5 border-t-2 border-gray-400'
          )}
        >
          {props.hasCancelButton ? (
            <Button
              title={(props as AllOrNothing<CancelType>).cancelText as string}
              buttonStyle="text"
              onClick={props.close}
              size="medium"
              className={clsx(
                (props as AllOrNothing<CancelType>).cancelButtonStyle
                  ? (props as AllOrNothing<CancelType>).cancelButtonStyle
                  : 'hover:text-white hover:bg-red-600 active:bg-red-500 focus:bg-red-500'
              )}
            />
          ) : null}

          {props.hasConfirmButton ? (
            <Button
              title={(props as AllOrNothing<ConfirmType>).confirmText as string}
              onClick={props.handleSubmit}
              size="medium"
              className={clsx(
                (props as AllOrNothing<ConfirmType>).confirmButtonStyle
                  ? (props as AllOrNothing<ConfirmType>).confirmButtonStyle
                  : 'bg-sky-700 hover:bg-sky-600 active:bg-sky-700 focus:bg-sky-700 '
              )}
            />
          ) : null}
        </footer>
      </dialog>
    </div>
  )
}
