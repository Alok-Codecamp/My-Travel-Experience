import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png'
import './Nav.css'
const NavBar = () => {
    return (
        <div className='flex justify-between p-4 bg-neutral-100
        shadow-md w-100'>
             <div>
                 <img className='
                 h-12 w-34'  src={logo} alt="" />
             </div>
           
            <div className='flex items-center'>
            <nav className='mr-15'>
              <Link to='/Home'>Home</Link>
              <Link to='/create'>Create</Link>
              <Link to='/admin'>Admin</Link>
              <Link to='/login'>Login</Link>
              <Link to='/logout'>Logout</Link>
            
           </nav>
           <img className='
           inline-block h-12 w-12 rounded-full ring-2 ring-white' src="https://thumbs.dreamstime.com/b/baby-boy-posing-2607278.jpg" alt="hello"/>
          </div>
        </div>
    );
};

export default NavBar;