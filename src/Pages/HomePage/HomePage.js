import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import DetailsContentPage from "../DetailsContentPage/DetailsContentPage";
import VideoList from "../../components/VideoList/VideoList";
import "./HomePage.scss";
import Player from "../../components/Player/Player";

export default function HomePage() {
  const apiUrl = "https://nelson-alvarado-brainflix-api.vercel.app";

  const { videoId } = useParams();
  const [sideLists, setSideList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [mainVideo, setMainVideo] = useState(null);

  // 

  const getListVideo = async () => {
    try {
      const response = await axios.get(`${apiUrl}/videos`);

      setSideList(response.data);
      console.log(response.data);
      setMainVideo(response.data[0]);
    } catch (error) {
      console.log("this", error);
    }
  };
  useEffect(
    
    () => {
      const id = videoId ? videoId : sideLists[0];
      getListVideo();
      if (!videoId) {
        setMainVideo(sideLists[0])
      }
    },
    [videoId],
    [sideLists]
  );

  const getVideoSelected = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/videos/${videoId}`);

      setSelectedVideo(response.data);
    } catch (error) {
      console.log("this", error);
    }
  };

  useEffect(() => {
    if (videoId) {
      getVideoSelected(videoId)
    }
  }, [videoId]);

  const handleVideoSelect = (videoId) => {
    const newdSideList = sideLists.filter((video) => video.id !== videoId);
    console.log(newdSideList);

    setSideList(newdSideList);


  };
  useEffect(() => {
    if (selectedVideo) {
      handleVideoSelect(selectedVideo.id);
      sideLists.push(selectedVideo);
    }
  }, [selectedVideo]);

  if (!videoId && !mainVideo) {
    return <div>Loading...</div>;
  }

  return (
    <section className="page-container">
      {videoId ? (
        <Player video={selectedVideo} />
      ) : (
        <Player video={mainVideo} />
      )}

      <div className="page-container__content">
        {videoId && (
          <DetailsContentPage
            selectedVideo={selectedVideo}
            sideLists={sideLists}
            videoId={videoId}
          />
        )}

        <VideoList videos={sideLists} handleVideoSelect={handleVideoSelect} />
      </div>
    </section>
  );
}
