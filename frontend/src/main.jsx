import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from "react-router";
import Login from './components/Login.jsx';
import Signup from './components/signup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<App />}></Route>
        <Route path='/login' element= {<Login />}></Route>
        <Route path='/signup' element= {<Signup />}></Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>
)
