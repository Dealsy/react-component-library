import { Input } from '@/components/Input/page'
import clsx from 'clsx'

export default function InputPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 m-auto mt-20">
      <div className="flex flex-col leading-none">
        <Input label="Name" placeholder="Type your name here" />
      </div>
    </div>
  )
}
