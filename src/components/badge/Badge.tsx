import { FunctionComponent } from 'react'

type BadgeProps = {
  text: string
}

const Badge: FunctionComponent<BadgeProps> = ({ text }) => {
  return (
    <div>
      <span
        className={`inline-block rounded-md bg-gradient-to-tr from-blue-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white`}
      >
        {text}
      </span>
    </div>
  )
}

export { Badge }
