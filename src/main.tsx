import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { App } from '@/App'
// eslint-disable-next-line import/namespace
import { store } from '@/services/store'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
