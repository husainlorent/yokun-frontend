export interface IPost {
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
  views: number;
  category: {
    category_id: string
    category_name: string
  };
  tags: string[];
  status: boolean;
  createdAt: string;
}

export interface PostsResponse {
  posts: IPost[];
  total: number;
  page: number;
  limit: number;
}
