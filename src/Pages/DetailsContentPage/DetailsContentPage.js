
import Player from "../../components/Player/Player";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsList from "../../components/CommetsList/CommentsList";
import Form from "../../components/Form/Form";
import './DetailsContentPage.scss'

export default function DetailsContentPage(props) {
  
    const selectedVideo = props.selectedVideo;

    return (
        <section className="body-section">

            <div className="body-section__descritiption-form">

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


                <h3 className="body-section__subtitle">3 comments</h3>
            </div>

            <Form />
            {selectedVideo.comments && selectedVideo.comments.map(comments => (
                <CommentsList
                    key={comments.id}
                    name={comments.name}
                    comment={comments.comment}
                    timestamp={new Date(comments.timestamp).toLocaleDateString()}
                />
            ))}



        </section>
    )
}
