import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh',
            textAlign: 'center',
            padding: '0 1rem'
        }}>
            <h1 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#6b36c8',
                marginBottom: '1rem'
            }}>
                🏥 Bem-vindo à Farmácia
            </h1>
            <p style={{
                fontSize: '1.25rem',
                color: '#4a5568',
                maxWidth: '40rem',
                marginBottom: '2rem'
            }}>
                Gerencie seus produtos de forma simples e eficiente.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link
                    to="/produtos"
                    style={{
                        backgroundColor: '#6b36c8',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5b2ca0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6b36c8'}
                >
                    Ver Produtos
                </Link>
                <Link
                    to="/produtos/novo"
                    style={{
                        backgroundColor: '#22c55e',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
                >
                    Cadastrar Produto
                </Link>
            </div>
        </div>
    );
}
