import { Experiences } from '../../components/Experiences';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import './styles.css';

function Home() {
  return (
    <div className='container'>
      <Header />
      <Intro />
      <Experiences />
    </div>
  );
}

export default Home;
