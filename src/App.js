import React, { useState, useEffect } from 'react';
import './App.scss';
import VideoDetails from './data/video-details.json'
import VideoSideList from './data/videos.json'
import Header from './components/Header/Header';
import VideoDetailsPage from './Pages/VideoDetailsPage/VideoDetailsPage';
import HomePage from './Pages/HomePage/HomePage';
import UpLoadPage from './Pages/UpLoadPage/UpLoadPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {

  const [sideLists, setSideList] = useState([]);
  const [mainVideo, setMainVideo] = useState({});
  const [commentsContent, setCommentsContent] = useState([]);

  useEffect(() => {

    if (VideoDetails.length > 0) {
      const mainVideo = VideoDetails.find(video => video.true) || VideoDetails[0];
      const sideLists = VideoSideList.filter(video => video.id !== mainVideo.id);
      setMainVideo(mainVideo);
      setSideList(sideLists);
      setCommentsContent(mainVideo.comments);
    }
  }, [VideoDetails]);
  const handleVideoSelect = (chosenVideo) => {
    setSideList(pastSideLists => {
      const newdSideList = pastSideLists.filter(video => video.id !== chosenVideo.id);
      if (mainVideo.id) {
        newdSideList.push(mainVideo);
      }
      setMainVideo(chosenVideo);
      return newdSideList;
    });

    setMainVideo(chosenVideo);
    setCommentsContent(chosenVideo.comments);
  };


  return (
    <div className="App">
     
      <BrowserRouter>
      <Header  />
      <Routes>
        <Route path='/' element={<HomePage mainVideo={mainVideo} videoSelected={handleVideoSelect} sideLists={sideLists}/>} />
       <Route path='VideoDetailsPage/:videoDetailId' element={<VideoDetailsPage sideLists={sideLists}/>}/>
        <Route path='/UpLoadPage' element={<UpLoadPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
