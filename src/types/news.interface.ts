export interface INews {
    id: string;
    title: string;
    sub_title?: string;
    image?: string;
    content?: {
        uz?: string;
        kr?: string;
    };
    video?: string;
    video_link_youtube?: string;
    file?: string;
    views?: number;
    tags?: string[];
    status?: boolean;
    createdAt: string;
}

export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    hasNext: boolean;
    hasPrev: boolean;
}

export interface NewsResponse {
    data: INews[];
    latest?: INews;
    secondary?: INews[];
    pagination: PaginationInfo;
}