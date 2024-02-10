import './player.scss'
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { apiKey,apiUrl } from '../../ApiTools/KeyUrl';

export default function Player({video},{videos}) {
    
    if (!video.image || !video.image) {
        return 
       
    }
    return (
        <section className="player__container">
            <video className="player__container--video" controls poster={video.image} width='auto' height='auto'>
                <source src={video.image} type='video/mp4' />
            </video>
        </section>
    )


}



