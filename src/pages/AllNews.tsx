import { AppLink } from '@/components/common/AppLink'
import { FormattedDate } from '@/components/common/FormattedDate'
import Pagination from '@/components/common/Pagination'
import SectionHeader from '@/components/common/SectionHeader'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { useAllNews } from '@/hook/useNews'
import { MoveRight } from 'lucide-react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

const AllNews = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data } = useAllNews()
  const { t } = useTranslation('common')
  const currentPage = Math.max(1, parseInt(searchParams.get('page') || '', 10) || 1)

   const { news, pagination } = useMemo(() => {
      if (!data) {
        return { news: [], pagination: null }
      }
  
      return {
        news: data.data || [],
        pagination: data.pagination || null
      }
    }, [data])
  
    const handlePageChange = (page: number) => {
      setSearchParams({ page: page.toString() })
    }

  return (
    <div className='container mx-auto min-h-screen px-4 py-8'>
      <SectionHeader title='Barcha yangiliklar' className='py-8' />
      <div className='space-y-6'>
        {news.map((item, index) => (
          <AppLink
            key={index}
            to='/post/1'
            className='border-border-grey group flex flex-col overflow-hidden border transition-all duration-200 md:flex-row'
          >
            <div className='w-full overflow-hidden md:w-1/3'>
              <OptimizedImage
                src={item.image || ''}
                alt={item.title || 'News image'}
                className='h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-72'
              />
            </div>
            <div className='flex-1 p-4'>
              <div className='flex h-full flex-col'>
                <FormattedDate
                  className='mt-2 text-xs text-gray-500'
                  date={item.createdAt}
                />
                <h2 className='mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 md:text-2xl'>
                  {item.title}
                </h2>
                <p className='mb-4 line-clamp-3 flex-grow text-gray-600'>
                  {item.sub_title}
                </p>
                <div className='mt-auto flex items-center justify-between'>
                  <span className='inline-flex items-center font-medium text-blue-600 transition-colors group-hover:text-blue-800'>
                    {t('readMore')}
                    <MoveRight className='ml-2 transition-transform group-hover:translate-x-1' />
                  </span>
                </div>
              </div>
            </div>
          </AppLink>
        ))}
      </div>
      {pagination && pagination.totalPages < 1 && (
        <Pagination
          pageCount={pagination.totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default AllNews
