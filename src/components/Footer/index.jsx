import './styles.css';
import github from '../Header/svg/github.svg';
import behance from '../Header/svg/behance.svg';
import linkedin from '../Header/svg/linkedin.svg';

export const Footer = () => {
    return(
        <footer>
            <div className='textos-footer'>
                <h1>CONTATE-ME</h1>
                <p>Deixe-me ajudar com seu projeto.</p>
            </div>
            <div className="icones">
                <a href="#"><img src={github} alt="" /></a>
                <a href="#"><img src={behance} alt="" /></a>
                <a href="#"><img src={linkedin} alt="" /></a>
            </div>
            <span className='lineFooter'></span>
        </footer>
    );
}