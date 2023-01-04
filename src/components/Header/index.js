import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link className='logo' to='/'>Eventoys</Link>
      {/* <Link className="logo" to="/signin">SignIn</Link> */}
      <Link className='person' to='/person'>Registrar Pessoa</Link>
    </header>
  )
}

export default Header;