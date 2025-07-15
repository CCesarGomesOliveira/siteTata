import Button from '../Button';
import CardsDoces from '../cardsDoces';
import { doces } from '../../data/doces';
import './Inicio.css'

const Inicio = () => {
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
                <Button type='button' className={'botao-festa'}>Para Festas</Button>
                <Button type='button' className={'botao-sobremesa'}>sobremesas</Button>
                </div>
                <div className='doces--container'>
                {doces.map((doce, index) => (
                <CardsDoces key={index} doce={doce} />
            ))}
            </div>
        </main>
    );
}

export default Inicio;