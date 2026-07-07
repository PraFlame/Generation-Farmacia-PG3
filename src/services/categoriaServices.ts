import api from '../api/axiosConfig';
import type { Categoria } from '../types/Categoria';  

export const categoriaService = {
    async listar(): Promise<Categoria[]> {
        const response = await api.get('/categorias');
        return response.data;
    },

    async cadastrar(categoria: Omit<Categoria, 'id'>): Promise<Categoria> {
        const response = await api.post('/categorias', categoria);
        return response.data;
    },

    async atualizar(id: number, categoria: Categoria): Promise<Categoria> {
        const response = await api.put(`/categorias/${id}`, categoria);
        return response.data;
    },

    async deletar(id: number): Promise<void> {
        await api.delete(`/categorias/${id}`);
    },
};