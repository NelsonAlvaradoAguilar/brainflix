import './Logo.scss'
import logo from '../../../assets/Logo/BrainFlix-logo.svg';
import { NavLink } from 'react-router-dom';
function Logo() {
    return(
        <NavLink to="/"> <img className='app-header__logo' src={logo} alt='brainflix-logo'></img></NavLink>    

    )
}

export default Logo;