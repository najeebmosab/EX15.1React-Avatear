import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createRouter } from '@remix-run/router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {HomePage} from"./HomePage/HomePageComponent"

function App() {
  const route = createBrowserRouter([{path:"/",element:<HomePage/>}]);

  return (
    <>
      {<RouterProvider router={route}/>}
    </>
    
  )
}

export default App
