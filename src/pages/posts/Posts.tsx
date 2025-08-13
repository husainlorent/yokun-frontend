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
import { useTranslation } from 'react-i18next'

const Posts = () => {
  const { categoryId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const { t } = useTranslation('common')
  const currentPage = Math.max(1, parseInt(searchParams.get('page') || '', 10) || 1)

  const { data: response, isLoading, error } = usePostByCategory(categoryId || '', currentPage)

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
      <div className='container mx-auto min-h-screen px-4 py-8'>
        <SectionHeader title={t("articles")} className='py-8' />
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
      <div className='container mx-auto min-h-screen px-4 py-8'>
        <SectionHeader title={t("articles")} className='py-8' />
        <ErrorState />
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className='container mx-auto min-h-screen px-4 py-8'>
        <SectionHeader title={t("articles")} className='py-8' />
        <EmptyPostState />
      </div>
    )
  }

  return (
    <div className='container mx-auto min-h-screen px-4 py-8'>
      <div className='mb-8 flex items-center justify-between'>
        <SectionHeader title={t("articles")} className='py-0' />
        {pagination && (
          <div className='text-sm text-gray-600'>{pagination.totalItems} {t("foodArticle")}</div>
        )}
      </div>

      <div className='space-y-6'>
        {posts.map(post => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className='border-border-grey group flex flex-col overflow-hidden rounded-lg border bg-white transition-all duration-200 hover:shadow-lg md:flex-row'
            aria-label={`${post.title} maqolasini o'qish`}
          >
            <div className='w-full overflow-hidden md:w-1/3'>
              {post.image ? (
                <OptimizedImage
                  src={post.image}
                  alt={post.title || 'Maqola rasmi'}
                  className='h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-72'
                />
              ) : null}
            </div>
            <div className='flex-1 p-6'>
              <div className='flex h-full flex-col'>
                <FormattedDate date={post.createdAt} className='mb-2 text-xs text-gray-500' />
                <h2 className='mb-3 line-clamp-2 text-xl leading-tight font-bold text-gray-900 transition-colors group-hover:text-blue-600 md:text-2xl'>
                  {post.title}
                </h2>
                <p className='mb-4 line-clamp-3 flex-grow leading-relaxed text-gray-600'>
                  {post.sub_title}
                </p>
                <div className='mt-auto flex items-center justify-between'>
                  <div className='flex items-center space-x-4 text-xs text-gray-500'>
                    {post.category && (
                      <span className='rounded bg-gray-100 px-2 py-1'>
                        {post.category.category_name}
                      </span>
                    )}
                  </div>
                  <span className='inline-flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-800'>
                    {t('readMore')}
                    <MoveRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
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
