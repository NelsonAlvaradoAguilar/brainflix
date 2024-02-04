import React from "react";
import './UpLoadPage.scss'



export default function UpLoadPage() {
    return (
        <section className="upload-container">
            <h1 className="upload-container__title">Upload Video</h1>
            <h2 className="upload-container__subtitle">VIDEO THUMBNAIL</h2>
            <div>

                
                    <video className="upload-container__player" poster="">
                    </video>
              
                <form>
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
                    <button className="upload-container__button" >PUBLISH</button><br /><br />
                    <button className=" upload-container__button-cancel">CANCEL</button>
                </form>
            </div>
        </section>
    )
}