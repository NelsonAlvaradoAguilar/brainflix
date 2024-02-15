
import {Link} from 'react-router-dom'
import './VideoList.scss'

export default function VideoList(props) {
const videos=props.videos 
    return (
       <section className='list-container'>
         <h2 className='list-container__title' >NEXT VIDEOS</h2>
            {videos.map((video) =>

              <Link className="list"   to={`/videos/${video.id}`} key={video.id}>
               
                   <div > <img className="list__video" src={video.image} alt={video.title}></img></div>
                    <div className="list__description">
                        <h3 className='list__title'>{video.title}</h3>
                        <p className='list__channel'>{video.channel}</p>
                    </div>
             
              </Link>
            )}
       </section>

    )

}
