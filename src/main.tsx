import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import 'normalize.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
