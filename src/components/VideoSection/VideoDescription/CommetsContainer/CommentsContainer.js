import React from "react"
import mainVideo from '../../../../data/video-details.json'
export default function CommentsContainer(props) {

console.log({mainVideo});

    return (
        <div>

            <div key={props.id} >
                <h3>{props.name}egregerg</h3>
                <p>{props.comment}frgrweger</p>
            </div>


        </div>

    )





}
/*
CommentsContainer.defaultProps = {
    comments: {
        key: '',
        name: '',
        comment: ''

    }
}*/