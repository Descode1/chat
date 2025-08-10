import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes,Route } from 'react-router'
import SignUp from './pages/SignUp.tsx'

createRoot(document.getElementById('root')!).render( 
  <BrowserRouter>
    <Routes>
      <Route path='/' element= {<App/>}/>
      <Route path='/login' element = {<SignUp/>}/>
    </Routes>
  </BrowserRouter>,
)
