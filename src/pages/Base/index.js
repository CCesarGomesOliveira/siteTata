import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";

function Base({ children }){
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>


    )
}

export default Base;