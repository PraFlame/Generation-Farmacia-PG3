import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import CadastroProduto from '../pages/CadastroProduto';
import ListarCategorias from '../pages/ListarCategorias'; // ← importe

export function AppRoutes() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/produtos/novo" element={<CadastroProduto />} />
                        <Route path="/categorias" element={<ListarCategorias />} /> {/* ← nova rota */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}