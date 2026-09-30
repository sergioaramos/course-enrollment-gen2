import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import outputs from '../amplify_outputs.json'
import './index.css'
import App from './App.tsx'

// Conecta el frontend con el backend del ambiente (sandbox, dev o main): user pool, API, región.
Amplify.configure(outputs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
