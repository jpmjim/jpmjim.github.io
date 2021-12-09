import React from 'react';
import '../styles/global.scss';
import Photo from '../assets/images/profile-pic.png';


const App = () => {
  return (
    <div>
      <header className="header">
        <h1><a href='index'>JIMMY P.</a></h1>
        <ul className='header_menu'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </header>
      <main>
        <img className="header__img" src={Photo} alt="Jimmy Joel Pecho Malqui" />
        <h2>Jimmy J. PECHO MALQUI</h2>
      </main>
    </div>
  );
}

export default App;