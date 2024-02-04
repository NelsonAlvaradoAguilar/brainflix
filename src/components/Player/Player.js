import './player.scss'
import React from "react";

export default function Player({ video }) {

    
    return (
        <section className="player__container">
            <video className="player__container--video" controls poster={video.image} width='auto' height='auto'>
               
            </video>
        </section>
    )


}



