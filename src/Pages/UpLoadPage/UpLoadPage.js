import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiKey, apiUrl } from "../../ApiTools/KeyUrl";
import './UpLoadPage.scss'
import { useNavigate } from "react-router-dom";



export default function UpLoadPage(props) {
    const [video, setVideo] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const [videoDescription, setvideoDescription] = useState('');

   


    const handleChangeVideo = (e) => {
        setVideo(e.target.value);
        console.log(video);
    }
    const handleChangeVideoTitle = (e) => {
        setVideoTitle(e.target.value);
        console.log(videoTitle);
    }

    const handleChangeVideoDescription = (e) => {
        setvideoDescription(e.target.value);
        console.log(videoDescription);
    }
 

        const postVideos = async (video,videoTitle,videoDescription) => {
       
            try {
                const response = await axios.post(`${apiUrl}/videos`, { video, videoTitle, videoDescription });
            console.log(response.data);
            return response.data;
            } catch (error) {
                console.log('this is the error', error);
            }
        }
       
        const handlePostedVideo=async (e)=>{
            e.preventDefault();
            const thumbnailPath = 'http://localhost:8080/images/upload-video-preview.jpg';
            console.log(videoTitle);
            console.log(videoDescription);
            const resp= await postVideos(video,videoTitle,videoDescription,thumbnailPath)
            console.log(resp);
        }



    return (
        <section className="upload-container">
            <h1 className="upload-container__title">Upload Video</h1>

            <div className="upload-container__content">



                <form onSubmit={handlePostedVideo} className="upload-container__form">
                    <div className="upload-container__thumbnail">
                        <h2 className="upload-container__subtitle">VIDEO THUMBNAIL</h2>
                        <input className="upload-container__player"
                          type="file"
                            value={video}
                            onChange={handleChangeVideo}
                        />

                    </div>
                    <label className="upload-container__subtitle">TITLE YOUR VIDEO   <br /><br />
                        <input className="upload-container__input-field"
                            placeholder="Add a title to your video"
                            value={videoTitle}
                            onChange={handleChangeVideoTitle}
                            type="text"
                        />
                    </label>
                    <br /><br />
                    <label className="upload-container__subtitle">ADD A VIDEO DESCRIPTION <br /><br />
                        <input className="upload-container__input-field upload-container__input-field--description"
                            placeholder="Add a description to your video "
                            value={videoDescription}
                            onChange={handleChangeVideoDescription}
                            type="text"
                        />
                    </label><br /><br />
                    <div className="upload-container__buttons">
                        <button type="submit" className="upload-container__button-publish" >PUBLISH</button><br /><br />
                        <button className=" upload-container__button-cancel">CANCEL</button>
                        <button type="submit"  className="upload-container__button-hiden" >PUBLISH</button>
                    </div>
                </form>
            </div>
        </section>
    )
}