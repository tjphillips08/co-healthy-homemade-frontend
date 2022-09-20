const EditForm = ({handleSubmit, handleChange, mealData, val}) => {
    return (
        <form className="EditForm" onSubmit={handleSubmit}>
                    <label>
                        <span>Name</span>
                        <input type="text" required name="name" placeholder="Enter meal's name" onChange={handleChange} value={mealData.name} />
                    </label>
                    <label>
                        <span>Image</span>
                        <input type="text" required name="image" placeholder="Enter meal's image" onChange={handleChange} value={mealData.image} />
                    </label>
                    <label>
                        <span>Portion</span>
                        <input type="text" required name="portions" placeholder="Edit Meal Portion" onChange={handleChange} value={mealData.portions} />
                    </label>
                    <label>
                        <span>Day</span>
                        <input type="text" required name="day" placeholder="Enter Day" onChange={handleChange} value={mealData.day} />
                    </label>
                    <input type="submit" value={val}/>
                </form>
    )
}

export default EditForm