import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar navbar-expand-lg'>
        
           
             <Link to='/home'className='navbar-brand text-white'>LOGO</Link>
             
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
             <span class="navbar-toggler-icon"></span>
              </button>
             <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <Link  to='/home' className='nav-link text-white '>Home</Link>
            <Link to='/about' className='nav-link text-white'>About</Link>
            <Link to='/contact' className='nav-link text-white'>Contact Us</Link>
           
            </div>
       
     </nav>
  )
}

export default Header