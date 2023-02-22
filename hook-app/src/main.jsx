import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < CounterWithCustomHook />
  </React.StrictMode>,
)
