import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

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
       type: "",
       image: "",
       cuisine: "" 
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
            <div key={meal._id} className="meal-card">
                <Link to={`/food/${meal._id}`}>
                <h1>{meal.name}</h1>
                <img src={meal.image} alt={meal.type}></img>
                <h2>{meal.type}</h2>
                <h3>{meal.cuisine}</h3>
                </Link>
            </div>
        )
    })
}

const loading = ()=>{
    <h1>Loading...</h1>
}

return(
    <>
    <section>
        <h2>Create a new meal</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name</span>
                <input type="text" required name = "name" placeholder="Enter meal's name" onChange={handleChange} value={newForm.name}></input>
            </label>
            <label>
                <span>Image</span>
                <input type="text" required name= "image" placeholder="Enter meal image" onChange={handleChange} value={newForm.image}></input>
            </label>
            <label>
                <span>Type</span>
                <input type="text" required name= "type" placeholder="Enter meal type" onChange={handleChange} value={newForm.type}></input>
            </label>
            <label>
                <span>Cuisine</span>
                <input type="text" required name= "cuisine" placeholder="Enter meal cuisine" onChange={handleChange} value={newForm.cuisine}></input>
            </label>
            <input type="Submit" value="Create Meal"></input>
            
        </form>
    </section>
    <section className ="meal-list">
        {meals && meals.length ? loaded() : loading()}
    </section>
    
    </>
)

}

export default Meals
export {getMeals}