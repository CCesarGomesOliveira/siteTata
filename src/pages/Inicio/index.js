import { useRef, useState } from 'react';
import CardsDoces from '../../componentes/cardsDoces';
import { doces } from '../../data/doces';
import Button from '../../componentes/Button';
import styles from './Inicio.modules.css'
import { Link } from 'react-router-dom';



const Inicio = () => {

    const secaoDestinoRef = useRef(null);

    
    const [activeIndex, setActiveIndex] = useState(null)

    const botoes = ['Para Festas', 'Sobremesas'];

    function aoAtivar (index){

        setActiveIndex(index)

         if (secaoDestinoRef.current) {
      secaoDestinoRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
        
    }

    return (
        <>
        <main className='inicio--container'>
            <div className='inicio--container-textos'>
                <h1 className='inicio--container-textos-h1'>
                    <span id='docesfinos'>Doces Finos</span> que Abraçam o Coração
                </h1>
               
                </div>
                <div className='botao--container'>
                   {botoes.map((texto, index) => (
        <Button
          key={index}
          className={index === activeIndex ? 'botao-ativo' : 'botao-normal'}
          onClick={() => aoAtivar(index)}>
          {texto}
        </Button>
      ))}
                </div>
                <div className='doces--container'>
                    {doces.filter(doce => {
                        if (activeIndex === null) return true;
                        if (activeIndex === 0) return doce.tipo === 'festa'
                        if (activeIndex === 1) return doce.tipo === 'sobremesa'
                    })
                .map((doce, index) => (
                <div ref={secaoDestinoRef} className='cardDocescontainer' key={doce.nome}>
                <CardsDoces doce={doce} imagem={doce.imagem}/>
            <Link className='cardDocescontainer-link'  to={`/${doce.nome.toLowerCase().replaceAll(" ", "-")}`}>Quero esse!</Link>
                </div>
            ))}
            </div>
             <p className='inicio--container-textos-p'>
                    Descubra o sabor do carinho em cada detalhe. Doces artesanais feitos com afeto, tradição e um toque de sofisticação para tornar seus momentos ainda mais especiais.
                </p>
        </main>
        </>
    );
}

export default Inicio;