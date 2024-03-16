import React from 'react'
import { useState } from 'react';
import {Link} from 'react-scroll';
import menu_img from '../Assets/menu_icon2.jpeg'
import logo from '../Assets/Letter-s-logo-design-template-on-transparent-background-PNG.png'
import contact_img from '../Assets/contact-img.jpg'
function Navbar() {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <>
 <nav className='navbar'>
  <img src={logo} alt="" className='logo'/>
  <div className='desktopMenu'>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className='desktopmenulistitem'>About</Link>
    <Link activeClass='active' to='worked projects' spy={true} smooth={true} offset={-100} duration={500}  className='desktopmenulistitem'>Portfolio</Link>
    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}  className='desktopmenulistitem'>Clients</Link>
  
  </div>
  <button className='desktopmenubtn' onClick={()=>{
    document.getElementById("contact").scrollIntoView({behavior:'smooth'})
  }}>
    <img src={contact_img} alt="" className="desktopmenuimg" />Contact Me
  </button>

  <img src={menu_img} alt="Menu" className='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
<div className="navMenu" style={{display : showMenu?  'flex':'none'}}>
  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem'onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='listitem' onClick={()=>setShowMenu(false)}>About</Link>
    <Link activeClass='active' to='worked projects' spy={true} smooth={true} offset={-50} duration={500}  className='listitem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className='listitem'onClick={()=>setShowMenu(false)}>Clients</Link>
    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='listitem'onClick={()=>setShowMenu(false)}>Contact</Link>

    </div>
  </nav> 
 
    </>
  );

  }
export default Navbar;
  