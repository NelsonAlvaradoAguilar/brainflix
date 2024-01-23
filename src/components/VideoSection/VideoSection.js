import React from "react";
import Player from "./Player/Player";
import Video from '../../data/video-details.json'
import VideoDescription from './VideoDescription/VideoDescription'





export default function VideoSection() {


    return (
        <>
            <Player  />
            {Video.map((video, index) =>
                <VideoDescription

                    key={index.id}
                    channel={video.channel}
                    title={video.title}
                    timestamp={new Date(video.timestamp).toLocaleDateString()}
                    views={video.views}
                    likes={video.likes}
                    description={video.description} />)}

           

        </>
    );


}


