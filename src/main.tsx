import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route,Navigate } from 'react-router'
import SignUp from './pages/SignUp.tsx'
import Login from './pages/Login.tsx'
import GlobalChat from './pages/GlobalChat.tsx'
import "./index.css"
createRoot(document.getElementById('root')!).render( 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace />} />
      <Route path='/signup' element = {<SignUp/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/global-chat' element = {<GlobalChat/>}/>
    </Routes>
  </BrowserRouter>
)
