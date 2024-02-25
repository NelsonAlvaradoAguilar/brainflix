import React from "react"
import './VideoDescription.scss';
export default function VideoDescription(props) {
    return (

            <article className="description">

                <h1 className="description__title">{props.title}</h1>
                <div className='description__divider  description__divider--top'></div>
                <div className=" description__interactions">
                    <div className="description__likes-views-channel-timestamp">
                        <p className="description__channel">By {props.channel}</p>
                        <p className="descrition__timestamp">{props.timestamp}</p>
                    </div>
                    <div className="description__likes-views-channel-timestamp">
                        <p className="description__views">{props.views}</p>
                        <p className="description__likes">{props.likes}</p>
                    </div>
                </div>
                <div className='description__divider'></div>
                <p>{props.description}</p>
                
            </article>
           

    )
}
