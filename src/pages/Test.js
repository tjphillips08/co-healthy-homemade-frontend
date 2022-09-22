import FileUploader from "./FileUploader"
import {useState} from 'react'

const CLOUDINARY_URL="https://api.cloudinary.com/v1_1/Meals_COHH/image/upload"

const TestUpload = (props) =>{
    const [file, setFile] = useState(null)
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        try{
        const formData = new FormData();
        formData.append("upload_preset", "Meals-COHH");
        formData.append("file", file);
        
        formData.append ("api_key", "862795625954768")
        
        const response = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        })
        
        
          const myResponse = await response.json()
          props.setImageURL(myResponse.url)
          return myResponse
    }
    catch(err){
        console.log(err)
    }
    } 
    
    return(
        <div>
            <h1>Create A Meal</h1>
            <form onSubmit={handleSubmit} >
                <FileUploader onFileSelect= {setFile}selectedFile ={file}/>
                <input type="submit" value="upload"></input>
            </form>
        </div>
    )
}

export default TestUpload