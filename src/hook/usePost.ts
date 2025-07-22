import { postApi } from '@/service/postApi';
import { useQuery } from '@tanstack/react-query';

const QUERY_KEYS = {
  posts: ['posts'] as const,
  latest: () => [...QUERY_KEYS.posts, 'latest'] as const,
  byId: (id: string) => [...QUERY_KEYS.posts, id] as const,
 byCategory: (id: string) => [...QUERY_KEYS.posts, id] as const,
  list: () => [...QUERY_KEYS.posts, 'list', ] as const,
};

export const useLatestPosts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.latest(),
    queryFn: postApi.getLatestPosts, 
  });
};

export const usePost = (id?: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.byId(id!),
    queryFn: () => postApi.getPostById(id!),
    enabled: Boolean(id),
  });
};

export const usePostByCategory = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.byCategory(id!),
    queryFn: () => postApi.getPostByCategoryId(id!),
    enabled: Boolean(id),
  });
};

export const usePosts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.list(),
    queryFn: () => postApi.getPosts(),
  });
};