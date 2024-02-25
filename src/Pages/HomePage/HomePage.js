import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey, apiUrl } from "../../ApiTools/KeyUrl";
import { useParams } from "react-router-dom";
import DetailsContentPage from "../DetailsContentPage/DetailsContentPage";
import VideoList from "../../components/VideoList/VideoList";
import './HomePage.scss'
import Player from "../../components/Player/Player";


export default function HomePage() {

    const { videoId } = useParams();
    const [sideLists, setSideList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [homepage, setHomePage] = useState(true);
    const [comments, setComments] = useState({})

    useEffect(() => {
        const id = videoId ?? sideLists[0];
        setHomePage(!id)
        const getListVideo = async () => {
            try {
                const response = await axios.get(`${apiUrl}/videos${apiKey}`);
                console.log(response.data);
                setSideList(response.data)
                setSelectedVideo(response.data[0])
            } catch (error) {
                console.log('this', error);
            }
        };
        getListVideo();

    }, [videoId]);


    useEffect(() => {

        setHomePage(!videoId); // Set homepage to false when videoId is present
        if (videoId) {
            const getVideoSelected = async () => {
                try {

                    const response = await axios.get(`${apiUrl}/videos/${videoId}${apiKey}`);
                    console.log(response.data);
                    console.log(response.data.video);
                    console.log(response.data.comments);
                    setSelectedVideo(response.data)
                    setComments(response.data.comments)
                    console.log(response.data);
                } catch (error) {
                    console.log('this', error);
                }
            };
            getVideoSelected();
        }
    }, [videoId]);


    console.log(comments);

    const handleVideoSelect = () => {
        const newdSideList = sideLists.filter(video => video.id !== selectedVideo.id);

        setSideList(newdSideList)
        return sideLists.push(selectedVideo);
       
    };
    useEffect(() => {

        if (selectedVideo) {
            handleVideoSelect();
            
        }
    }, [selectedVideo,videoId]);




    if (!videoId && !selectedVideo) {
        return <div>Loading...</div>;
    }

    console.log(selectedVideo);

    return (
        <section className="page-container" >

            <div>
                <Player video={selectedVideo} />

            </div>

            <div className="page-container__content">

                {!homepage && <DetailsContentPage selectedVideo={selectedVideo} sideLists={sideLists} />}

                <VideoList videos={sideLists} />
            </div>

        </section>
    )

}
