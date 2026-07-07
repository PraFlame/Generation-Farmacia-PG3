import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import CadastroProduto from '../pages/CadastroProduto';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/produtos/novo" element={<CadastroProduto />} />
            </Routes>
        </BrowserRouter>
    );
}