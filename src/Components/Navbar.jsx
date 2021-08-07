import React from 'react';
import {IoIosArrowDown} from "react-icons/io";
import {BsSearch} from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">Products <IoIosArrowDown /></li>
              <li className="navbar-item">collections</li>
              <li className="navbar-item">gifts</li>
              <li className="navbar-item">our magazine</li>
            </ul>
            <ul className="navbar-list">
               <li className="navbar-item"><BsSearch /></li>
               <li className="navbar-item">login</li>
               <button className="btn">sign up</button>
            </ul>
        </div>
    )
}

export default Navbar
