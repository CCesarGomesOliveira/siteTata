import styles from './PageCarrinho.module.css'
import { useContext } from "react"
import { CarrinhoContext } from "../../../CarrinhoContext"
import botaoMenos from './botaoMenos.png'
import botaoMais from './botaoMais.png'

const PageCarrinho = () => {

     const { carrinho, adicionarQuantidade, removerProduto } = useContext(CarrinhoContext)
     console.log("Carrinho atual:", carrinho);


    return (
        <section className={styles.secao}>
            <h2 className={styles.titulo}>Meu Carrinho</h2>
              {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (carrinho.map((item) => (
          <div className={styles.produtoContainer} key={item.nome}>
            <img className={styles.imagem} src={`imgs/${item.imagem}`} alt={item.nome} />
            <div className={styles.infos}>
            <h4>{item.nome}</h4>
            <p>Quantidade: {item.quantidade}</p>
            
            </div>
            <div className={styles.actions}>
              <img sizes='25px' src={botaoMenos} onClick={() => removerProduto(item.nome)}/>
              <img src={botaoMais} onClick={() => adicionarQuantidade(item.nome)}/>
            </div>
          </div>
          ))
        )}
        </section>
    
    )
}

export default PageCarrinho;