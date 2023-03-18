import React from 'react'
import ReactDOM from 'react-dom/client'

/* import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
import { SimpleForm } from './useEffect/simpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { FocusScreen } from './useRef/FocusScreen'
import { Layout } from './useLayoutEffect/Layout'
import { Memorize } from './memos/Memorize'
import { MemoHook } from './memos/MemoHook'
import { CallBackHook } from './memos/CallBackHook'
import { Padre } from './tarea-memo/Padre' */

// import "./useReducer/intro-reducer";
import { TodoApp } from './useReducer/TodoApp';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp  />
  // </React.StrictMode>
)
