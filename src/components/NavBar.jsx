import React, { useState, useEffect }from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  return (
    <div>
      <MenuIcon />

      <ul>
        <li>
            <a href='#'>Home</a>
        </li>
        <li>
            <a href='#'>About Us</a>
        </li>
        <li>
            <a href='#'>Products</a>
        </li>
        <li>
            <a href='#'>Blogs</a>
        </li>
        <li>
            <a href='#'>Contact Us</a>
        </li>
        <li>
        <SearchIcon />
        <CloseIcon />
        </li>
      </ul>
    </div>
  )
}

export default NavBar
