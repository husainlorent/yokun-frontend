import { Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FormattedDate } from '@/components/common/FormattedDate'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { useRelated } from '@/hook/useNews'
import { RelatedSkeleton } from '@/components/common/RelatedSkeleton'
import { useTranslation } from 'react-i18next'

interface NewsDetailSidebarProps {
  currentId: string | undefined
}

export const RelatedPosts: React.FC<NewsDetailSidebarProps> = ({ currentId }) => {
  const { t } = useTranslation('common')
  const { data: relatedNews, isLoading } = useRelated(currentId ?? '')

  if (isLoading) return <RelatedSkeleton />

  return (
    <div className='sticky top-14 space-y-4'>
      <div className='h-full pl-3'>
        <div className='mb-5 flex items-center'>
          <div className='mr-3 h-6 w-1 rounded bg-blue-500' />
          <h3 className='text-xl font-bold text-gray-900'>{t("similarNews")}</h3>
        </div>

        <div className='space-y-4'>
          {relatedNews && relatedNews.length > 0 ? (
            relatedNews?.map(item => (
              <Link key={item.id} to={`/news/${item.id}`} className='group block'>
                <div className='flex gap-4 rounded-xl py-2 transition-all duration-200 hover:bg-gray-50'>
                  <div className='relative h-16 w-20 shrink-0 overflow-hidden rounded-lg'>
                    {item.image ? (
                      <OptimizedImage
                        src={item.image}
                        alt={item.title || 'Maqola rasmi'}
                        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                      />
                    ) : null}
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-xs font-medium text-gray-500'>
                      <FormattedDate date={item.createdAt} />
                    </p>
                    <h4 className='mb-2 line-clamp-2 text-sm font-semibold transition-colors duration-200 group-hover:text-blue-600'>
                      {item.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className='py-8 text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
                <Eye className='h-8 w-8 text-gray-400' />
              </div>
              <p className='text-gray-500'>{t("noSimilarNews")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
