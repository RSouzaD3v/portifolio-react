import './styles.css';
import React from 'react';

export const Intro = () => {
    return(
        <section className='intro'>
            <div className='ball'></div>
            <h1 translate='no'>Nice to meet you! <br />
            I`m <span className='myName'>Rafael F Souza.</span></h1>
            <p>Desenvolvedor front-end, com grande noção no back-end,<br />
            brevemente poderei ser chamado de <span className="fullStackText">Full-Stack.</span></p>

            <span className='line'></span>
        </section>
    );
}
