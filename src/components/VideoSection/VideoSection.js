
import Player from "./Player/Player";
import Video from '../../data/video-details.json'
import VideoDescription from './VideoDescription/VideoDescription'
import CommentsContainer from "./VideoDescription/CommetsContainer/CommentsContainer";
import React, { useState, useEffect } from "react";



export default function VideoSection() {

    const [videos, setVideos] = useState([]);
    const [mainVideo, setMainVideo] = useState({});
    const [comments, setComments] = useState({});
    useEffect(() => {

        setVideos(Video);

        setMainVideo(Video[0]);

        setComments(mainVideo.comments)
    }, []);


    console.log(mainVideo.comments)
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
                description={mainVideo.description}
                comments={mainVideo.comments}

            />
            {mainVideo.comments && mainVideo.comments.map(comments => (


                <CommentsContainer
                    key={comments.id}
                    name={comments.name}
                    comment={comments.comment}
                />


            ))}





        </>

    );
    ;

}


