import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="Rocketshoes" />
    </Link>
  </header>
);

export default Header;
