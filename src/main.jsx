import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MarvelService from './services/MarvelService.jsx'

import './index.scss'
import './styles/main.scss'

const marvelService = new MarvelService();

marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)))
// marvelService.getAllCharacters().then(res => console.log(res));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
