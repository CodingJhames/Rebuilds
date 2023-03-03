import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
import { SimpleForm } from './useEffect/simpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>
)
