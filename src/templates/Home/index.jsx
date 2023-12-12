import React from 'react';


import { Experiences } from '../../components/Experiences';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import { Projects } from '../../components/Projects';


import './styles.css';


function Home() {
  return (
    <div className='container'>
      <Header />
      <Intro />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
