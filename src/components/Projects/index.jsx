import './styles.css'
import { Cards } from "../cards";
import rickSanchez from './rickSanchez.jpg';
import { useState } from 'react';

export const Projects = () => {
    const [ projetosCards ] = useState([
        {
            id: 1,
            typeSite: "WebSite",
            used: "Html Css Javascript",
            image: rickSanchez
        },
        {
            id: 2,
            typeSite: "Lading Page",
            used: "Html Css",
            image: rickSanchez
        },
        {
            id: 3,
            typeSite: "WebApp",
            used: "Html Css Javascript",
            image: rickSanchez
        },
        {
            id: 4,
            typeSite: "E-Commerce",
            used: "Java",
            image: rickSanchez
        }
    ])

    const [ page, setPage ] = useState(0);
    const [ pagePerpage, setPagePerPage ] = useState(2);

    const [ projetosFake, setProjetosFakes ] = useState(projetosCards.slice(page, pagePerpage));

    const [ searchValue, setSearchValue ] = useState("");
    const [ textoBtn, setTextoBtn ] = useState("Ver Todos os Projetos");


    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
        if(value === ""){
            setPage(0)
            setPagePerPage(2)
            setProjetosFakes(projetosCards.slice(page, pagePerpage))
        }else{
            filtragem();
        }
    }

    const filtragem = () => {
        const filteredCard = projetosCards.filter((el) => el.typeSite.toLowerCase()
        .includes(searchValue.toLowerCase()));

        setProjetosFakes(filteredCard);
    }


    const handleClick = () => {
        setPagePerPage(4);
        setProjetosFakes(projetosCards.slice(page, pagePerpage))
        if(pagePerpage === 4){
            setPagePerPage(2);
            setTextoBtn("Ver menos")
        }else{
            setPage(0);
            setPagePerPage(4);
            setProjetosFakes(projetosCards.slice(page, pagePerpage))
            setTextoBtn("Ver todos os projetos");
        }
    }


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
                projetosFake.map(onlyCard => (
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