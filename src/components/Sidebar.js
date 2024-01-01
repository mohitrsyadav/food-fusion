import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar =(props, close)=> {
 return(
     <div className="sidebar" onClick={props.close}>
         {props.links.map(({ name, path, icon }) => (
             <a className="sidebar-link" href={path}>
                <FontAwesomeIcon icon={icon} />
                {name}
                </a>
         ))}
     </div>
 )
}
export default SideBar;