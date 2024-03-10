import React from "react"
import './CommentsList.scss'

export default function CommentsList(props) {
   
    return (
     
        <section className="commentsList-container">
           <div className='commentsList-container__divider'></div>
          
           <div className="comments" key={props.id}>          
           <div> <img className="comments__avatar" alt="" ></img></div>
            <div className="comments__field" >
                <div className='comments__name-timestamp'>
                    <h3 className="comments__name">{props.name}</h3>
                    <p className='comments__timestamp'>{props.timestamp}</p>
                </div>
                <p className="comments__field">{props.comment}</p>
              
            </div>
        </div>
        </section>
    )
}

