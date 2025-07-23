export interface ApiError {
  message: string
  status: number
  code?: string
  details?: unknown
}

export interface ApiResponse<T> {
  data?: T
  error?: ApiError
  isLoading: boolean
  isSuccess: boolean
}