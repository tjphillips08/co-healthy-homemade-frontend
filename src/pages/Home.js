import {React} from 'react'
import {  useNavigate } from 'react-router-dom'
import './Pages.css'


const BASE_URL = 'https://co-healthy-homemade.herokuapp.com/'

const Home = () =>{
    const navigate = useNavigate()
    const URL = BASE_URL+'home'
    
    return(
    <div id="home-container">
        <h1 id="home">Client</h1>
        <a href="/login" id="home-icon"><img src="https://i.imgur.com/SQJo1pp.png" alt="client" id="home-image"/></a>

       


        <h1 id="home">Chef</h1>
        <a href="/login" id="home-icon"><img src="https://i.imgur.com/G3l69Ru.png" alt="client" id="home-image"/></a>

       
        

    </div>
    )
}

export default Home