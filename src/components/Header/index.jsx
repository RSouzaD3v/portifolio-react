import github from './svg/github.svg';
import behance from './svg/behance.svg';
import linkedin from './svg/linkedin.svg';

import './styles.css';

export const Header = () => {
    return(
        <header>
            <section className="logo">
                <a href="">RafaelF.Souza</a>
            </section>

            <section className="nav-menu">
                <nav>
                    <ul>
                        <li><a href="#"><img src={github} alt="github" /></a></li>
                        <li><a href="#"><img src={behance} alt="behance" /></a></li>
                        <li><a href="#"><img src={linkedin} alt="likendin" /></a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}