import React from "react";
import './Header.scss';
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="App-header">
           <NavLink to="/"><Logo /> </NavLink> 
           <NavLink to="/UpLoadPage"><SearchBar /></NavLink>  
           
        </header>
    )
}

export default Header;