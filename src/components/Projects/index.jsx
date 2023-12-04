import './styles.css'
import rickSanchez from './rickSanchez.jpg';

export const Projects = () => {
    return(
        <section className="projects">
            <section className='header-projects'>
                <h1>Projetos</h1>
                <a href="#">Contate-Me</a>
            </section>

            <section className='cards'>
                <section className='card'>
                    <div className='card-img'>
                        <img src={rickSanchez} alt="" />
                    </div>
                    <h1>WebSite</h1>
                    <p>Html Css Javascript</p>
                </section>

                <section className='card'>
                    <div className='card-img'>
                        <img src={rickSanchez} alt="" />
                    </div>
                    <h1>WebSite</h1>
                    <p>Html Css Javascript</p>
                </section>

                <section className='card'>
                    <div className='card-img'>
                        <img src={rickSanchez} alt="" />
                    </div>
                    <h1>WebSite</h1>
                    <p>Html Css Javascript</p>
                </section>

                <section className='card'>
                    <div className='card-img'>
                        <img src={rickSanchez} alt="" />
                    </div>
                    <h1>WebSite</h1>
                    <p>Html Css Javascript</p>
                </section>
            </section>
        </section>
    );
}