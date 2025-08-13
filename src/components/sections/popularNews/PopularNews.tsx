import SectionHeader from '../../common/SectionHeader'
import { useBreaking } from '@/hook/useNews'
import { FormattedDate } from '../../common/FormattedDate'
import { OptimizedImage } from '../../ui/optimized-image'
import PopularNewsSkeleton from './PopularNewsSkeleton'
import ErrorState from '@/components/common/ErrorState'
import { useTranslation } from 'react-i18next'
import { AppLink } from '@/components/common/AppLink'

const PopularNews = () => {
  const { data, isLoading, error } = useBreaking()
  const { t } = useTranslation("common")
  if (isLoading) return <PopularNewsSkeleton />

  if (error || !data) return <ErrorState />

  return (
    <section className='py-8 md:py-20'>
      <div className='container mx-auto px-1'>
        <div className='mb-8 flex items-center justify-between'>
          <SectionHeader title={t("latestNews")} />
          <AppLink
            to='/news'
            className='group flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600'
          >
            <span className='text-sm font-medium'>{t("allNews")}</span>
            <svg
              className='h-4 w-4 transition-transform group-hover:translate-x-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </AppLink>
        </div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6'>
          {data?.map((item, index) => (
            <AppLink to={`/news/${item.id}`} key={index} className='group cursor-pointer'>
              <article>
                <div className='relative mb-4'>
                  {item.image ? (
                    <OptimizedImage
                      src={item.image}
                      alt='image'
                      className='h-32 w-full overflow-hidden rounded-lg object-cover md:h-40'
                    />
                  ) : null}
                </div>

                <div className='space-y-2'>
                  <FormattedDate date={item.createdAt} className='text-xs text-gray-500' />
                  <h4 className='line-clamp-3 text-sm leading-tight font-semibold text-black transition-colors group-hover:text-blue-600 md:text-base'>
                    {item.title}
                  </h4>
                </div>
              </article>
            </AppLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularNews
