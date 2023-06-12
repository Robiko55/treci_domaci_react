import React from "react";
import '../App';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-heading">
                <h1> SneakerLovers</h1>
                </div>
           
                <Link to="/">Početna</Link>
                 <div>
                    <Link to="about">O nama</Link>
                 </div>
                 <div>
                <Link to="/favorites">
                Tvoje omiljene patike</Link>
                 </div>

                 
        </div>
    );
};

export default Navbar