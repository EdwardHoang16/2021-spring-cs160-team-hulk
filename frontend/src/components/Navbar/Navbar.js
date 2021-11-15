import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Organic Farms
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/services'>
            Services
          </NavLink>
          <NavLink to='/farms/create'>
            Create Farms
          </NavLink>
          <NavLink to='/products/create'>
            Create Products
          </NavLink>
          <NavLink to='/farms'>
            Farms
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
          <NavLink to='/login'>
            Login
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};