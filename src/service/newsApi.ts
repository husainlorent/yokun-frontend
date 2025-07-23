import { api } from "@/api/axios";
import type { INews, NewsResponse } from "@/types/news.interface";

export const newsApi = {
    getLatestNews: async (): Promise<NewsResponse> => {
        const { data } = await api.get('/news/latest');
        return data;
    },
    getNewsById: async (id: string): Promise<INews> => {
        const { data } = await api.get<{ news: INews }>(`/news/${id}`);
        return data.news;
    },

    getAllNews: async (params?: {
        page?: number;
        limit?: number;
        category?: string;
    }): Promise<NewsResponse> => {
        const { data } = await api.get('/news', { params });
        return data;
    },

    getBreakingNews: async (): Promise<INews[]> => {
        const { data } = await api.get('/news/breaking');
        return data;
    },
    
    getRelatedById: async (id: string): Promise<INews[]> => {
        const { data } = await api.get(`/news/related/${id}`);
        return data;
    },
};
