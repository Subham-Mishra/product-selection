import { classNames } from 'utils'

export const primaryButtonClasses = (className: string, isDisabled?: boolean) =>
  classNames(
    'px-4 w-full py-1.5 rounded-md focus:outline-none ',
    isDisabled
      ? 'bg-gray-200 text-white cursor-not-allowed'
      : 'bg-blue-700 text-white  duration-300 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    className
  )
