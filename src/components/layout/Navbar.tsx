import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#6b36c8',
            color: 'white',
            padding: '1rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
                    🏥 Farmácia
                </Link>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                    <Link to="/produtos" style={{ color: 'white', textDecoration: 'none' }}>Produtos</Link>
                    <Link to="/produtos/novo" style={{ color: 'white', textDecoration: 'none' }}>+ Produto</Link>
                    <Link to="/categorias" style={{ color: 'white', textDecoration: 'none' }}>Categorias</Link> {/* ← novo link */}
                </div>
            </div>
        </nav>
    );
}