import React from "react";
import './navbar.scss';

const navbar = () =>{
    const handleLogout = () =>{
        window.location.href="/"
    }
    return(
        <div className="navbar">
            <div className="title">
                E-RATION
            </div>
            <div className="login" onClick={()=>{handleLogout()}}>
                LOGOUT
            </div>
        </div>
    )
}
export default navbar;