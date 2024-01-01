import React,{useState, useEffect, useRef} from "react";
import SideBar from "./Sidebar";
import { faHome, faList, faCog, faL } from "@fortawesome/free-solid-svg-icons";

const NavBar =()=> {
   const[showSidebar, setShowSideBar] = useState(false);
   const links =[
      {
         name: "Home",
         path:"/",
         icon: faHome
      },
      {
         name: "Recipes",
         path:"/",
         icon: faList
      },
      {
         name: "Settings",
         path:"/",
         icon: faCog
      }
   ];
 
   const closeSideBar =()=>{
      setShowSideBar(false)
   }
 return(
   <>
    <div className="navbar container">
      <a href="#!" className="logo">F <span>oo</span>diesHub</a>
      <div className="nav-links" >
         {links.map(({name, path})=>(
               <a href={path}>{name}</a>
            ))}
      </div>
      <div onClick={()=>setShowSideBar(!showSidebar)} className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    {showSidebar && <SideBar close={closeSideBar} links= {links} />}
    </>
    
 )
}
export default NavBar;