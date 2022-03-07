import React from "react";
import GKeep from  "./img/GKeep.png"
const Header =() => {
    return (
        <>
            <div className="header">
                <img src={GKeep} alt="logo" height='50' width='70'/>
                <h1> GKeep </h1>

            </div>
        </>
    )
}

export default Header;
