import React from 'react'
import {Routes,Route} from "react-router-dom"
import Registration from "../pages/Registration"
import Login from "../pages/Login"
import Home from "../pages/Home"
const MainRouter = () => {
  return (
    <div>

        
<Routes>
    <Route path='/' element={<Registration />}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
</Routes>
    </div>
  )
}

export default MainRouter