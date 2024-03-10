
import { Link } from 'react-router-dom'
import './VideoList.scss'

export default function VideoList(props) {
  const videos = props.videos;
  return (
    <section className='list-container'>
     <h2 className='list-container__title' >NEXT VIDEOS</h2>
      {videos.map((video) =>
        <Link className="list-container__items" style={{ textDecoration: "none" }} to={`/videos/${video.id}`}  key={video.id} >
       
            <img className="list-container__video" src={video.image} alt={video.title}></img>
            <div className="list-container__description">
              <h3 className='list-container__subtitle'>{video.title}</h3>
              <p className='list-container__channel'>{video.channel}</p>
            </div>
        
        </Link>
      )}
    </section>

  )

}
 //