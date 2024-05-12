import type { FunctionComponent } from 'react'
import { selectionCardClasses } from './SelectionCard.styles'
import plusIcon from 'assets/plus.svg'
import xIcon from 'assets/x.svg'

type SelectionCardProps = {
  selection?: {
    id: string
    name: string
    icon: string
  }
  onRemove?: (removeId: string) => void
  classNames?: string
}

const SelectionCard: FunctionComponent<SelectionCardProps> = ({
  selection,
  onRemove,
  classNames
}) => {
  const removeSelection = (removeId: string) => {
    if (onRemove) {
      onRemove(removeId)
    }
  }

  return (
    <div className={selectionCardClasses(classNames)}>
      {selection?.id ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src={selection?.icon}
            alt={selection?.name}
            className="size-12"
          />
          <span className="text-sm font-normal text-gray-700">
            {selection?.name}
          </span>
          <div
            onClick={() => removeSelection(selection.id)}
            className="group flex cursor-pointer items-center gap-1 pt-2"
          >
            <img src={xIcon} className="size-4 text-red-500" alt="plus-icon" />
            <button className="text-sm font-medium text-gray-400 focus:outline-none group-hover:text-gray-500">
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <img src={plusIcon} className="size-6" alt="plus-icon" />
          </div>
        </div>
      )}
    </div>
  )
}

export { SelectionCard }
