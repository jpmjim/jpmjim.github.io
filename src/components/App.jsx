import React from 'react';
import '../styles/global.scss';
import Photo from '../assets/images/logo.png';


const App = () => {
  return (
    <div>
      <header className='header'>
        <a  className='header__logo' href=""><img src={Photo} alt=""/></a>
        <ul className='header__navigation'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;