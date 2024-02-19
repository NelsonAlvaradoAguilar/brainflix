import React from "react";
import './UpLoadPage.scss'



export default function UpLoadPage() {
    return (
        <section className="upload-container">
            <h1 className="upload-container__title">Upload Video</h1>
            
            <div className="upload-container__content">

            <div className="upload-container__thumbnail">
            <h2 className="upload-container__subtitle">VIDEO THUMBNAIL</h2>
                    <video className="upload-container__player" >
                    </video>
            </div>
              
                <form className="upload-container__form">
                    <label className="upload-container__subtitle">TITLE YOUR VIDEO   <br /><br />
                        <input className="upload-container__input-field"
                            placeholder="Add a title to your video"
                        />
                    </label>
                    <br /><br />
                    <label className="upload-container__subtitle">ADD A VIDEO DESCRIPTION <br /><br />
                        <input className="upload-container__input-field upload-container__input-field--description"
                            placeholder="Add a description to your video "
                        />
                    </label><br /><br />
                   <div className="upload-container__buttons">
                   <button className="upload-container__button-publish" >PUBLISH</button><br /><br />
                    <button className=" upload-container__button-cancel">CANCEL</button>
                    <button className="upload-container__button-hiden" >PUBLISH</button>
                   </div>
                </form>
            </div>
        </section>
    )
}