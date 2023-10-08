import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider,  } from 'react-router-dom'
import mycreateRouter from './component/Router/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={mycreateRouter} />
  </React.StrictMode>,
)
