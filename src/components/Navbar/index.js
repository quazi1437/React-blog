import React, { useState } from "react";
import "./styles.css";
import{NavLink}from "react-router-dom";
const Navbar = props => {

    const[search,setSearch]=useState(false);

    const submitSearch=(e) => {
         e.preventDefault(); 
         alert("searched")
    }
    const openSearch=() =>{
        setSearch(true);
    }

    const searchClass=search? "searchinput-active" :"searchinput";
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="/post">posts</NavLink></li>
                
                
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="search"/>
                <img onClick={openSearch} className="searchicon" alt="search" src={require("../../assets/images/search.png")}/>
                </form>
                
            </div>
        </div>
    )
}
export default Navbar;