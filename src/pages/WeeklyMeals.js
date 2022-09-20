import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../components/Navbar.css'
import Container from 'react-bootstrap/esm/Container';

const BASE_URL= 'https://co-healthy-homemade.herokuapp.com/'


const getMeals = async (fn) =>{
    try{
        const response = await fetch (BASE_URL + "food")
        const allMeals = await response.json();
        fn(allMeals)

    } catch (err){
        console.log(err)
    }
}

const Meals = (props) =>{
    const initForm ={
       name: "",
       image: "",
       desc: "",
       day: "" ,
       portions: "number",
       created: "date" ,
    }


const [meals, setMeals] = useState([])

const [newForm, setNewForm] = useState(initForm)

useEffect (()=>{
    getMeals(setMeals)
}, [])


const handleSubmit =async (e) =>{
    e.preventDefault()
    try{
        const newMeal = {...newForm}
        const testingOutput = JSON.stringify(newMeal)

        const options = {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:testingOutput
        }

        const URL = BASE_URL+'food'
        console.log(URL)
        const response= await fetch(URL, options)
        const responseData = await response.json()
        console.log(responseData)

        getMeals(setMeals)
        setNewForm(initForm)

    }catch (err){
        console.log(err)
    }
}

const handleChange = (e) =>{
    const data = {...newForm, [e.target.name]: e.target.value}
    setNewForm(data)
}

const loaded = () =>{
    return meals?.map((meal)=>{
        return(
        <Container id="meals">
        <Row  className="g-4 shadow-lg">
        <Col>
    <Card style={{ width: '28rem' }} className="grid">
        <Card.Img variant="top" src={meal.image} alt={meal.name} />
        <Card.Body>
        <Card.Title>{meal.name}</Card.Title>
        <Card.Text>
        {meal.desc}
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Made On: {meal.created}</ListGroup.Item>
        <ListGroup.Item>Portions: {meal.portions}</ListGroup.Item>
        </ListGroup>
      <Card.Body>
        <Card.Link href={`/food/${meal._id}`}>Details</Card.Link>
       
      </Card.Body>
    </Card>
        </Col> 
        </Row>
        </Container>
       
        )
    })
}

const loading = ()=>{
    <h1>Loading...</h1>
}

return(
    <div style={{ display: 'block', 
    width: 700, 
    padding: 30 }} id="form" className="form shadow-lg">
<h4>Create A New Meal</h4>
<Form onSubmit={handleSubmit}>
<Form.Group>
<Form.Label>Name:</Form.Label>
<Form.Control type="text" required name = "name" placeholder="Enter meal's name" onChange={handleChange} value={newForm.name} />
</Form.Group>
<Form.Group>
<Form.Label>Image:</Form.Label>
<Form.Control type="text" required name= "image" placeholder="Enter meal image" onChange={handleChange} value={newForm.image} />
</Form.Group>
<Form.Group>
<Form.Label>Description:</Form.Label>
<Form.Control type="text" required name= "desc" placeholder="Enter meal description" onChange={handleChange} value={newForm.desc} />
</Form.Group>
<Form.Group>
<Form.Label>Day:</Form.Label>
<Form.Control type="text" required name= "day" placeholder="Enter day of the week" onChange={handleChange} value={newForm.day} />
</Form.Group>
<Form.Group>
<Form.Label>Portions:</Form.Label>
<Form.Control type="number" required name= "portions" placeholder="Enter meal portions" onChange={handleChange} value={newForm.portions} />
</Form.Group>
<Form.Group>
<Form.Label>Made on:</Form.Label>
<Form.Control type="date" required name= "created" placeholder="Enter prepared date" onChange={handleChange} value={newForm.created} />
</Form.Group>
<Button variant="primary" type="submit">
Click here to submit form
</Button>
</Form>
<section className ="meal-list">
        {meals && meals.length ? loaded() : loading()}
</section>

</div>
)

}

export default Meals
export {getMeals}