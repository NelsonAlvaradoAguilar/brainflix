import './player.scss'
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function Player(props) {
    const video = props.video
   const navigate = useNavigate();

    if (!video || !video.image) {
        navigate('/HomePage'); 
       
    }

    return (
        <section className="player__container">
            <video className="player__container--video" controls poster={video.image} width='auto' height='auto'>
                <source src={video.image} type='video/mp4' />
            </video>
        </section>
    )


}



