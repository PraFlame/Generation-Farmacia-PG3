import { useState, useEffect } from 'react';
import type { Categoria } from '../../types/Categoria'; 

interface FormCategoriaProps {
    categoria?: Categoria;
    onSubmit: (data: Omit<Categoria, 'id'>) => void;
    onCancel: () => void;
}

export function FormCategoria({ categoria, onSubmit, onCancel }: FormCategoriaProps) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if (categoria) {
            setNome(categoria.nome);
            setDescricao(categoria.descricao || '');
        }
    }, [categoria]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ nome, descricao });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
            <h2>{categoria ? 'Editar Categoria' : 'Nova Categoria'}</h2>

            <div>
                <label style={{ display: 'block', marginBottom: '4px' }}>Nome *</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '4px' }}>Descrição</label>
                <input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" style={{ background: '#6b36c8', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Salvar
                </button>
                <button type="button" onClick={onCancel} style={{ background: '#6b7280', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Cancelar
                </button>
            </div>
        </form>
    );
}