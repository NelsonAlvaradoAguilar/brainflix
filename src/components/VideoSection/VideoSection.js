
import Player from "./Player/Player";
import Video from '../../data/video-details.json'
import VideoDescription from './VideoDescription/VideoDescription'
import CommentsForm from "./VideoDescription/CommentsForm/CommentsForm";
import CommentsList from "./VideoDescription/CommetsList/CommentsList";
import React, { useState, useEffect } from "react";
import VideoList from "../VideoList/VideoList";
import './VideoSection.scss'

export default function VideoSection() {

    const [sideLists, setSideList] = useState([]);
    const [mainVideo, setMainVideo] = useState({});
    const [commentsContent, setCommentsContent] = useState([]);
    const [activeVideo, setActiveVideo] = useState({});
    useEffect(() => {

        if (Video.length > 0) {

            const mainVideo = Video.find(video => video.true) || Video[0];


            const sideLists = Video.filter(video => video.id !== mainVideo.id);

            setActiveVideo(mainVideo);
            setMainVideo(mainVideo);
            setSideList(sideLists);
            setCommentsContent(mainVideo.comments);
        }
    }, [Video]);
    const handleVideoSelect = (chosenVideo) => {
        setSideList(pastSideLists => {
            const newdSideList = pastSideLists.filter(video => video.id !== chosenVideo.id);
            if (activeVideo.id) {
                newdSideList.push(activeVideo);
            }
            setActiveVideo(chosenVideo);
            return newdSideList;
        });

        setMainVideo(chosenVideo);
        setCommentsContent(chosenVideo.comments);
    };

    console.log(commentsContent);
    return (
        <section >
            <Player video={activeVideo} />

            <div className="body-section">
              <div className="body-section__descritiption-form">
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
                <CommentsForm />

                {mainVideo.comments && mainVideo.comments.map(comments => (
                    <CommentsList

                        commentsContent={commentsContent}
                        key={comments.id}
                        name={comments.name}
                        comment={comments.comment}
                        timestamp={new Date(comments.timestamp).toLocaleDateString()}
                    />


                ))};
              </div>
                <VideoList videos={sideLists} pickVideo={handleVideoSelect} />
            </div>
        </section>

    );


};


