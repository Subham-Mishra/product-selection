import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'
import { ProductSelectionPage } from 'pages'

const App = () => {
  return (
    <Fragment>
      <ProductSelectionPage />
      <Toaster position="bottom-left" />
    </Fragment>
  )
}

export { App }
