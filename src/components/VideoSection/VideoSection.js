
import Player from "./Player/Player";
import Video from '../../data/video-details.json'
import VideoDescription from './VideoDescription/VideoDescription'
import CommentsContainer from "./VideoDescription/CommetsContainer/CommentsContainer";
import React, { useState, useEffect } from "react";



export default function VideoSection(props) {

    const [videos, setVideos] = useState([]);
    const [mainVideo, setMainVideo] = useState({});
    const [comments, setComments] = useState({});
    useEffect(() => {

        setVideos(Video);

        setMainVideo(Video[0]);

        setComments(Video[0])
    }, []);
    console.log(comments);
    /*
        const handleVideoClick = (selectedVideo) => {
    
            setMainVideo(selectedVideo);
        };
    */

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
            <CommentsContainer 
            
           comments={mainVideo.comments}

           />



        </>
    );


}


/*  comments: {
        key: '',
        name: '',
        comment: ''
key={props.id} comment={props.comment} name={props.name} 
    }*/ 