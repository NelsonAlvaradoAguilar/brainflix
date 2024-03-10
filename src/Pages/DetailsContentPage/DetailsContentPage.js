
import Player from "../../components/Player/Player";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsList from "../../components/CommetsList/CommentsList";
import Form from "../../components/Form/Form";
import './DetailsContentPage.scss'

export default function DetailsContentPage(props) {
  const videoId=props.videoId;
    const selectedVideo = props.selectedVideo;
    const commentsList =props.commentsList
    return (
        <section className="body-section">

            <div className="body-section__descritiption-form">

                {selectedVideo && (<VideoDescription videoId={videoId}
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


                <h3 className="body-section__subtitle">3 comments</h3>
            </div>

            <Form videoId={videoId} selectedVideo={selectedVideo} />
           



        </section>
    )
}
