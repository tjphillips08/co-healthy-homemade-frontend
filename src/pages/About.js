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
        <h1>Chef Jonelle</h1>
        <p>Chef Jonelle got her start in upstate NY cooking for fine dining restaurants. She then studied culinary arts at Johnson and Wales in Denver,CO. After graduating she worked as a compliance manager for a large fruit, nut, and candy distributor. After a few years, she felt the calling to get back to her roots. Working as a personal chef over the last decade has helped her fine tune her skills while balancing the various needs of her clients. As owner and operator of Colordo Healthy Homemade, she passionaly pursues her craft while ensuring her clients eat well. Please do not hesitate and reach out  for additional information. </p>
    </div>
    )
}

export default About