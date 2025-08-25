import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import logo from './logoTata.png'
import cartIcon from './cartIcon.png'
import { CarrinhoContext } from '../../CarrinhoContext';
import { useContext } from 'react';
import cartItem from './cartItem.png'


const Header = () => {
    const { carrinho, quantidadeTotal } = useContext(CarrinhoContext)

    const displayTotal = quantidadeTotal > 9 ? '9+' : quantidadeTotal;

    return (
        <header className={styles.container}>
            <div className={styles.logo}>
            <img src={logo} alt='logo Tata Terroni' className={styles.logoImg}/>
            </div>
            <div className={styles.links}>
            <Link to='/' className={styles.link}>Início</Link>
            <Link to='/nossosdoces' className={styles.link}>Nossos Doces</Link>
             <Link to='/carrinho' className={styles.link}> {carrinho.length === 0 ? ( <img src={cartIcon} className={styles.cartIcon}/> ) : (<><img src={cartItem} className={styles.cartItem}/>
        <p className={styles.cartQuant}>{displayTotal}</p> </> )}  </Link>
            </div>
        </header>
    )
}

export default Header;