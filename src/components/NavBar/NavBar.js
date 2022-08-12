import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavBar.styles.scss";
import { ReactComponent as Logo } from "../../assets/083 crown.svg";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <Link to="/">
            <Logo className="navbar__logo" />
          </Link>
          <div className="navbar__items">
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/sign-in">SIGN IN</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
