import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes,Route } from 'react-router'
import SignUp from './pages/SignUp.tsx'
import Login from './pages/Login.tsx'
import GlobalChat from './pages/GlobalChat.tsx'

createRoot(document.getElementById('root')!).render( 
  <BrowserRouter>
    <Routes>
      <Route path='/' element= {<App/>}/>
      <Route path='/signup' element = {<SignUp/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/global-chat' element = {<GlobalChat/>}/>
    </Routes>
  </BrowserRouter>
)
