import React,{useEffect, useState} from "react";

const NavBar =()=> {
   const[showSidebar, setShowSideBar] = useState(true);

 return(
    <div className="navbar container">
      <a href="#!" className="logo">F <span>oo</span>diesHub</a>
      <div className="nav-links" >
         <a href="#!" className="active">Home</a>
         <a href="#!">Recipes</a>
         <a href="#!">Settings</a>
      </div>
      <div onClick={()=>setShowSideBar(!showSidebar)} className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>

      </div>
    </div>
 )
}
export default NavBar;