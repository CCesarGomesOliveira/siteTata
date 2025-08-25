import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import Base from './pages/Base';
import NossosDoces from './pages/NossosDoces';
import PaginaCompra from './pages/PaginaCompra';
import { CarrinhoProvider } from './CarrinhoContext';
import PageCarrinho from './pages/PaginaCompra/pageCarrinho';

function AppRoutes() {
  return (
    <div className="App">
      <CarrinhoProvider>
        <BrowserRouter>
        
        <Base>
        <Routes>
          
          <Route path='/' element={<Inicio/>}/>
          <Route path='/nossosdoces' element={<NossosDoces/>}/>
          <Route path='/:id' element={<PaginaCompra></PaginaCompra>}/>
          <Route path='/carrinho' element={<PageCarrinho></PageCarrinho>}/>

        </Routes>
        </Base>
        
      </BrowserRouter>
      </CarrinhoProvider>
    </div>
  );
}

export default AppRoutes;
