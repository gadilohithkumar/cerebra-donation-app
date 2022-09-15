import React, { useState } from 'react';
import './Dropdown.css';
import {Link} from 'react-router-dom';
function Dropdown (){
    const[state,setstate] =useState(false);

    const showDropdown = () =>
    {
        setstate(true); 

    }

    const hideDropdown = () =>
    {
        setstate(false); 
    }
  return (
    <div className='dropdown'>
        <div className='home'>Home</div>
        <div className='hContact USome'>Contact US</div>
        <div className='About'>About</div>
      <div className='dropdown-menu' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        Category Items
        {state ? (  <ul className='dropdown-list' onMouseEnter={showDropdown}>
            <li><Link to='/cloths' className='cloths'>Cloths</Link></li>
            <li><Link to='/Stationary'className='cloths'>Stationary</Link></li>
            {/* <li><a href=''>value</a></li>
            <li><a href=''>4th Value</a></li> 
            <li><a href=''>value</a></li>
            <li><a href=''>4th Value</a></li> */}
        </ul>):null} 
        </div> 
    </div>
  )
}

export default Dropdown
