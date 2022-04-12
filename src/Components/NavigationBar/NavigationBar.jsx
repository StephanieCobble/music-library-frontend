import React from "react";
import axios from "axios";
import MusicTable from "../MusicTable/MusicTable";


const NavigationBar = (props) => {
    
    return ( 
<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="getAllSongs">Home</a>
  </li>
  {/* <li className="nav-item">
    <a className="nav-link" href="#">Search</a>
  </li> */}
  <li className="nav-item">
    <a className="nav-link" href="createSong">Create Song</a>
  </li>
  {/* <li className="nav-item">
    <a className="nav-link disabled" href="#">Disabled</a>
  </li> */}
</ul>
     );
}
 
export default NavigationBar;

