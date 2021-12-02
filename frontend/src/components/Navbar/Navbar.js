import React, { useState, useEffect } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(localStorage.key("isLoggedIn"));
    }
  }, []);

  return (
    <>
      <Nav>
        <NavLink to="/">Organic Farms</NavLink>
        <Bars />
        <NavMenu>
          {isLoggedIn && <NavLink to="/farms/create">Create Farms</NavLink>}
          {isLoggedIn && <NavLink to="/products/create">Create Products</NavLink>}
          <NavLink to="/farms">Search Farms</NavLink>
          <NavLink to="/find-farms">Local Farms</NavLink>
          {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        </NavMenu>
        {!isLoggedIn && 
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        }
        {isLoggedIn && 
          <NavBtn>
            <NavBtnLink to="/account">Account</NavBtnLink>
          </NavBtn>
        }
      </Nav>
    </>
  );
}
