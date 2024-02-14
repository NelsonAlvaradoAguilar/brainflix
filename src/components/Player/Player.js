import { Link } from 'react-router-dom';
import './player.scss'

import React, { useState } from "react";

export default function Player(props) {
    const video = props.video
    const [playing, setPlaying] = useState(false)

    const handlePlay = () => {
        setPlaying((prev) => !prev)
    }

    return (

        <section className="player">
            <video className="player__video" controls autoPlay loop poster={video.image} width='auto' height='auto'>
                <source src={video.video} type='video/mp4' />
            </video>
            <button className="player__play" onClick={handlePlay}>
                {playing ? 'Pause' : 'Play'}
            </button>
        </section>
    )


}



