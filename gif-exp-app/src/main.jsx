
import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import { GifExpertApp } from './GifExpertApp'
import '../src/styles.css';


const container = document.getElementById('root');
const root = createRoot( container );

root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>

);


