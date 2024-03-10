import axios from "axios";
import { apiKey, apiUrl } from "../../ApiTools/KeyUrl";
import { useEffect, useState } from "react"
import "./Form.scss"
import HomePage from "../../Pages/HomePage/HomePage";
import CommentsList from "../CommetsList/CommentsList";


export default function Form(props) {

const selectedVideo=props.selectedVideo;
  const videoId =props.videoId
  const [commentsList, setCommentsList] = useState([])

const[comment,setNewComments]=useState("");

const postingComments = async (comment,name) => {

    try {
        const response = await axios.post(`${apiUrl}/videos/${videoId}/comments`, { comment,name});

        return response.data;
       
    } catch (error) {
        console.log('this is the error', error);
    }

}

const handleOnchangeNewComments =(e)=>{
    setNewComments(e.target.value)
    
}


  

const getCommentsList= async () => {
    try {

        const response = await axios.get(`${apiUrl}/videos/${videoId}${apiKey}`);    
    setCommentsList(response.data.comments);

    } catch (error) {
        console.log('this', error);
    }

}

useEffect(()=>{
    getCommentsList();
},[videoId])

       
    
;

const handleSubmit= async (e)=>{
    e.preventDefault();
    getCommentsList();
    const name= "User" 
    const resp = await postingComments(comment,name);

   
}





    return (
        <>
        <section className="form" >
            <img className="form__avatar"  alt=""></img>
            <form onSubmit={handleSubmit} className="form__container">
                <label className="form__label"
                    htmlFor='comments'>JOIN THE CONVERSATION
                    <div>
                        <input className="form__text-field"
                            type="text"
                            placeholder="Add a new comment"
                            name="comment"
                            id="comment"
                            title="name only accept letter and spaces " required
                            value={comment}
                            onChange={handleOnchangeNewComments}
                        />
                    </div>
                </label>
                <button  className="form__button" type="submit">COMMENT</button>
            </form>
       
        </section>
        {selectedVideo && commentsList.map(comments => (
            <CommentsList 
                key={comments.id}
                name={comments.name}
                comment={comments.comment}
                timestamp={new Date(comments.timestamp).toLocaleDateString()}
            />
        ))}
       </>
    )
}
