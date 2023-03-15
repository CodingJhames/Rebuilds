import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
import { SimpleForm } from './useEffect/simpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { FocusScreen } from './useRef/FocusScreen'
import { Layout } from './useLayoutEffect/Layout'
import { Memorize } from './memos/Memorize'
import { MemoHook } from './memos/MemoHook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < MemoHook  />
  </React.StrictMode>
)
