
import './VideoList.scss'


export default function VideoList({ videos, pickVideo }) {
    return (
       <section className='list-container'>
         <h2 className='list-container__title' >NEXT VIDEOS</h2>
            {videos.map((video) =>
                <div className="list" key={video.id}  onClick={() => pickVideo(video)}>


                   <div> <img className="list__video" src={video.image} alt={video.title}></img></div>
                    <div className="list__description">
                        <h3 className='list__title'>{video.title}</h3>
                        <p className='list__channel'>{video.channel}</p>


                    </div>


                </div>


            )}
       </section>

    )

}
