import { FormattedDate } from '@/components/common/FormattedDate'
import SectionHeader from '@/components/common/SectionHeader'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { usePostByCategory } from '@/hook/usePost'
import { MoveRight } from 'lucide-react'
import { useMemo } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Pagination from '@/components/common/Pagination'
import EmptyPostState from './EmptyPostState'
import ErrorState from '@/components/common/ErrorState'
import PostSkeleton from './PostSkleton'


const Posts = () => {
  const { categoryId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Math.max(1, parseInt(searchParams.get('page') || '', 10) || 1);


  const { data: response, isLoading, error, refetch } = usePostByCategory(categoryId || "", currentPage)

  const { posts, pagination } = useMemo(() => {
    if (!response) {
      return { posts: [], pagination: null }
    }

    return {
      posts: response.data || [],
      pagination: response.pagination || null
    }
  }, [response])

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() })
  }


  if (isLoading) {
    return (
      <div className='container mx-auto px-4 py-8 min-h-screen'>
        <SectionHeader title='Maqolalar' className='py-8' />
        <div className='space-y-6'>
          {Array.from({ length: 5 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='container mx-auto px-4 py-8 min-h-screen'>
        <SectionHeader title='Maqolalar' className='py-8' />
        <ErrorState onRetry={() => refetch()} />
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className='container mx-auto px-4 py-8 min-h-screen'>
        <SectionHeader title='Maqolalar' className='py-8' />
        <EmptyPostState />
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8 min-h-screen'>
      <div className='flex items-center justify-between mb-8'>
        <SectionHeader title='Maqolalar' className='py-0' />
        {pagination && (
          <div className='text-sm text-gray-600'>
            {pagination.totalItems} ta maqola
          </div>
        )}
      </div>


      <div className='space-y-6'>
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className='border-border-grey flex flex-col overflow-hidden border md:flex-row transition-all duration-200 group hover:shadow-lg rounded-lg bg-white'
            aria-label={`${post.title} maqolasini o'qish`}
          >
            <div className='w-full md:w-1/3 overflow-hidden'>
              <OptimizedImage
                src={post.image || ""}
                alt={post.title || 'Maqola rasmi'}
                className='h-52 w-full object-cover md:h-72 group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='flex-1 p-6'>
              <div className='flex h-full flex-col'>
                <FormattedDate
                  date={post.createdAt}
                  className="text-xs text-gray-500 mb-2"
                />
                <h2 className='mb-3 line-clamp-2 text-xl font-bold text-gray-900 md:text-2xl group-hover:text-blue-600 transition-colors leading-tight'>
                  {post.title}
                </h2>
                <p className='mb-4 line-clamp-3 flex-grow text-gray-600 leading-relaxed'>
                  {post.sub_title}
                </p>
                <div className='mt-auto flex items-center justify-between'>
                  <div className='flex items-center space-x-4 text-xs text-gray-500'>
                    {post.category && (
                      <span className='bg-gray-100 px-2 py-1 rounded'>
                        {post.category.category_name}
                      </span>
                    )}
                  </div>
                  <span className='inline-flex items-center font-medium text-blue-600 group-hover:text-blue-800 transition-colors text-sm'>
                    Batafsil
                    <MoveRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <Pagination
          pageCount={pagination.totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default Posts