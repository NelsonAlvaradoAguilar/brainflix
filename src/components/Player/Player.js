
import './player.scss'

export default function Player(props) {
    const { video } = props


    return (

        <section className="player">

            <div className="player__container">
                <video className="player__video  player__video--padding"  controls poster={video.image}>
                    <source src={`${video.video}`} type='video/mp4' />
                </video>
            </div>
        </section>
    )


}



