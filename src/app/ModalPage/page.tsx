'use client'

import { Button } from '@/components'
import { Modal } from '@/components/Modal/Modal'
import { ChangeEvent, useState } from 'react'

export interface ModalProps {
  isOpen: boolean
  type: 'none' | 'open'
}

export default function ModalPage({}) {
  const [form, setForm] = useState({ name: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState<ModalProps>({
    isOpen: false,
    type: 'none',
  })

  // Handle name change
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({ ...prevState, name: e.target.value }))
  }

  // Handle email change
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({ ...prevState, email: e.target.value }))
  }

  const handleSubmit = () => {
    console.log(form)
    // You can replace this with your actual form submission logic.
    // Mock submission
    setLoading(true)
    fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(form),
    })
      .then(() => {
        setLoading(false)
        close()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const close = () => {
    setModalOpen({ isOpen: false, type: 'none' })
  }

  const open = () => {
    setModalOpen({ isOpen: true, type: 'open' })
  }

  return (
    <div className="flex items-center justify-center mt-20">
      <Button title="Open Modal" size="large" onClick={open} />
      {modalOpen.type === 'open' && (
        <Modal
          open={modalOpen.isOpen}
          close={close}
          title={'Add Item'}
          handleSubmit={handleSubmit}
          hasCancel
          hasConfirm
          confirmButtonStyle="bg-green-500 hover:bg-green-600"
          confirmText={loading ? 'Sending...' : 'Submit'}
        >
          <form className="flex flex-col gap-5" method="dialog">
            <label className="flex flex-col">
              Name:
              <input
                onChange={handleNameChange}
                className="p-2 border-b-2 border-gray-400"
                placeholder="Type your name here"
                name="name"
              />
            </label>
            <label className="flex flex-col">
              {' '}
              Email:
              <input
                onChange={handleEmailChange}
                className="p-2 border-b-2 border-gray-400"
                placeholder="Enter your email"
                name="email"
              />
            </label>
            <label className="flex flex-col">
              Name:
              <input
                onChange={handleNameChange}
                className="p-2 border-b-2 border-gray-400"
                placeholder="Type your name here"
                name="name"
              />
            </label>
          </form>
        </Modal>
      )}
    </div>
  )
}
