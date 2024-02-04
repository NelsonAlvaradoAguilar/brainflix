
import "./Form.scss"

export default function Form() {
    return (
        <section className="form" >
            <img className="form__avatar"  alt=""></img>
            <form className="form__container">
                <label className="form__label"
                    htmlFor='comments'>JOIN THE CONVERSATION
                    <div>
                        <input className="form__text-field"
                            type="text"
                            placeholder="Add a new comment"
                            name="comment"
                            id="comment"
                            title="name only accept letter and spaces " required
                        />
                    </div>
                </label>
                <button className="form__button" type="submmit">COMMENT</button>
            </form>
        </section>
    )
}
