import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.scss'
import './styles/main.scss'

// import MarvelService from './services/MarvelService.jsx'
// const marvelService = new MarvelService();
// marvelService.getAllCharacters().then(res => console.log(res))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
