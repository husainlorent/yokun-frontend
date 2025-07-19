import { useQuery, type UseQueryOptions } from "@tanstack/react-query"
import type { NewsParams } from "../types/news"
import { newsApi } from "../service/newsApi"

export const useNews = (
    params?: NewsParams,
    options?: UseQueryOptions
) => {
    return useQuery({
        queryKey: ['news', params],
        queryFn: () => newsApi.getNews(params),
        staleTime: 5 * 60 * 1000, // 5 daqiqa
        gcTime: 10 * 60 * 1000, // 10 daqiqa
        ...options,
    })
}

// export const useNews = (params?: NewsParams) => {
//   return useQuery({
// queryKey: ['news', params],
// queryFn: () => newsApi.getNews(params),
//     staleTime: 5 * 60 * 1000, // 5 minut fresh
//     cacheTime: 10 * 60 * 1000, // 10 minut cache
//     refetchOnWindowFocus: false,
//   })
// }

export const usePopularNews = () => {
    return useQuery({
        queryKey: ['news', 'popular'],
        queryFn: newsApi.getPopularNews,
        staleTime: 10 * 60 * 1000,
    })
}