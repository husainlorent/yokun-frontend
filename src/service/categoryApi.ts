import { api } from "@/api/axios";
import type { ICategory } from "@/types/category.interface";

export const categoryApi = {
    getCategories: async ():Promise<ICategory[]> => {
        const { data } = await api.get('/category');
        return data.categories;
    },
    getCategoryById: async (id: string) => {
        const { data } = await api.get(`/category/${id}`);
        return data;
    },
}