import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './assets/global'
import Ecommerce from './components/ecommerce/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Ecommerce />
  </React.StrictMode>,
)
