import { classNames } from 'utils'

export const textButtonClasses = (className: string) =>
  classNames(
    'font-normal text-gray-400 underline hover:text-gray-500 focus:outline-none focus:text-gray-700',
    className
  )
