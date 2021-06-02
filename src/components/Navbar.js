import React,{useState,useEffect} from 'react';
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
//export default function Navbar() {
    const Navbar = () => {
        const [prevScrollPos, setPrevScrollPos] = useState(0);     
        const [visible, setVisible] = useState(false); 
        const navbarStyles = {
            position: 'fixed',
            width: '100%',
            transition: 'top 0.6s' 
           }
        //Scroll Feature created
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible((prevScrollPos < currentScrollPos && prevScrollPos - currentScrollPos < 70) || currentScrollPos > 10);
            setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {     
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);
    return (
        <div>
        <nav className="navbar" style={{ ...navbarStyles, top: visible ? '0' : '-260px' }}>
        <button className="sw-logo-nav">
          SW
          </button>
      <div className="btn-div-main">
      <button className="sw-buttons"        onClick={()=> window.open("https://www.scoopwhoop.com/?ref=nav_to")}>
          TRENDING
          </button>
          <button className="sw-buttons"    onClick={()=> window.open("https://www.scoopwhoop.com/watch/?ref=nav_top")}>
          VIDEOS
          </button>
          <button className="sw-buttons"     onClick={()=> window.open("https://www.scoopwhoop.com/read/?ref=nav_top")}>
          STORIES
          </button>
          <button className="sw-buttons"     onClick={()=> window.open("https://www.scoopwhoop.com/play/?ref=nav_top")}>
          QUIZES
          </button>
          <button className="sw-buttons"    onClick={()=> window.open("https://www.scoopwhoop.com/laugh/?ref=nav_top")}>
          MEMES
          </button>
          <button className="sw-buttons"    onClick={()=> window.open("https://www.scoopwhoop.com/spotlight/?ref=nav_top")}>
          SPOTLIGHT
          </button>

          <button className="sw-icons-bookmark">
    <FontAwesomeIcon icon={faBookmark} />
        </button>
        <button className="sw-icons">
    <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="sw-icons">
    <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="sw-icons-menu">
    <FontAwesomeIcon icon={faBars} />
        </button>
</div>
      </nav>
      <ul className="sidenav" id="mobile-demo">              
      </ul>
    </div>
    )
}
export default Navbar;