import React from "react";
import './Header.scss';
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
          <Logo /> 
          <SearchBar /> 
          
           
        </header>
    )
}

export default Header;