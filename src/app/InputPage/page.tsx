'use client'

import { Button } from '@/components'
import { Input } from '@/components/Input/page'
import { useState } from 'react'

export default function InputPage() {
  const [name, setName] = useState('')

  // a function for the onChange event and value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 m-auto mt-20">
      <div className="flex flex-col gap-5 leading-none">
        <Input label="Name" id={'name'} onChange={handleInputChange} value={name} />
      </div>
    </div>
  )
}
