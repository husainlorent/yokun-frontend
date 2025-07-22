import { categoryApi } from "@/service/categoryApi";
import { useQuery } from "@tanstack/react-query";

const CATEGORY_QUERY_KEYS = {
  category: ['category'] as const,
  byId: (id: string) => [...CATEGORY_QUERY_KEYS.category, id] as const,
  all: () => [...CATEGORY_QUERY_KEYS.category, 'all',] as const,
};

export const useCategories = () => {
  return useQuery({
    queryKey: CATEGORY_QUERY_KEYS.all(),
    queryFn: () => categoryApi.getCategories(),
  });
};

export const useCategory = (id?: string) => {
  return useQuery({
    queryKey: CATEGORY_QUERY_KEYS.byId(id!),
    queryFn: () => categoryApi.getCategoryById(id!),
    enabled: Boolean(id),
  });
}