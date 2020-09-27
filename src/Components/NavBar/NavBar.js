import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
// import LogoutPage from '../LogoutPage/LogoutPage'

const NavBar = (props) => {
  return props.isLoggedIn ? (
    <div className="header">
      <Link to='/StageSelect/:id'>
        My Stage
      </Link>
      {" | "}
      <Link to='/logout'>
        Logout
      </Link>
    </div>
  ) : (
    <div className="header">
      <Link to='/NewUser'>
        Create Account
      </Link>
      {" | "}
      <Link to='/login'>
        Login
      </Link>
    </div>
  ) 

}

export default NavBar;