import { api } from "../api/axios"
import type { ApiResponse } from "../types/api"
import type {  News, NewsParams } from "../types/news"


export const newsApi = {
  getNews: async (params?: NewsParams): Promise<ApiResponse<News[]>> => {
    const { data } = await api.get('/news', { params })
    return data
  },

  getNewsById: async (id: string): Promise<ApiResponse<News>> => {
    const { data } = await api.get(`/news/${id}`)
    return data
  },

  getPopularNews: async (): Promise<ApiResponse<News[]>> => {
    const { data } = await api.get('/news/popular')
    return data
  },

  getNewsByCategory: async (categoryId: string): Promise<ApiResponse<News[]>> => {
    const { data } = await api.get(`/news/category/${categoryId}`)
    return data
  },

  searchNews: async (query: string): Promise<ApiResponse<News[]>> => {
    const { data } = await api.get(`/news/search`, { params: { q: query } })
    return data
  }
}