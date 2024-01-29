import avatarImg from '../../../assets/Images/Mohan-muruge.jpg'
import './SearchBar.scss'
import UpLoadButton from '../UpLoadButton/UpLoadButton';
function SearchBar() {
    return (
        <div className='search-bar'> <div className='search-bar__input-avatar' ><input className='search-bar__search-input'
            placeholder='Search' /> <img src={avatarImg} alt='avatar' className='search-bar__avatarImg'></img></div> <UpLoadButton /><img alt='avatar' src={avatarImg} className='search-bar__hiden-avatar'></img></div>

    )
}

export default SearchBar;