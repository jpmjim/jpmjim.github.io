import React from 'react';
import Logo from '../img/log1.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav className='header'>
      <a href="/"><img className='header__logo' src={Logo} alt=""/></a>
      <ul className='header__list'>
        <li><a href="/">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Portfolio">Portfolio</a></li>
      </ul>
      <button className='header__menu' href=""><i className="bi bi-list"></i></button>
    </nav>
  );
}

export default Header;
