export function Footer() {
    return (
        <footer style={{
            backgroundColor: '#1f2937',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
            marginTop: 'auto'
        }}>
            <p>© {new Date().getFullYear()} Farmácia - Todos os direitos reservados</p>
        </footer>
    );
}