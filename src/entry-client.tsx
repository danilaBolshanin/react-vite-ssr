import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  </React.StrictMode>
)
