import FileUploader from "./FileUploader"
import {useState} from 'react'

const CLOUDINARY_URL="https://api.cloudinary.com/v1_1/Meals_COHH/image/upload"
//https://api.cloudinary.com/v1_1/{{cloud_name}}/:resource_type/upload
const TestUpload = (props) =>{
    const [file, setFile] = useState(null)
    const handleSubmit = async(e) =>{
        e.preventDefault();
        // console.log(file)
        try{
        const formData = new FormData();
        formData.append("upload_preset", "Meals-COHH");
        formData.append("file", file);
        // formData.append ("public_id", "")
        formData.append ("api_key", "862795625954768")
        // console.log(formData.getAll("file"))
        const response = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        })
        
        // console.log(response.url)
          const myResponse = await response.json()
          props.setImageURL(myResponse.url)
          return myResponse
    }
    catch(err){
        console.log(err)
    }
    } 
    // console.log("Test", file)
    return(
        <div>
            <h1>Testing form</h1>
            <form onSubmit={handleSubmit} >
                <FileUploader onFileSelect= {setFile}selectedFile ={file}/>
                <input type="submit" value="upload"></input>
            </form>
        </div>
    )
}

export default TestUpload