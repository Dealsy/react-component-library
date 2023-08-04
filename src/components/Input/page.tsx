import { InputProps } from '@/types/inputTypes'
import clsx from 'clsx'

export function Input(props: InputProps) {
  return (
    <>
      <div className="flex flex-col items-start gap-1">
        <label className="ml-2 text-sm font-medium" htmlFor={props.id}>
          {props.label}
        </label>
        <input
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className={clsx(
            'px-4 py-2 rounded-lg',
            'placeholder-gray-400',
            'focus:ring-violet-400 focus:ring-4 focus:outline-none'
          )}
          required={props.required}
          id={props.id}
        />
      </div>

      {props.error ? <div>Error!</div> : null}
    </>
  )
}
