import type { FunctionComponent, ReactNode } from 'react'
import { headingClasses } from './Heading.styles'

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
}

const Heading: FunctionComponent<HeadingProps> = ({ level, children }) => {
  return (
    <h2 className={'text-gray-700 ' + headingClasses(level)}>{children}</h2>
  )
}

export { Heading }
