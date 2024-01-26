import React from "react"
import CommentsForm from "./CommentsForm/CommentsForm"
import './VideoDescription.scss';


import CommentsVideo from "../../../data/video-details.json"
export default function VideoDescription(props) {

    return (

        <>
            <div>

                <h1 >{props.title}</h1>
                <div className='divider'></div>
                <div>
                    <p>{props.channel}</p>
                    <p>{props.timestamp}</p>
                    <p>{props.views}</p>
                    <p>{props.likes}</p>
                </div>

                <p>{props.description}</p>
            </div>
            <h4>3 Comments</h4>

      

           
        </>


    )
}
/*
VideoDescription.defaultProps = {

  
    title: "",
    channel: "",
    timestamp: "",
    views: "",
    likes: "",
    description: "",
   
};
*/