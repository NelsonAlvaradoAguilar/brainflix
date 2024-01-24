
import Player from "./Player/Player";
import Video from '../../data/video-details.json'
import VideoDescription from './VideoDescription/VideoDescription'

import React, { useState, useEffect } from "react";



export default function VideoSection() {

    const [videos, setVideos] = useState([]);
    const [mainVideo, setMainVideo] = useState({});

    useEffect(() => {
        // Fetch data from your backend API or use local data
        setVideos(Video);
        // Assume the first video is the main video initially
        setMainVideo(Video[0]);
    }, []);

    const handleVideoClick = (selectedVideo) => {
        // Update the main video when a side video is clicked
        setMainVideo(selectedVideo);
    };


    return (
        <>
            <Player video={mainVideo} />

            <VideoDescription

                key={mainVideo.id}
                channel={mainVideo.channel}
                title={mainVideo.title}
                timestamp={new Date(mainVideo.timestamp).toLocaleDateString()}
                views={mainVideo.views}
                likes={mainVideo.likes}
                description={mainVideo.description} />



        </>
    );


}


