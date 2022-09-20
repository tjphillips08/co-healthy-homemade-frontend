import EditForm from '../components/EditForm'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../components/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const BASE_URL = 'https://co-healthy-homemade.herokuapp.com/'




const Show = (props) => {
    const [editForm, setEditForm] = useState(null)
    const [meals, setMeals] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const URL = `${BASE_URL}food/${id}`

    const getMeals = async () => {
        console.log(URL)
        // test your endpoint before making a request
        try {

            const response = await fetch(URL)
            const mealData = await response.json()
            // console.log(personData)
            setMeals(mealData)
            setEditForm(mealData)
        } catch (err) {
            console.log(err)
        }
    }
    const loaded = () => {
        return (
        <Card style={{ width: '38rem', marginLeft:'700px' }} id="show-card" className="show-card shadow-lg">
            <Card.Img variant="top" src={meals.image} alt={meals.name + " image"} />
            <Card.Body>
            <Card.Title>{meals.name}</Card.Title>
            <Card.Text>{meals.desc}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Portions: {meals.portions}</ListGroup.Item>
            <ListGroup.Item>{meals.day}</ListGroup.Item>
            <ListGroup.Item>Made On: {meals.created}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Button variant="primary" onClick={removeMeal}>Delete</Button>
       
      </Card.Body>
    </Card>
        )
    }

    const loading = () => {
        return <h1>Loading.........</h1>
        // alternatively you can use the spinner 
    }

    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        console.log('submit fired')
        e.preventDefault()
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm) // <===editForm is the current state
        }

        try {
            // await fetch (URL, options) => 
            console.log(URL)
            const response = await fetch(URL, options)
            const updatedMeal = await response.json()
            // trigger a new fetch (getPerson())

            setMeals(updatedMeal)
            setEditForm(updatedMeal)
        } catch (err) {
            console.log(err)
        }
        // we can reference our other handleSubmit (People) 
    }

    const removeMeal = async () => {
        try {

            const options = { method: 'DELETE' }
            const URL = 'https://co-healthy-homemade.herokuapp.com/food/' + id
            console.log(URL)

            const response = await fetch(URL, options)
            const deletedMeal = await response.json()
            // our destroy - findByIdAndDelete >> original document
            console.log(deletedMeal)
            navigate('/food')
        } catch (err) {
            console.log(err)
            navigate('https://co-healthy-homemade.herokuapp.com/food/' + id)
        }
    }
    /* How to delete a resource from the show page:
    1. Add a dom button (return) +++
    2. Event Handler (click) > 
        > contact our database with a fetch
        > URL -> http://.../people/objectid 
        > options - method (delete)
        (assuming delete is a success)
        > redirect to homepage (useNavigate)
    3. add onClick to the button 
    */


    useEffect(() => {
        getMeals()
    }, [])

    // console.log(`Current person: ${JSON.stringify(person)}`)

    return <section>

        {editForm ?
        <EditForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            mealData={editForm}
            val={`Edit ${meals.name}`}
        /> : null}

        {meals ? loaded() : loading()}

       
    </section>
}

export default Show