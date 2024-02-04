import React from "react"
import './CommentsList.scss'
import Comments from "./Comments/comments"
export default function CommentsList(props) {



    return (
        <section className="commentsList-container">
           <div className='commentsList-container__divider'></div>
                <Comments
                    key={ props.id}
                    name={props.name}
                    comment={props.comment}
                    timestamp={props.timestamp} />
        </section>
    )
}

