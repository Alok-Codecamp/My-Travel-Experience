import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
const NavBar = () => {
    return (
        <div className='flex justify-between p-4 bg-neutral-100
        shadow-md'>
             <div>
                 <img src="" alt="" />
             <h2 className='
             text-lg
             '
             > Brand</h2>
             </div>
           
           <nav className=''>
              <Link to='/Home'/>
            <img src="" alt="hello" />
           </nav>
        </div>
    );
};

export default NavBar;