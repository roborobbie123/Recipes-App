import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CustomDishProvider } from './customDishContext.jsx'

createRoot(document.getElementById('root')).render(
  <CustomDishProvider>
    <App />
  </CustomDishProvider>,
)
