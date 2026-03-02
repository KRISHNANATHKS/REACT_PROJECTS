import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createGlobalStyle} from 'styled-components'

const Globalstyle=createGlobalStyle`
 
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }
 body{
  background-color: #323343;
  color: white;
  min-height: 100vh;

  font-family: "Inter", sans-serif;//imported font family and made changes in index.html and here....from (Google fonts)


 }


`;


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Globalstyle />
    <App />
  </StrictMode>,
)




