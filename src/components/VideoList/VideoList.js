import VideoListJsx from './VIdeoListJsx/VideoListJsx'

import ListOfVideos from '../../data/videos.json'

export default function VideoList(props) {
    return (
        <>
            <h2>NEXT VIDEOS</h2>
            {ListOfVideos.map((list) => <VideoListJsx id={list.id}
                image={list.image}
                channel={list.channel}
                title={list.title}
            />)}
        </>

    )

}
