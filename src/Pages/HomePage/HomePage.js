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
  const [mainVideo, setMainVideo] = useState();

  useEffect(() => {
    const id = videoId ? videoId : sideLists[0];

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

    if (id) {
      getListVideo();
    }
  }, [videoId]);

  useEffect(() => {
    const getVideoSelected = async () => {
      try {
        const response = await axios.get(`${apiUrl}/videos/${videoId}`);
        setSelectedVideo(response.data);
      } catch (error) {
        console.log("this", error);
      }
    };
    if (videoId) {
      getVideoSelected();
    }
  }, [videoId]);

  const handleVideoSelect = () => {
    const newdSideList = sideLists.filter(
      (video) => video.id !== selectedVideo.id
    );

    setSideList(newdSideList);
    return sideLists;
  };
  useEffect(() => {
    if (selectedVideo) {
      handleVideoSelect();
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

        <VideoList videos={sideLists} />
      </div>
    </section>
  );
}
