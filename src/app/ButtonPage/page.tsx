import { Button } from '@/components'
import { PlusCircleIcon } from '@heroicons/react/20/solid'

export default function ButtonPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 m-auto mt-20">
      <div className="flex flex-col gap-2">
        <Button title="Default" buttonType="submit" />
        <Button buttonStyle="elevated" title="Elevated" />
        <Button buttonStyle="outlined" title="Outlined" />
        <Button buttonStyle="text" title="Text" />
        <Button buttonStyle="filled" title="Filled" />
        <Button
          buttonStyle="elevated"
          title="    Left Icon"
          leftIcon={<PlusCircleIcon width={30} height={30} className="text-green-500" />}
        />
        <Button
          buttonStyle="elevated"
          title="Right Icon"
          rightIcon={<PlusCircleIcon width={30} height={30} className="text-green-500" />}
        />

        <Button title="Disabled" disabled buttonStyle="disabledStyle" />
        <Button buttonStyle="elevated" title="Large" size="large" />
        <Button buttonStyle="filled" title="Medium" size="medium" />
        <Button buttonStyle="outlined" title="Small" size="small" />
      </div>
    </div>
  )
}
