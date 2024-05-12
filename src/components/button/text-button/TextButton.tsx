import type { FunctionComponent, ReactNode, MouseEvent } from 'react'
import { textButtonClasses } from './TextButton.styles'

type ClickHandlerFuncType = (event: MouseEvent<HTMLButtonElement>) => void

type TextButtonProps = {
  onClick: ClickHandlerFuncType
  children: ReactNode
  className?: string
}

const TextButton: FunctionComponent<TextButtonProps> = ({
  onClick,
  children,
  className = '',
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
      className={textButtonClasses(className)}
      {...props}
    >
      {children}
    </button>
  )
}

export { TextButton }
