import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Gallery from './testingMore.js'
// import { PackingList, Byeing, Greeting } from './Greeting.jsx'
// import {Byeing } from './Greeting.jsx'
import {List} from './list.jsx'
import './index.css'
import Hooks from './hooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* {/* <Greeting />
    <Greeting /> */}
    {/* <Byeing /> */}
    {/* <Byeing />
    <Greeting /> 
    <PackingList /> */}
    <List />
    <Hooks/>
  </StrictMode>,
)
