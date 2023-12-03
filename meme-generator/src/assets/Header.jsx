import React from "react";
import logo from "/Logo.png"
function Header(){
    return(
        <nav className="header">
            <img src={logo} alt="Meme generator logo" srcset="" />
            <h1>React Course - Project 3</h1>
        </nav>
    )
}

export default Header