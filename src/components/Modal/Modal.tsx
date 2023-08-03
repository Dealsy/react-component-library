'use client'

import { ModalProps } from '@/types/modalTypes'
import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export function Modal({ open, close, children, title }: ModalProps) {
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
      className="fixed inset-0 z-40 flex items-center justify-center transition-opacity duration-1000 ease-in-out bg-black bg-opacity-40"
    >
      <dialog
        className={clsx(
          'fixed inset-0 z-50 flex flex-col rounded-lg',
          'transition-all duration-1000 ease-in-out transform'
        )}
        onClick={(event) => event.stopPropagation()}
        open={open}
      >
        <div className="flex justify-between px-5 py-2 border-b border-gray-400">
          <h1 className="text-2xl font-medium">{title} </h1>
          <button onClick={close}>
            <XMarkIcon height={20} width={20} />{' '}
          </button>
        </div>

        <div className="p-5">{children}</div>
      </dialog>
    </div>
  )
}
