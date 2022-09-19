import {Routes, Route} from "react-router-dom"
import Meals from "../pages/WeeklyMeals"
import Show from "../pages/Show"

const Main = (props) => {
    return (
      <main>
    
    <Routes>
      <Route path='/food' element={<Meals/>}></Route>
      <Route path='/food/:id' element={<Show/>}></Route>
    </Routes>
    </main>
    
    )
  }
  
  export default Main