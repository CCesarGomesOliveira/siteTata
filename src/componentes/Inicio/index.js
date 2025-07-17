import { useState } from 'react';
import Button from '../Button';
import CardsDoces from '../cardsDoces';
import { doces } from '../../data/doces';
import './Inicio.css'

const Inicio = () => {
    
    const [activeIndex, setActiveIndex] = useState(null)

    const botoes = ['Para Festas', 'Sobremesas'];

    function aoAtivar (index){

        setActiveIndex(index)
        
    }

    return (
        <main className='inicio--container'>
            <div className='inicio--container-textos'>
                <h1 className='inicio--container-textos-h1'>
                    <span id='docesfinos'>Doces Finos</span> que Abraçam o Coração
                </h1>
                <p className='inicio--container-textos-p'>
                    Descubra o sabor do carinho em cada detalhe. Doces artesanais feitos com afeto, tradição e um toque de sofisticação para tornar seus momentos ainda mais especiais.
                </p>
                </div>
                <div className='botao--container'>
                   {botoes.map((texto, index) => (
        <button
          key={index}
          className={index === activeIndex ? 'botao-ativo' : 'botao-normal'}
          onClick={() => aoAtivar(index)}
        >
          {texto}
        </button>
      ))}
                </div>
                <div className='doces--container'>
                    {doces.filter(doce => {
                        if (activeIndex === null) return true;
                        if (activeIndex === 0) return doce.tipo === 'festa'
                        if (activeIndex === 1) return doce.tipo === 'sobremesa'
                    })
                .map((doce, index) => (
                <CardsDoces key={index} doce={doce} imagem={doce.imagem}/>
            ))}
            </div>
        </main>
    );
}

export default Inicio;