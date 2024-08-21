import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PackingList, Byeing, Greeting } from './Greeting.jsx'
// import {Byeing} from './Greeting.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* {/* <Greeting />
    <Greeting /> */}
    {/* <Byeing /> */}
    <Byeing />
    <Greeting /> 
    <PackingList />
  </StrictMode>,
)
