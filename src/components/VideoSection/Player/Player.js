import './player.scss'
import React from "react";





export default function Player({video}) {



    

    return (


        <>
            <div className="player__container">

                <video className="player__container--video" controls poster = {video.image}width='auto' height='auto'>
                <source src={video.image} type="video/mp4" />

                </video>


            </div>

        </>
    )


}



