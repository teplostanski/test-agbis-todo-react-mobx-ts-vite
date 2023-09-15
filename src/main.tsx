import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import 'normalize.css'
import './index.css'

import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
