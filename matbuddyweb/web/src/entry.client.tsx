import { hydrateRoot, createRoot } from 'react-dom/client'

import App from './App'
import Routes from './Routes'


const redwoodAppElement = document.getElementById('redwood-app')

if (!redwoodAppElement) {
  throw new Error(
    "Could not find an element with ID 'redwood-app'. Please ensure it " +
      "exists in your 'web/src/index.html' file."
  )
}

if (redwoodAppElement.children?.length > 0) {
  hydrateRoot(
    redwoodAppElement,
    <App>
      <Routes />
    </App>
  )
} else {
  const root = createRoot(redwoodAppElement)
  root.render(
    <App>
      <Routes />
    </App>
  )
}
