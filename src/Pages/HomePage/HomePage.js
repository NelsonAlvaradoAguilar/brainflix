
import Player from '../../components/Player/Player';
import VideoDescription from '../../components/VideoDescription/VideoDescription'
import Form from '../../components/Form/Form';
import CommentsList from '../../components/CommetsList/CommentsList';
import VideoList from '../../components/VideoList/VideoList';
import './HomePage.scss'

export default function HomePage({mainVideo,sideLists,videoSelected}) {
  
    return (
        <section >
            <Player video={mainVideo}  />

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
                <Form />

                {mainVideo.comments && mainVideo.comments.map(comments => (
                    <CommentsList
                        key={comments.id}
                        name={comments.name}
                        comment={comments.comment}
                        timestamp={new Date(comments.timestamp).toLocaleDateString()}
                    />


                ))}
              </div>
                <VideoList videos={sideLists} pickVideo={videoSelected} />
            </div>
        </section>

    );


};


