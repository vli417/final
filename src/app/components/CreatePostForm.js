import styles from './components.module.css';
import { useState } from "react";

const CreatePostForm = ({createPostFunction}) => {
    const [imageUpload, setImageUpload] = useState();
    return(
        <div>
            
            <form className={styles.Form} onSubmit={(e) => createPostFunction(e, imageUpload)}>
            
              

                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    placeholder="Choose image"
                    accept="image/png, image/jpeg"
                    onChange={(e)=>{
                        setImageUpload(e.target.files[0]);
                    }}
                />


<label htmlFor="postContent">Caption</label>
                <input type="text" id="postContent" name="postContent" />

                <button type="submit">Create Post</button>
           </form>
        </div>
    );
};

export default CreatePostForm;