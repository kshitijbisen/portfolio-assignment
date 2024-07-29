import { useState } from 'react'
import Display from './display';


function Input() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState([]);
    const [value,setValue]=useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmit = () => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage([...image,{ image:reader.result,description:value}]);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
  


    return (
        <div>
            <div style={{ display: "flex" }}>
                <div>Upload Photo</div>
                <input placeholder='Browse Image' type="file" id="file-input" onChange={handleImageChange} />
            </div>
            <div style={{ display: "flex" }}>
                <div>Description</div>
                <input placeholder='enter description' onChange={(e)=>{setValue(e.target.value);}}/>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <Display image={image}/>
        </div>
    )
}

export default Input
