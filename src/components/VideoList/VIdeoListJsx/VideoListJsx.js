import React from "react";
import "./VideoListJsx.scss"
export default function VideoListJsx({ video, onClick }) {
    return (


        <div className="list" onClick={()=>onClick(video.id)}>


            <img className="list__player" src={video.image} alt={video.title}></img>
            <div className="list__description">
                <h3 className='list__title'>{video.title}</h3>
                <p className='list__channel'>{video.channel}</p>


            </div>


        </div>


    );
};
VideoListJsx.defaultProps = {
    key:'',
    title:'',
    channel: '',
    image:''
};