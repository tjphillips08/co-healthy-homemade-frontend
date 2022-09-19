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
                        <span>Type</span>
                        <input type="text" required name="type" placeholder="Enter meal's type" onChange={handleChange} value={mealData.type} />
                    </label>
                    <label>
                        <span>Cuisine</span>
                        <input type="text" required name="cuisine" placeholder="Enter meals's cuisine" onChange={handleChange} value={mealData.cuisine} />
                    </label>
                    <input type="submit" value={val}/>
                </form>
    )
}

export default EditForm