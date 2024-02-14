
import Player from '../../components/Player/Player';
import VideoDescription from '../../components/VideoDescription/VideoDescription'
import './HomeContentPage.scss'


export default function HomeContentPage(props) {
    const mainVideo = props.mainVideo;
    return (
        <section >
            <div className="body-section">
                <Player video={mainVideo} />
                <div className="body-section__descritiption-form">
                    <VideoDescription
                        key={mainVideo.id}
                        channel={mainVideo.channel}
                        title={mainVideo.title}
                       
                        views={mainVideo.views}
                        likes={mainVideo.likes}
                        description={mainVideo.description}
                        comments={mainVideo.comments}

                    />
                  
                </div>


            </div>
          
        </section>

    );


};


/**  <Form />
 timestamp={new Date(mainVideo.timestamp).toLocaleDateString()}
                    {mainVideo.comments && mainVideo.comments.map(comments => (
                        <CommentsList
                            key={comments.id}
                            name={comments.name}
                            comment={comments.comment}
                            timestamp={new Date(comments.timestamp).toLocaleDateString()}
                        />
                    ))} */