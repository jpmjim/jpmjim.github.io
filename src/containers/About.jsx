import React from 'react';
import '../styles/About.scss';
import Header from '../components/Header';

const About = () => {
  return (
    <React.StrictMode>
      <Header />
      <main className='about'>
        <h2>About</h2>
      </main> 
    </React.StrictMode> 
    
  );
}

export default About;