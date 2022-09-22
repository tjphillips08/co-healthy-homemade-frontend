import {Routes, Route} from "react-router-dom"
import Meals from "../pages/WeeklyMeals"
import Show from "../pages/Show"
import Contact from "../pages/Contact"
import Services from "../pages/Services"

import Test from "../pages/Test"

import About from "../pages/About"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { Email } from "../pages/Email"


const Main = (props) => {
    return (
      <main>
    
    <Routes>
      <Route path='/food' element={<Meals/>}></Route>
      <Route path='/food/:id' element={<Show/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>

      <Route path='/test' element={<Test/>}></Route>

      <Route path='/about' element={<About/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/email' element={<Email/>}></Route>

    </Routes>
    </main>
    
    )
  }
  
  export default Main