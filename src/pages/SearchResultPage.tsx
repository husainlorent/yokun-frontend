import { AppLink } from '@/components/common/AppLink'
import { FormattedDate } from '@/components/common/FormattedDate'
import Pagination from '@/components/common/Pagination'
import SectionHeader from '@/components/common/SectionHeader'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { useSearch } from '@/hook/useSearch'
import { MoveRight, Search as SearchIcon } from 'lucide-react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

const SearchResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { t } = useTranslation('common')
  
  const query = searchParams.get('q') || ''
  const currentPage = Math.max(1, parseInt(searchParams.get('page') || '', 10) || 1)
  
  const { data, isLoading, error } = useSearch({
    q: query,
    page: currentPage
  })

  const { results, pagination } = useMemo(() => {
    if (!data) {
      return { results: [], pagination: null }
    }
    return {
      results: data.data || [],
      pagination: data.pagination || null
    }
  }, [data])

  const handlePageChange = (page: number) => {
    setSearchParams({ q: query, page: page.toString() })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  if (isLoading) {
    return (
      <div className='container mx-auto min-h-screen px-4 py-8'>
        <SectionHeader title={t('searchResults')} className='py-8' />
        <div className='space-y-6'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='border-border-grey flex animate-pulse border'>
              <div className='h-52 w-full bg-gray-200 md:h-72 md:w-1/3'></div>
              <div className='flex-1 p-4'>
                <div className='h-4 w-20 bg-gray-200 mb-3'></div>
                <div className='h-6 w-3/4 bg-gray-200 mb-3'></div>
                <div className='h-4 w-full bg-gray-200 mb-2'></div>
                <div className='h-4 w-2/3 bg-gray-200'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='container mx-auto min-h-screen px-4 py-8'>
        <SectionHeader title={t('searchResults')} className='py-8' />
        <div className='flex items-center justify-center py-20'>
          <div className='text-center'>
            <SearchIcon className='mx-auto h-12 w-12 text-gray-400 mb-4' />
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              {t('searchError')}
            </h3>
            <p className='text-gray-600'>{t('tryAgainLater')}</p>
          </div>
        </div>
      </div>
    )
  }


  if (!query) {
    return (
      <div className='container mx-auto min-h-screen px-4 py-8'>
        <SectionHeader title={t('search')} className='py-8' />
        <div className='flex items-center justify-center py-20'>
          <div className='text-center'>
            <SearchIcon className='mx-auto h-12 w-12 text-gray-400 mb-4' />
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              {t('enterSearchQuery')}
            </h3>
            <p className='text-gray-600'>{t('searchHint')}</p>
          </div>
        </div>
      </div>
    )
  }


  if (results.length === 0) {
    return (
      <div className='container mx-auto min-h-screen px-4 py-8'>
        <div className='mb-4'>
          <SectionHeader title={t('searchResults')} className='py-0' />
          <p className='text-gray-600 mt-2'>
            "{query}" {t("searchResultsFor")}
          </p>
        </div>
        <div className='flex items-center justify-center py-20'>
          <div className='text-center'>
            <SearchIcon className='mx-auto h-12 w-12 text-gray-400 mb-4' />
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              {t('noResultsFound')}
            </h3>
            <p className='text-gray-600'>{t('tryDifferentKeywords')}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto min-h-screen px-4 py-8'>
      <div className='mb-8'>
        <SectionHeader title={t('searchResults')} className='py-0' />
        <p className='text-gray-600 mt-2'>
          "{query}" {pagination?.totalItems || results.length} {t("resultsFound")}
        </p>
      </div>

      <div className='space-y-6'>
        {results.map((item, index) => (
          <AppLink
            key={item.id || index}
            to={item.type === 'news' ? `/news/${item.id}` : `/post/${item.id}`}
            className='border-border-grey group flex flex-col overflow-hidden border transition-all duration-200 hover:shadow-lg md:flex-row'
          >
            <div className='w-full overflow-hidden md:w-1/3'>
              <OptimizedImage
                src={item.image || '/placeholder.jpg'}
                alt={item.title || 'Content image'}
                className='h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-72'
              />
            </div>
            <div className='flex-1 p-4 md:p-6'>
              <div className='flex h-full flex-col'>
                <div className='flex items-center gap-2 mb-2'>
                  <FormattedDate
                    className='text-xs text-gray-500'
                    date={item.createdAt}
                  />
                </div>
                
                <h2 className='mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 md:text-2xl'>
                  {item.title}
                </h2>
                
                {item.sub_title && (
                  <p className='mb-4 line-clamp-3 flex-grow text-gray-600'>
                    {item.sub_title}
                  </p>
                )}
                
                <div className='mt-auto flex items-center justify-between'>
                  <span className='inline-flex items-center font-medium text-blue-600 transition-colors group-hover:text-blue-800'>
                    {t('readMore')}
                    <MoveRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </span>
                </div>
              </div>
            </div>
          </AppLink>
        ))}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <div className='mt-12 flex justify-center'>
          <Pagination
            pageCount={pagination.totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}

export default SearchResultPage