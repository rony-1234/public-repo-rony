import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider,  } from 'react-router-dom'
import mycreateRouter from './component/Router/Router'
import AuthProvider from './component/AuthProvider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={mycreateRouter}/>
    </AuthProvider>
      
  </React.StrictMode>,
)
