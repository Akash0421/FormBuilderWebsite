import Home from "./pages/homepage/Home"
import LoginPage from "./pages/loginpage/Login"
import RegisterPage from "./pages/registerpage/register"
import Dashboard from "./pages/dasboard/Dashboard"
import { Toaster } from 'react-hot-toast'

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/register" element={<RegisterPage/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
         </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
