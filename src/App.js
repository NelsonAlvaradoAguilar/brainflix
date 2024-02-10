import React, { useState, useEffect } from 'react';
import './App.scss';
import VideoDetails from './data/video-details.json'
import VideoSideList from './data/videos.json'
import Header from './components/Header/Header';
import VideoDetailsPage from './Pages/VideoDetailsPage/VideoDetailsPage';
import HomePage from './Pages/HomePage/HomePage';
import UpLoadPage from './Pages/UpLoadPage/UpLoadPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiKey, apiUrl } from './ApiTools/KeyUrl';

function App() {



/*
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
  };*/


  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage   />} />
          <Route exact path='/VideoDetailsPage/:videoId' element={<VideoDetailsPage  />} />
          <Route exact path='/UpLoadPage' element={<UpLoadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
