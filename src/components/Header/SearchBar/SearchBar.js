import avatarImg from '../../../assets/Images/Mohan-muruge.jpg'
import './SearchBar.scss'
import UpLoadButton from '../UpLoadButton/UpLoadButton';
function SearchBar() {
    return (
        <div className='app-header__search-bar'> <div className='app-header__input-avatar-container' ><input className='app-header__search-input'
            placeholder='Search' /> <img src={avatarImg} className='app-header__avatarImg'></img></div> <UpLoadButton /><img src={avatarImg} className='app-header__hiden-avatar'></img></div>

    )
}

export default SearchBar;