import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link className='logo' to='/'>Eventoys</Link>
      {/* <Link className="logo" to="/signin">SignIn</Link> */}
      <Link className='signup' to='/signup'>SignUp</Link>
    </header>
  )
}

export default Header;