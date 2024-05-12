import type { FunctionComponent, ReactNode, MouseEvent } from 'react'
import { primaryButtonClasses } from './PrimaryButton.styles'

type ClickHandlerFuncType = (event: MouseEvent<HTMLButtonElement>) => void

type PrimaryButtonProps = {
  onClick: ClickHandlerFuncType
  children: ReactNode
  className?: string
  isDisabled?: boolean
}

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  onClick,
  children,
  className = '',
  isDisabled,
  ...props
}) => {
  const handleClick: ClickHandlerFuncType = (event) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={primaryButtonClasses(className, isDisabled)}
      {...props}
    >
      {children}
    </button>
  )
}

export { PrimaryButton }
