import { classNames } from 'utils'

export const selectionCardClasses = (className?: string) => {
  return classNames(
    'flex items-center justify-center rounded-md border border-gray-200 p-8 h-44 w-44 shadow-md hover:shadow-xl transition duration-300 ease-in-out',
    className
  )
}
