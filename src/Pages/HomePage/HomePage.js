import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey, apiUrl } from "../../ApiTools/KeyUrl";
import { useParams } from "react-router-dom";
import VideoList from "../../components/VideoList/VideoList";
import DetailsContentPage from "../DetailsContentPage/DetailsContentPage";
import HomeContentPage from "../HomeContentPage/HomeContentPage";



export default function HomePage() {

    const { videoId } = useParams();
    const [sideLists, setSideList] = useState([]);
    const [mainVideo, setMainVideo] = useState({});
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [homepage, setHomePage] = useState(true);

    const [comments, setComments] = useState({})



    useEffect(() => {

        const getListVideo = async () => {
            try {
                const response = await axios.get(`${apiUrl}/videos${apiKey}`);
                console.log(response.data);
                console.log(response.data[0]);
                setSideList(response.data)
                setMainVideo(response.data[0])
            } catch (error) {
                console.log('this', error);
            }
        };
        getListVideo();

    }, []);

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

                } catch (error) {
                    console.log('this', error);
                }
            };
            getVideoSelected();
        }
    }, [videoId]);
//cheking for selected video after is mounted  

    if (videoId && !selectedVideo) {
        return <div>Loading...</div>;
    }

    console.log(selectedVideo);

    return (
        <section>
            {  homepage &&<HomeContentPage sideLists={sideLists} mainVideo={mainVideo} /> }
            { !homepage&& <DetailsContentPage videoId={videoId} selectedVideo={selectedVideo} sideLists={sideLists}/>}
            <VideoList videos={sideLists} />
        </section>
       )
  
}

