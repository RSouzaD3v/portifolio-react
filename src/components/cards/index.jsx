import "./styles.css";

export const Cards = ({ onlyCard }) => {
    return(

        <section key={onlyCard.id} data-name='website' className="card">
            <div className='card-img'>
                <img src={onlyCard.image} alt="" />
            </div>
            <h1>{onlyCard.typeSite}</h1>
            <p>{onlyCard.used}</p>
        </section>

    );
}