import { useParams } from "react-router-dom"
import Player from "../../components/Player/Player";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, apiKey } from "../../ApiTools/KeyUrl";
import VideoDescription from "../../components/VideoDescription/VideoDescription";



export default function VideoDetailsPage(props) {


    const { videoId } = useParams();
    const [videos, setVideos] = useState(null);

    console.log(videos);
    console.log(videoId);




    const fetchVideo = async () => {
        try {

            const response = await axios.get(`${apiUrl}/videos/${videoId}${apiKey}`);


            console.log(response.data);
            console.log(response.data.video);
            setVideos(response.data)
        } catch (error) {
            console.log('this', error);
        }
    };
    useEffect(() => {
        fetchVideo();
    }, [videoId])




    return (
        <>
            <section>
                <h1>{props.channel}</h1>
                {videos &&(<Player videos={videos}/>)}
            </section>
            {videos && (<VideoDescription
                key={videos.id}
                channel={videos.channel}
                title={videos.title}
                timestamp={new Date(videos.timestamp).toLocaleDateString()}
                views={videos.views}
                likes={videos.likes}
                description={videos.description}
                comments={videos.comments}
                video={videos.video}
                image={videos.image}

            />)}
        </>
    )
}
