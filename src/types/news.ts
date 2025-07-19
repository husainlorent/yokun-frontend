export interface News {
  id: string
  title: string
  description: string
  content: string
  imageUrl: string
  categoryId: string
  createdAt: string
  updatedAt: string
}



export interface NewsParams {
  page?: number
  limit?: number
  categoryId?: string
  search?: string
}
