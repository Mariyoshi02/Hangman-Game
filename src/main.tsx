import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />  {/*Asi se hace un comentario aca ajshjas. Bueno, el punto, aca se renderiza/se muestrae en pantalla el App.tsx*/}
  </StrictMode>,
)
