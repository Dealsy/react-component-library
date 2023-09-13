'use client'

import { FloatingInput } from '@/components/FloatingInput/page'
import { useState } from 'react'

export default function InputPage() {
  const [name, setName] = useState('')
  const [test, setTest] = useState('')
  const [error, setError] = useState('')

  // a function for the onChange event and value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (e.target.value === '') {
      setError('Name is required')
    } else {
      setError('')
    }
  }

  // a function for the onChange event and value
  const handleInputTestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTest(e.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 m-auto mt-20">
      <div className="flex flex-col gap-5 leading-none">
        <FloatingInput
          error={error}
          label="Name"
          id={'name'}
          onChange={handleInputChange}
          value={name}
        />
        <FloatingInput
          label="Test"
          id={'test'}
          onChange={handleInputTestChange}
          value={test}
        />
      </div>
    </div>
  )
}
