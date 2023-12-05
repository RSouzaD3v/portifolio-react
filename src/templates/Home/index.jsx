import { useEffect, useState } from 'react';
import { Experiences } from '../../components/Experiences';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import { Projects } from '../../components/Projects';
import './styles.css';

function Home() {
  const [ thema, setThema ] = useState("");
  const [ open, setOpen ] = useState("");
  const [ btnCall, setBtnCall ] = useState("Temas");

  const handleClickTheme = () => {
    setThema("red");
  }

  const handleClickThemeTwo = () => {
    setThema("blue");
  }

  const handleClickCall = () => {
    setOpen("openThemes")
    if(open === "openThemes"){
      setOpen("")
      setBtnCall("Temas")
    }else{
      setOpen("openThemes")
      setBtnCall("X")
    }
  }

  useEffect(() => {

  })
  

  return (
    <div className='container'>
      <div title='Versão Beta' onClick={handleClickCall} className='callThema'>
        <p>{btnCall}</p>
      </div>

      <section className={'themes' + ' ' + open}>
        <section onClick={handleClickTheme} className='theme' id='themeOne'>
          <div></div>
          <div></div>
        </section>

        <section onClick={handleClickThemeTwo} className='theme' id='themeTwo'>
          <div></div>
          <div></div>
        </section>
      </section>

      <Header />
      <Intro thema={thema} />
      <Experiences />
      <Projects thema={thema} />
      <Footer thema={thema} />
    </div>
  );
}

export default Home;
