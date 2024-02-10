
import Player from '../../components/Player/Player';
import VideoDescription from '../../components/VideoDescription/VideoDescription'
import Form from '../../components/Form/Form';
import CommentsList from '../../components/CommetsList/CommentsList';
import VideoList from '../../components/VideoList/VideoList';
import { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './HomePage.scss'
import { apiKey, apiUrl } from '../../ApiTools/KeyUrl';


export default function HomePage() {

    const [sideLists, setSideList] = useState([]);
    const [mainVideo, setMainVideo] = useState({});
    const [commentsContent, setCommentsContent] = useState([]);
    const { videoId } = useParams();
    console.log(videoId);


    const getVideo = async () => {
        try {
            const response = await axios.get(`${apiUrl}/videos${apiKey}`);
            console.log(response.data);


            console.log(response.data[0]);
            setMainVideo(response.data[0])
            setSideList(response.data)
        } catch (error) {
            console.log('this', error);
        }
    };




    useEffect(() => {
        getVideo();
        
    }, []);

   /* const fetchVideo = async () => {
        try {

            const response = await axios.get(`${apiUrl}/videos/${videoId}${apiKey}`);


            console.log(response.data);
            console.log(response.data.video);
          
        } catch (error) {
            console.log('this', error);
        }
    };
useEffect(()=>{
    fetchVideo();
},[videoId])
*/


    return (
        <section >
            <Player video={mainVideo} />

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
                <VideoList videos={sideLists} />
            </div>
        </section>

    );


};


