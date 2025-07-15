import './Header.css';

const Header = () =>{
    return(
        <header className='cabecalho--container'>
            <div className='cabecalho--container-logo'>
                <img src='/imgs/logoTata.png' alt='logo da Tata Terroni'/>
            </div>
            <div className='cabecalho--container-menu'>
                <div className='menu-lines'></div>
                <div className='menu-lines'></div>
                <div className='menu-lines'></div>
            </div>
        </header>
    );
};

export default Header;