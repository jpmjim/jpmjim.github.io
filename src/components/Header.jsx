import React from 'react';
import Logo from '../img/log1.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav>
      <a href=""><img src={Logo} alt="" /></a>
      <ul className="text-rose-600">
        <li><a href="/">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Portfolio">Portfolio</a></li>
      </ul>
    </nav>
  );
}

export default Header;
