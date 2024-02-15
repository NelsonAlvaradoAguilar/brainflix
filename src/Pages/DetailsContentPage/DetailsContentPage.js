import { useParams } from "react-router-dom"
import Player from "../../components/Player/Player";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, apiKey } from "../../ApiTools/KeyUrl";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsList from "../../components/CommetsList/CommentsList";
import VideoList from "../../components/VideoList/VideoList";


export default function DetailsContentPage(props) {

    const comments = props.selectedVideo.comments;
    const selectedVideo = props.selectedVideo;
    
    return (
        <section>

            <Player video={selectedVideo} />


            <div>
                <div>

                    {selectedVideo && (<VideoDescription
                        key={selectedVideo.id}
                        channel={selectedVideo.channel}
                        title={selectedVideo.title}
                        timestamp={new Date(selectedVideo.timestamp).toLocaleDateString()}
                        views={selectedVideo.views}
                        likes={selectedVideo.likes}
                        description={selectedVideo.description}
                        comments={selectedVideo.comments}
                        video={selectedVideo.video}
                        image={selectedVideo.image}

                    />)}
                    {selectedVideo.comments && selectedVideo.comments.map(comments => (
                        <CommentsList
                            key={comments.id}
                            name={comments.name}
                            comment={comments.comment}
                            timestamp={new Date(comments.timestamp).toLocaleDateString()}
                        />
                    ))}

                </div>
               
            </div>
            

        </section>
    )
}
