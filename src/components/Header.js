import React from 'react';
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
//React,Header.css,FontAwesome-Icons Imported
export default function Header(){
//Variables Defined
    var buttons =  document.querySelectorAll('.nav-btn');
    var activeClassName = 'active';
    //Function for Active states of Buttons
    function activeState(items, activeName) {
      for(var i = 0; i < items.length; i++) {
        if(items[i].classList.contains(activeName)) {
          items[i].classList.remove(activeName);
        }
      }
    }
    
    for(var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(e){
        activeState(buttons, activeClassName);
        e.target.classList.add(activeClassName);
      });
    }
    return(
// Header Navigaton Buttons
 <div className="header-main">
     <div className="action-center">
         <button className="logo-main" onClick={()=> window.open("https://www.scoopwhoop.com/?ref=nav_list")}>
         Schoopwhoop
             </button>

             <button className="sw-buttons-main"  onClick={()=> window.open("https://www.scoopwhoop.com/?ref=nav_to")}>
          TRENDING
          </button>
          <button className="sw-buttons-main"    onClick={()=> window.open("https://www.scoopwhoop.com/watch/?ref=nav_top")}>
          VIDEOS
          </button>
          <button className="sw-buttons-main"     onClick={()=> window.open("https://www.scoopwhoop.com/read/?ref=nav_top")}>
          STORIES
          </button>
          <button className="sw-buttons-main"     onClick={()=> window.open("https://www.scoopwhoop.com/play/?ref=nav_top")}>
          QUIZES
          </button>
          <button className="sw-buttons-main"    onClick={()=> window.open("https://www.scoopwhoop.com/laugh/?ref=nav_top")}>
          MEMES
          </button>
          <button className="sw-buttons-main"    onClick={()=> window.open("https://www.scoopwhoop.com/spotlight/?ref=nav_top")}>
          SPOTLIGHT
          </button>

          <button className="sw-icons-bookmark-main">
    <FontAwesomeIcon icon={faBookmark} />
        </button>
        <button className="sw-icons-main">
    <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="sw-icons-main">
    <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="sw-icons-menu-main">
    <FontAwesomeIcon icon={faBars} />
        </button>
             
         </div>
     <div className="header-readarticle"
                onClick={()=> window.open("https://www.scoopwhoop.com/entertainment/movies-that-were-copied/?ref=read_masthead")}
    >
         <button className="sw-entmnt-btn"
         onClick={()=> window.open("https://www.scoopwhoop.com/category/entertainment/?ref=home_masthead")}>
             ENTERTAINMENT
             </button>
       <p className="sw-heading">  16 Fan Favourite Cult Movies That You Didn"t Know Were<br/>
            Copied 
           </p>
           <button className="sw-readarticle-btn"
           onClick={()=> window.open("https://www.scoopwhoop.com/entertainment/movies-that-were-copied/?ref=read_masthead")}>
               
               read article btn </button>
         </div>
         <div className="nav-btn-btn">
     <button className="nav-btn">
         FRESH
         </button>
         <button className="nav-btn">
         HOT
         </button>
   <div className="btn-line">
       
       </div>
    </div>        
     </div>





    )
}