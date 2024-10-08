import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// import App from './App.jsx'
import './index.css'
import Root, { action } from './root'
import ErrorPage from './error-page'
import Contact, { loader } from './contacts'
import { loader as rootLoader } from './root'
import EditContacts,{action as editAction} from './edit'

const router = createBrowserRouter([

  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:rootLoader,
    action: action,
    children:[
      {
        path:"contacts/:contactId",
        element:<Contact></Contact>,
        loader:loader
      },
      {
        path:"contacts/:contactId/edit",
        element:<EditContacts></EditContacts>,
        loader:loader,
        action:editAction,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>,
)
