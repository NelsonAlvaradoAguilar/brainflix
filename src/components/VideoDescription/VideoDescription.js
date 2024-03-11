import React,{useParams,useState} from "react";
import './VideoDescription.scss';

import axios from'axios';
import { apiUrl } from "../../ApiTools/KeyUrl";
export default function VideoDescription(props,) {
    const videoId =props.videoId;
  
    const [commentsLikes, setCommentsLikes] = useState();

    const handlingLikeButtonClick = async (likes) => {
        try {
            const response = await axios.put(`${apiUrl}/videos/${videoId}/likes`, { likes:commentsLikes});
            console.log(response.data.likes);
            setCommentsLikes(response.data.likes);
        } catch (error) {
            console.log('error', error);
        }
    }

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
                        <p className="description__likes">{commentsLikes}</p>
                    </div>
                </div>
                <div className='description__divider'></div>
                <p>{props.description}</p>
                <div><button onClick={handlingLikeButtonClick}>like</button></div>
            </article>
           

    )
}
