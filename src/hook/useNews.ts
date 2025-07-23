
import { newsApi } from '@/service/newsApi';
import { useQuery } from '@tanstack/react-query';

const NEWS_QUERY_KEYS = {
    news: ['news'] as const,
    latest: () => [...NEWS_QUERY_KEYS.news, 'latest'] as const,
    byId: (id: string) => [...NEWS_QUERY_KEYS.news, id] as const,
    list: () => [...NEWS_QUERY_KEYS.news, 'list',] as const,
    breaking: () => [...NEWS_QUERY_KEYS.news, 'breaking',] as const,
    related: (id: string) => [...NEWS_QUERY_KEYS.news, 'related', id] as const,


};

export const useLatestNews = () => {
    return useQuery({
        queryKey: NEWS_QUERY_KEYS.latest(),
        queryFn: newsApi.getLatestNews,
    });
};

export const useNews = (id?: string) => {
    return useQuery({
        queryKey: NEWS_QUERY_KEYS.byId(id!),
        queryFn: () => newsApi.getNewsById(id!),
        enabled: Boolean(id),
    });
};


export const useAllBews = () => {
    return useQuery({
        queryKey: NEWS_QUERY_KEYS.list(),
        queryFn: () => newsApi.getAllNews(),
    });
};


export const useBreaking = () => {
    return useQuery({
        queryKey: NEWS_QUERY_KEYS.list(),
        queryFn: () => newsApi.getBreakingNews(),
    })
}

export const useRelated = (id: string) => {
    return useQuery({
        queryKey: NEWS_QUERY_KEYS.related(id!),
        queryFn: () => newsApi.getRelatedById(id!),
        enabled: Boolean(id),
    });
};