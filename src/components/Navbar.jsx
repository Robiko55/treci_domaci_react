import React from "react";
import '../App';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h1> For the sneakers lovers</h1>
                </div>
            <div>
                <Link to="/favorites">
                Your Favorites</Link>
                 </div>
        </div>
    );
};

export default Navbar