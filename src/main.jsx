import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//router
import { HashRouter } from 'react-router-dom'
//redux
import store from './store'
import { Provider } from 'react-redux'
//css
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
