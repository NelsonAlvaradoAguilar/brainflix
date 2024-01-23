import './player.scss'
import React from "react";












export default function Player(props) {



    ;

    return (


        <>
            <div className="player">

                <video className="player-video" controls poster = {props.image}width='auto' height='auto'>
                <source src={props.image} type="video/mp4" />

                </video>


            </div>

        </>
    )


}
/*
Player.defaultProps = {
  
    porDefecto: 'las props', 
    video:"",
    title:"",
    channel:"",
    timestamp:"",
    views:"",
    likes:"",
    description:""
};

*/
