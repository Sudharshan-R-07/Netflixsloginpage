import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Success from './Success.jsx'
import Fail from './Fail.jsx'

import {BrowserRouter, Route, Routes} from "react-router-dom"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App></App>}></Route>
    <Route path='/success' element={<Success></Success>}></Route>
    <Route path='/fail' element={<Fail></Fail>}></Route>
  </Routes>
  </BrowserRouter>
)
