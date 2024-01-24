



export default function CommentsForm(props) {
    return (
        <div className="form-container">
            <img className="form-container__avatar" alt="/" ></img>
            <div>
                <h3 className="form-container__title" >JOIN THE CONVERSATION</h3>
                <form >
                    <div>
                        <input className="form-container__name-field" type="text" placeholder="Add name" />
                    </div>
                    <div>
                        <input className="form-container__text-field" type="text" placeholder="Add a new comment" />
                    </div>
                    <button className="form-container__button" type="submmit">COMMENT</button>
                </form>
            </div>
            <div className="divider"></div>
            <div>
                <div>
                    <h3>{props.comments}</h3>
                    <h3>{props.timestamp}</h3>
                </div>
                <p >{props.comment}</p>
            </div>
        </div>
    )
}