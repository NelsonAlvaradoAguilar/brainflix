import './Logo.scss'
import logo from '../../../assets/Logo/BrainFlix-logo.svg';
function Logo() {
    return(
        <img className='app-header__logo' src={logo} alt='brainflix-logo'></img>

    )
}

export default Logo;