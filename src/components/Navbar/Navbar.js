import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/logo.png'

const Navbar = () => {

   const menuItems=(
    <>
     <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
     </>
   )
  
  

    return (
        <div>
           <div class="navbar bg-gradient-to-r from-slate-800 to-violet-800">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu text-xl font-bold menu-compact text-purple-600 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to={'/'} class="btn btn-ghost text-white normal-case text-xl">
      SholayMan
    </Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu text-white text-xl font-bold menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  {/* <div class="navbar-end">
    <Link to={'/'} class="btn">Get started</Link>
  </div> */}
</div> 
        </div>
    );
};

export default Navbar;