import { postApi } from '@/service/postApi';
import { useQuery } from '@tanstack/react-query';

const POST_QUERY_KEYS = {
  posts: ['posts'] as const,
  latest: () => [...POST_QUERY_KEYS.posts, 'latest'] as const,
  byId: (id: string) => [...POST_QUERY_KEYS.posts, id] as const,
  byCategory: (id: string) => [...POST_QUERY_KEYS.posts, id] as const,
  list: () => [...POST_QUERY_KEYS.posts, 'list',] as const,
};

export const useLatestPosts = () => {
  return useQuery({
    queryKey: POST_QUERY_KEYS.latest(),
    queryFn: postApi.getLatestPosts,
  });
};

export const usePost = (id?: string) => {
  return useQuery({
    queryKey: POST_QUERY_KEYS.byId(id!),
    queryFn: () => postApi.getPostById(id!),
    enabled: Boolean(id),
  });
};

export const usePostByCategory = (id: string, page: number = 1) => {
  return useQuery({
    queryKey: [...POST_QUERY_KEYS.byCategory(id), page], 
    queryFn: () => postApi.getPostByCategoryId(id, page),
    enabled: Boolean(id),
  });
};

export const usePosts = () => {
  return useQuery({
    queryKey: POST_QUERY_KEYS.list(),
    queryFn: () => postApi.getPosts(),
  });
};