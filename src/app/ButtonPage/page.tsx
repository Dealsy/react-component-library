import { Button } from '@/components'
import { PlusCircleIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

export default function ButtonPage() {
  return (
    <>
      <h1 className="flex justify-center my-20 text-6xl font-medium"> Button Types </h1>
      <div className="flex flex-row items-center justify-center gap-5 m-auto mb-44">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Button buttonStyle="elevated" title="Elevated" />
            <Button buttonStyle="elevated" title=" Small" size="small" />
            <Button buttonStyle="elevated" title=" Medium" size="medium" />
            <Button buttonStyle="elevated" title=" Large" size="large" />
            <Button
              buttonStyle="elevated"
              rightIcon={<PlusCircleIcon height={20} width={20} />}
              leftIcon={<PlusCircleIcon height={20} width={20} />}
              title=" Icon"
              size="large"
            />
            <Button buttonStyle="elevatedCancel" title=" Cancel" />
            <Button buttonStyle="elevatedDisabledStyle" title=" Disabled" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Button buttonStyle="filled" title="Filled" />
            <Button buttonStyle="filled" title=" Small" size="small" />
            <Button buttonStyle="filled" title=" Medium" size="medium" />
            <Button buttonStyle="filled" title=" Large" size="large" />
            <Button
              buttonStyle="filled"
              rightIcon={<PlusCircleIcon height={20} width={20} />}
              leftIcon={<PlusCircleIcon height={20} width={20} />}
              title=" Icon"
              size="large"
            />
            <Button buttonStyle="filledCancel" title=" Cancel" />
            <Button buttonStyle="filledDisabledStyle" title=" Disabled" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Button buttonStyle="outlined" title="Outlined" />
            <Button buttonStyle="outlined" title=" Small" size="small" />
            <Button buttonStyle="outlined" title=" Medium" size="medium" />
            <Button buttonStyle="outlined" title=" Large" size="large" />
            <Button
              buttonStyle="outlined"
              rightIcon={<PlusCircleIcon height={20} width={20} />}
              leftIcon={<PlusCircleIcon height={20} width={20} />}
              title=" Icon"
              size="large"
            />
            <Button buttonStyle="outlinedCancel" title=" Cancel" />
            <Button buttonStyle="outlinedDisabledStyle" title=" Disabled" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Button buttonStyle="text" title="Text" />
            <Button buttonStyle="text" title=" Small" size="small" />
            <Button buttonStyle="text" title=" Medium" size="medium" />
            <Button buttonStyle="text" title=" Large" size="large" />
            <Button
              buttonStyle="text"
              rightIcon={<PlusCircleIcon height={20} width={20} />}
              leftIcon={<PlusCircleIcon height={20} width={20} />}
              title=" Icon"
              size="large"
            />
            <Button buttonStyle="text" title=" Cancel" />
            <Button buttonStyle="textDisabledStyle" title=" Disabled" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Button
              buttonStyle="filled"
              title="Custom"
              className={clsx(
                'text-white bg-blue-500 hover:bg-blue-600',
                'active:bg-blue-700 focus:bg-blue-500 focus:ring-blue-300 focus:ring-offset-blue-100 focus:ring-2 focus:ring-offset-2'
              )}
            />
            <Button
              buttonStyle="elevated"
              title=" Small"
              size="small"
              className="bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-700 active:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />

            <Button
              buttonStyle="outlined"
              title=" Medium"
              size="medium"
              className="bg-pink-300 border-2 border-pink-600 hover:bg-pink-400 focus:bg-pink-500 active:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />

            <Button
              buttonStyle="text"
              title=" Large"
              size="large"
              className="bg-blue-400 hover:bg-blue-500 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button
              buttonStyle="text"
              rightIcon={<ChevronDownIcon height={20} width={20} />}
              title=" Icon"
              size="large"
              className="bg-green-400 hover:bg-green-500 focus:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <Button
              buttonStyle="text"
              title=" Cancel"
              className="bg-red-400 rounded-none hover:bg-red-500 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <Button
              buttonStyle="textDisabledStyle"
              title=" Disabled"
              className="bg-gray-300 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </>
  )
}
