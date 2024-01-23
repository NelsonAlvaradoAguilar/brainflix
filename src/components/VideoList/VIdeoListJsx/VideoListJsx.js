import React from "react";
import "./VideoListJsx.scss"
export default function VideoListJsx(props) {
    return (
      

            <div className="list">


                <video className="list__player" poster={props.image} controls type="video/mp4" ></video>
                <div className="list__description">
                    <h1 className='list__title'>{props.title}</h1>
                    <p className='list__channel'>{props.channel}</p>


                </div>


            </div>

       
    )
}
VideoListJsx.defaultProps = {
    id: "",
    title: "",
    channel: '',
    image: ''
};