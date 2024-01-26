
import Comments from '../../../../data/video-details.json'

export default function CommentsForm(props) {
    return (
        <div className="form-container">
            <img className="form-container__avatar" alt="/" ></img>
            <div>
                <h3 className="form-container__title" >JOIN THE CONVERSATION</h3>
                <form >
                    <div>
                        <input className="form-container__text-field" type="text" placeholder="Add a new comment" />
                    </div>
                    <button className="form-container__button" type="submmit">COMMENT</button>
                </form>
            </div>

           
               
        </div>
    )
}
