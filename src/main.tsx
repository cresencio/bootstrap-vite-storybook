import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
// Import Bootstrap JS so data-bs attributes (collapse, accordion, etc.) work
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
