import { api } from "@/api/axios";
import type { IPost, PostsResponse } from "@/types/post.interface";

export const postApi = {
  getLatestPosts: async (): Promise<IPost[]> => {
    const { data } = await api.get('/post/latest');
    return data.post;
  },
  getPostById: async (id: string): Promise<IPost> => {
    const { data } = await api.get<{ post: IPost }>(`/post/${id}`);
    return data.post;
  },

  getPostByCategoryId: async (id: string, page: number = 1): Promise<PostsResponse> => {
    const { data } = await api.get(`/post/get-by-category/${id}?page=${page}`);
    return data;
  },


  getPosts: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
  }): Promise<PostsResponse> => {
    const { data } = await api.get('/posts', { params });
    return data;
  }
};
