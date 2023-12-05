import github from './svg/github.svg';
import behance from './svg/behance.svg';
import linkedin from './svg/linkedin.svg';

import './styles.css';

export const Header = () => {
    return(
        <header>
            <section className="logo">
                <a target='_blank' rel='noreferrer' href="https://github.com/RSouzaD3v">RafaelF.Souza</a>
            </section>

            <section className="nav-menu">
                <nav>
                    <ul>
                        <li><a target='_blank' rel="noreferrer" href="https://github.com/RSouzaD3v"><img src={github} alt="github" /></a></li>
                        <li><a target='_blank' rel="noreferrer" href="https://www.behance.net/rafaelnascime83"><img src={behance} alt="behance" /></a></li>
                        <li><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/rafael-francisco-022226255/"><img src={linkedin} alt="likendin" /></a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}