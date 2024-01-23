import React from "react"


export default  function VideoDescription(props) {

    return (

        <>
            <div>

                <h1 >{props.title}</h1>
                <div className='divider'></div>
                <div>
                    <p>{props.channel}</p>
                    <p>{props.timestamp}</p>
                    <p>{props.views}</p>
                    <p>{props.likes}</p>
                </div>

                <p>{props.description}</p>
            </div>

        </>


    )
}

VideoDescription.defaultProps = {
  
   key:'',
    video:"",
    title:"",
    channel:"",
    timestamp:"",
    views:"",
    likes:"",
    description:""
};