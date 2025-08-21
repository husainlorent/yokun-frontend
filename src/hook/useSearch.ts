import { searchApi } from "@/service/searchApi";
import { useQuery } from "@tanstack/react-query";

const SEARCH_QUERY_KEYS = {
  search: (query?: string, page?: number, type?: string) => 
    ["search", query, page, type] as const,
};

export const useSearch = (params?: {
  q?: string;
  page?: number;
  type?: 'news' | 'post';
}) => {
  return useQuery({
    queryKey: SEARCH_QUERY_KEYS.search(params?.q, params?.page, params?.type),
    queryFn: () => searchApi.searchContent(params),
    enabled: !!params?.q && params.q.length > 0, 
    staleTime: 1 * 60 * 1000, 
  });
};