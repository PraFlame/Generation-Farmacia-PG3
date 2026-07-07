import { useEffect, useState } from 'react';
import { categoriaService } from '../services/categoriaServices';
import type { Categoria } from '../types/Categoria';  
import { CardCategoria } from '../components/categoria/CardCategoria';
import { FormCategoria } from '../components/categoria/FormCategoria';

export default function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editando, setEditando] = useState<Categoria | undefined>(undefined);

    useEffect(() => {
        carregarCategorias();
    }, []);

    const carregarCategorias = async () => {
        try {
            const data = await categoriaService.listar();
            setCategorias(data);
        } catch (err) {
            setError('Erro ao carregar categorias');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCadastrar = async (data: Omit<Categoria, 'id'>) => {
        try {
            await categoriaService.cadastrar(data);
            await carregarCategorias();
            setShowForm(false);
        } catch (err) {
            alert('Erro ao cadastrar categoria');
            console.error(err);
        }
    };

    const handleAtualizar = async (data: Omit<Categoria, 'id'>) => {
        if (!editando) return;
        try {
            await categoriaService.atualizar(editando.id, { ...data, id: editando.id });
            await carregarCategorias();
            setEditando(undefined);
        } catch (err) {
            alert('Erro ao atualizar categoria');
            console.error(err);
        }
    };

    const handleDeletar = async (id: number) => {
        if (!confirm('Tem certeza que deseja deletar esta categoria?')) return;
        try {
            await categoriaService.deletar(id);
            await carregarCategorias();
        } catch (err) {
            alert('Erro ao deletar categoria');
            console.error(err);
        }
    };

    if (loading) return <p>Carregando...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h1>Categorias</h1>
                <button
                    onClick={() => setShowForm(true)}
                    style={{ background: '#22c55e', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    + Nova Categoria
                </button>
            </div>

            {(showForm || editando) && (
                <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <FormCategoria
                        categoria={editando}
                        onSubmit={editando ? handleAtualizar : handleCadastrar}
                        onCancel={() => {
                            setShowForm(false);
                            setEditando(undefined);
                        }}
                    />
                </div>
            )}

            {categorias.length === 0 ? (
                <p>Nenhuma categoria cadastrada.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {categorias.map((cat) => (
                        <CardCategoria
                            key={cat.id}
                            categoria={cat}
                            onEdit={setEditando}
                            onDelete={handleDeletar}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}