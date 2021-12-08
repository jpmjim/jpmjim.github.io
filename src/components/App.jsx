import React from 'react';
import '../styles/global.scss';
import Photo from '../assets/images/me.jpg';


const App = () => {
  return (
    <div>
      <header className="header">
        <img className="header__img" src={Photo} alt="Jimmy Joel Pecho Malqui" />
        <h1 className="header__title">JIMMY J. PECHO MALQUI</h1>
      </header>
      <main className="main">
      </main>
      <footer className="footer">
          <li className="menu-item">Home</li>
          <li className="menu-item">Galery</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Contant</li>
          <li className="menu-item">Portafolio</li>
      </footer>
    </div>
  );
}

export default App;