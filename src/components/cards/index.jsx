import P from 'prop-types';
import "./styles.css";
import React from 'react';

export const Cards = ({ onlyCard }) => {
    return(

        <a target='_blank' rel='noreferrer' href={onlyCard.url} className='linkCard'>
            <section key={onlyCard.id} data-name='website' className="card">
                <div className='card-img'>
                    <img src={onlyCard.image} alt="" />
                </div>
                <h1>{onlyCard.typeSite}</h1>
                <p>{onlyCard.used}</p>
            </section>
        </a>

    );
}

Cards.propTypes = {
    onlyCard: {
        id: P.string.isRequired,
        image: P.string.isRequired,
        typeSite: P.string.isRequired,
        used: P.string.isRequired
    }
}
