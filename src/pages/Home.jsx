import React from 'react';
import Header from '../components/Header';
import '../styles/Home.scss';
import Perfil from '../img/yo.jpg';

const Home = () => {
  return (
    <React.StrictMode>
      <Header />
      <div className='wallpaper'></div>
      <div className='fond'></div>
      <div className='container'>
        <img src={Perfil} alt="" />
        <h1> Hola, soy <span>Jimmy J. Pecho Malqui</span></h1>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis veritatis minus sequi consequuntur voluptate dolores. Aliquid voluptatem id soluta ex maiores deserunt illum, cupiditate blanditiis, eligendi sed incidunt laborum enim?"</p>
        <ul>
          <span><a className="bi bi-youtube" href=""></a></span>
          <span><a className="bi bi-twitter" href="https://twitter.com/jpmjim"></a></span>
          <span><a className="bi bi-github" href=""></a></span>
        </ul>
      </div>
      
    </React.StrictMode> 
  );
}

export default Home;
