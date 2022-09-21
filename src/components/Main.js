import {Routes, Route} from "react-router-dom"
import Meals from "../pages/WeeklyMeals"
import Show from "../pages/Show"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import Test from "../pages/Test"

const Main = (props) => {
    return (
      <main>
    
    <Routes>
      <Route path='/food' element={<Meals/>}></Route>
      <Route path='/food/:id' element={<Show/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
    </Routes>
    </main>
    
    )
  }
  
  export default Main