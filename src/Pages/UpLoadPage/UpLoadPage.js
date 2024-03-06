import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiKey, apiUrl } from "../../ApiTools/KeyUrl";
import './UpLoadPage.scss'
import { useNavigate } from "react-router-dom";



export default function UpLoadPage(props) {
    const [video, setVideo] = useState('');
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');

   


    const handleChangeVideo = (e) => {
        setVideo(e.target.value);
        console.log(video);
    }
    const handleChangeVideoTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }

    const handleChangeVideoDescription = (e) => {
        setdescription(e.target.value);
        console.log(description);
    }
 

    const postVideos = async (video, title, description, image,timestamp,channel) => {

        try {
            const response = await axios.post(`${apiUrl}/videos`, { video, title, description, image,timestamp,channel });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log('this is the error', error);
        }
    }
       
        const handlePostedVideo = async (e) => {
            e.preventDefault();
            const image = 'http://localhost:8080/images/upload-video-preview.jpg';
            console.log(title);
           const timestamp=new Date().toLocaleDateString();
           const channel='My First Video';
            console.log(image);
            console.log(description);
            const resp = await postVideos(video, title, description, image,timestamp,channel);
            console.log(resp);
        }
/*
    const handleChangeVideoDescription = (e) => {
        setDescription(e.target.value);
        console.log(description);
    }


    const postVideos = async (video, title, description, image,timestamp,channel) => {

        try {
            const response = await axios.post(`${apiUrl}/videos`, { video, title, description, image,timestamp,channel });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log('this is the error', error);
        }
    }

    const handlePostedVideo = async (e) => {
        e.preventDefault();
        const image = 'http://localhost:8080/images/upload-video-preview.jpg';
        console.log(title);
       const timestamp=new Date().toLocaleDateString();
       const channel='My First Video';
        console.log(image);
        console.log(description);
        const resp = await postVideos(video, title, description, image,timestamp,channel);
        console.log(resp);
    }


 */


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
                            value={title}
                            onChange={handleChangeVideoTitle}
                            type="text"
                        />
                    </label>
                    <br /><br />
                    <label className="upload-container__subtitle">ADD A VIDEO DESCRIPTION <br /><br />
                        <input className="upload-container__input-field upload-container__input-field--description"
                            placeholder="Add a description to your video "
                            value={description}
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