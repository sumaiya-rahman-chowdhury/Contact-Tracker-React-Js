import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// import App from './App.jsx'
import './index.css'
import Root from './root'


const router = createBrowserRouter([

  {
    path:"/",
    element:<Root></Root>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>,
)
