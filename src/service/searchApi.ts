import { api } from "@/api/axios";
import type { SearchResponse } from "@/types/search.interface";

export const searchApi = {
  searchContent: async (params?: {
    q?: string; 
    page?: number;
    type?: 'news' | 'post';
  }): Promise<SearchResponse> => {
    const { data } = await api.get('/search', { params });
    return data;
  },
};