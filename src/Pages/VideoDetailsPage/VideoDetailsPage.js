import { useParams } from "react-router-dom"








export default function VideoDetailsPage(props) {
    const videoDetails = props.sideLists;

    const { videoDetailId } = useParams();

    console.log(videoDetails);

    const video = videoDetails.find((videoDetails) => videoDetails.id === videoDetailId)
    console.log(videoDetailId);
    return (
        <section>
            <video controls src={videoDetailId}  width='auto' height='auto'>
               
            </video>
        </section>
    )
}