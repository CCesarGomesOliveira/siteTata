import { useParams } from 'react-router-dom';
import styles from './PaginaCompra.module.css';
import { doces } from '../../data/doces';
import { useContext } from 'react'
import { CarrinhoContext } from '../../CarrinhoContext';

const PaginaCompra = () => {



    const { adicionarProduto } = useContext(CarrinhoContext)

    const parametros = useParams()
    const doceSelecionado = doces.find(doce => {
       const nomeFormatado = doce.nome.toLowerCase().replaceAll(" ", "-");
       return nomeFormatado === parametros.id
    })


    return (
        <section className={styles.secaoDoce}>
            <img src={`imgs/${doceSelecionado.imagem}`}/>
        <h3>{doceSelecionado.nome}</h3>
        <p>{doceSelecionado.descricao}</p>
        <button onClick={() => adicionarProduto(doceSelecionado)}>Adicionar ao carrinho!</button>
        </section>
    )
}

export default PaginaCompra;