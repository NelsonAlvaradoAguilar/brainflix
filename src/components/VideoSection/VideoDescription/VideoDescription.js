import React from "react"
import CommentsForm from "./CommentsForm/CommentsForm"
import './VideoDescription.scss'
import CommentsContainer from "./CommetsContainer/CommentsContainer"
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

      
            <div key={props.id} >
                <h3>{props.name}egregerg</h3>
                <p>{props.comment}frgrweger</p>
            </div>
           
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
   
};/*
"id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
"name": "Micheal Lyons",
"comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
"likes": 0,
"timestamp": 1628522461000

*/