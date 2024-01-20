import React from "react";
import './Header.scss';
import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo";

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <SearchBar />
            
        </header>
    )
}

export default Header;