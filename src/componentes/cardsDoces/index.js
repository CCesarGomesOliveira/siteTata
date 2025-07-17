import './cardsDoces.css'


const CardsDoces = ({ doce }) => {


    return (
      <section className='cardDoces--container'>
        <div className='cardDoces--card'>
            <img src={`imgs/${doce.imagem}`} alt={doce.nome} className='doce--img'/>
            <h2 className='doce--nome'>{doce.nome}</h2>
            <p className='doce--texto'>{doce.descricao}</p>
        </div>
      </section>
           );
}

export default CardsDoces;
