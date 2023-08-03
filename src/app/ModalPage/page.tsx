'use client'

import { Button } from '@/components'
import { Modal } from '@/components/Modal/Modal'
import { useState } from 'react'

export interface ModalProps {
  isOpen: boolean
  type: 'none' | 'open'
}
export default function ModalPage({}) {
  const [modalOpen, setModalOpen] = useState<ModalProps>({
    isOpen: false,
    type: 'none',
  })

  const close = () => {
    setModalOpen({ isOpen: false, type: 'none' })
  }

  const open = () => {
    setModalOpen({ isOpen: true, type: 'open' })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    console.log({
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
    })
  }

  return (
    <div className="flex items-center justify-center mt-20">
      <Button title="Open Modal" size="large" onClick={open} />
      {modalOpen.type === 'open' && (
        <Modal open={modalOpen.isOpen} close={close} title={'Add Item'}>
          <form className="flex flex-col gap-5" method="dialog" onSubmit={onSubmit}>
            {/* ... other content ... */}
            <input className="border-2 border-gray-400 rounded-full" name="name" />
            <input className="border-2 border-gray-400 rounded-full" name="email" />
            <button>Confirm</button>
          </form>
        </Modal>
      )}
    </div>
  )
}
