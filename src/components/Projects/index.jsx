import React, { useEffect, useState } from 'react';
import P from 'prop-types';

import { Cards } from "../cards";

import './styles.css';

//< Imagens >
import bsi from './beautystyleisalena.png';
import bsi2 from './bsi.png';
import imc from './imc.png';
import cryptoWeb from './cryptoWeb.png';
// < /Imagens >

export const Projects = () => {

    const [ projetosCards ] = useState([
        {
            id: 1,
            typeSite: "Lading Page",
            used: "Html Css Javascript",
            image: bsi,
            url: 'https://rsouzad3v.github.io/beautystyleisalena/'
        },
        {
            id: 2,
            typeSite: "Lading Page",
            used: "Html Css Javascript",
            image: bsi2,
            url: 'https://rsouzad3v.github.io/bsi/'
        },
        {
            id: 3,
            typeSite: "Lógica",
            used: "Html Css Javascript",
            image: imc,
            url: 'https://rsouzad3v.github.io/imc/'
        },
        {
            id: 4,
            typeSite: "Web3 - Front End",
            used: "Html Css Javascript",
            image: cryptoWeb,
            url: 'https://rsouzad3v.github.io/cryptoWeb/'
        }
    ]);
    const [ page, setPage ] = useState(0);
    const [ pagePerpage, setPagePerPage ] = useState(2);
    const [ projetosArray, setProjetosArray ] = useState(projetosCards.slice(page, pagePerpage));
    const [ searchValue, setSearchValue ] = useState("");
    const [ textoBtn, setTextoBtn ] = useState("Ver Todos os Projetos");


    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
        if(!value){
            setPage(0)
            setPagePerPage(2)
            setProjetosArray(projetosCards.slice(page, pagePerpage))
        }else{
            let filteredCard = projetosCards.filter((el) => el.typeSite.toLowerCase()
            .includes(searchValue.toLowerCase()));
    
            setProjetosArray(filteredCard);
        }
    }



    const handleClick = () => {
        setPagePerPage(4);
        setProjetosArray(projetosCards.slice(page, pagePerpage))

        if(pagePerpage === 4){
            setPagePerPage(2);
            setTextoBtn("Ver menos")
        }else{
            setPagePerPage(4);
            setProjetosArray(projetosCards.slice(page, pagePerpage))
            setTextoBtn("Ver Todos os Projetos");
        }
    }

    useEffect(() => {
        handleClick();

    }, [])


    return(
        <section className="projects">
            <section className='header-projects'>
                <h1>Projetos</h1>
                <div className="search">
                    <input onChange={handleChange} type="search" name="searchInput" id="searchInput" placeholder='Procurar Projeto...' />
                </div>
            </section>

            <section className='cards' translate='no'>
            {
                projetosArray.map(onlyCard => (
                    <Cards
                        key={onlyCard.id}
                        onlyCard={onlyCard}
                    />

                ))
            }
            </section>

            <button onClick={handleClick} className='btnMais'>{textoBtn}</button>
        </section>
    );
}

Cards.propTypes = {
    onlyCard: P.object.isRequired,
}