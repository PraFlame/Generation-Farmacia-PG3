import type { Categoria } from '../../types/Categoria';  

interface CardCategoriaProps {
    categoria: Categoria;
    onEdit: (categoria: Categoria) => void;
    onDelete: (id: number) => void;
}

export function CardCategoria({ categoria, onEdit, onDelete }: CardCategoriaProps) {
    return (
        <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <h3 style={{ margin: 0 }}>{categoria.nome}</h3>
                {categoria.descricao && <p style={{ margin: '4px 0 0', color: '#6b7280' }}>{categoria.descricao}</p>}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                    onClick={() => onEdit(categoria)}
                    style={{ background: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Editar
                </button>
                <button
                    onClick={() => onDelete(categoria.id)}
                    style={{ background: '#ef4444', color: 'white', padding: '0.25rem 0.75rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Deletar
                </button>
            </div>
        </div>
    );
}