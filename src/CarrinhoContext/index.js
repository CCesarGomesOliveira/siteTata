import { createContext, useState } from "react";

export const CarrinhoContext = createContext()


export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([])

     const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);

    const adicionarProduto = (produto) => {
       const temDoce = carrinho.find(item => item.nome === produto.nome)

       if (temDoce) {
        const novaLista = carrinho.map(item => {
            if (item.nome === produto.nome) {
                  return { ...item, quantidade: item.quantidade + 1 }
                  
                 
            }
            return item;
            
        })

        setCarrinho(novaLista)

  } else {
    setCarrinho([...carrinho, { ...produto, quantidade: 1 }])
  }} 

    const removerProduto = (itemPassado) => {

         const itemParaRemover = carrinho.find(item => item.nome === itemPassado);
        
        if (itemParaRemover && itemParaRemover.quantidade > 1) {
            const novaLista = carrinho.map(item => item.nome === itemPassado ? {...item, quantidade: item.quantidade - 1} : item);
            setCarrinho(novaLista)
        } else { 
            const novaLista = carrinho.filter(item => item.nome !== itemPassado);
            setCarrinho(novaLista);
        }
    } 

    const limparCarrinho = () => {
        setCarrinho([])
        
    } 

    const adicionarQuantidade = (produto) => {
        const itemParaAdd = carrinho.find(item => item.nome === produto);
        if (itemParaAdd) {
            const novaLista = carrinho.map(item => item.nome === produto ? {...item, quantidade: item.quantidade + 1} : item);
            setCarrinho(novaLista)
        }
    }



    return (
        <CarrinhoContext.Provider value={{
            carrinho,
            adicionarProduto,
            removerProduto,
            limparCarrinho,
            quantidadeTotal,
            adicionarQuantidade
        }}> {children}

        </CarrinhoContext.Provider>
    )
}