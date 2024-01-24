import VideoListJsx from './VIdeoListJsx/VideoListJsx'

import ListOfVideos from '../../data/videos.json'

export default function VideoList() {
    return (
        <>
            <h2>NEXT VIDEOS</h2>
            {ListOfVideos.map((video) => <VideoListJsx
                key={video.id}
                video={video}
            />)}
        </>

    )

}
