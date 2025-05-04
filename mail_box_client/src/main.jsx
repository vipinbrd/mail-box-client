import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Signup } from './components/Signup.jsx'
import { MainRouter } from './components/router/MainRouter.jsx'
import { AuthProvider } from './components/store/AuthProvider.jsx'
import { Provider } from 'react-redux'
import { MailStore } from './components/store/MailStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={MailStore}>
    <AuthProvider>
   
    <MainRouter>
    
    </MainRouter>
    </AuthProvider>
    </Provider>
  
  </StrictMode>,
)
