import {React} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './Pages.css'


const BASE_URL = 'https://co-healthy-homemade.herokuapp.com/'

const About = () =>{
    const navigate = useNavigate()
    const URL = BASE_URL+'about'

    return(
    <div>
        <img src="https://i.imgur.com/tde9GdW.jpg" alt="Chef Jonelle" class="chef-pic"/>
        <h1 id="chef-name">Chef Jonelle</h1>
        <hr></hr>
        <p id="chef-info">Chef Jonelle got her start in upstate NY cooking for fine dining restaurants. She then studied culinary arts at Johnson and Wales in Denver,CO. While in school, she worked as a baker for Udi's bakery. After graduating, she worked as a compliance manager for a large fruit, nut, and candy distributor. After a few years, she felt the calling to get back to her roots. Working as a personal chef over the last decade has helped her fine tune her skills while balancing the various needs of her clients. As owner and operator of Colordo Healthy Homemade, she passionaly pursues her craft while ensuring her clients eat well. Her background in compliance guarantees she follows safe and responsible food handling practices with special attention to allergens. Please do not hesitate and reach out  for <a href="/contact" id="additional">additional information</a>. </p>
        <hr></hr>
    </div>
    )
}

export default About