import { useParams } from 'react-router-dom'
import { PostDetailHeader } from './NewsDetailHeader'
import { ChevronRight, ArrowLeft } from 'lucide-react'

import { RelatedPosts } from './RelatedNews'
import { getYoutubeEmbedUrl } from '@/utils/getYoutubeEmbedUrl'
import { useNews } from '@/hook/useNews'
import { LoadingDetailState } from '@/components/common/LoadingDetailState'
import { useTranslation } from 'react-i18next'
import { AppLink } from '@/components/common/AppLink'

const NewsDetail = () => {
  const { t } = useTranslation('common')
  const { newsId } = useParams()
  const { data: newsData, isLoading } = useNews(newsId ?? '')
  if (isLoading) {
    return <LoadingDetailState />
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <div className='container mx-auto py-8'>
        <nav className='mb-8 flex items-center space-x-2 overflow-x-auto text-sm text-gray-600'>
          <AppLink to='/' className='font-medium transition-colors duration-200 hover:text-blue-600'>
            {t('home')}
          </AppLink>
          <ChevronRight className='h-4 w-4 text-gray-400' />
          <AppLink
            to={'/news'}
            className='cursor-pointer font-medium transition-colors duration-200 hover:text-blue-600'
          >
            {t('news')}
          </AppLink>
          <ChevronRight className='h-4 w-4 text-gray-400' />
          <span className='truncate font-medium text-gray-900'>{newsData?.title}</span>
        </nav>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          <div className='lg:col-span-3'>
            <article className='overflow-hidden'>
              <PostDetailHeader postData={newsData} />
              <div>
                <div
                  className='prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg max-w-none [&_img]:my-6 [&_img]:rounded-xl [&_img]:border [&_img]:border-gray-200 [&_img]:shadow-lg'
                  dangerouslySetInnerHTML={{ __html: newsData?.content || '' }}
                />

                {newsData?.file && (
                  <div className='mt-8'>
                    <div className='rounded-xl bg-gray-50 p-4'>
                      <iframe
                        src={newsData.file}
                        className='h-[500px] w-full rounded-lg border border-gray-200 shadow-sm sm:h-[600px] lg:h-[540px] lg:max-h-[700px]'
                        title='Hujjat'
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {newsData?.video_link_youtube &&
                  getYoutubeEmbedUrl(newsData.video_link_youtube) && (
                    <div className='mt-8 rounded-xl'>
                      <iframe
                        src={getYoutubeEmbedUrl(newsData.video_link_youtube)!}
                        className='h-[500px] w-full rounded-lg border border-gray-200 shadow-sm sm:h-[600px] lg:h-[540px] lg:max-h-[700px]'
                        title='YouTube video'
                        allowFullScreen
                      />
                    </div>
                  )}

                {newsData?.video && (
                  <div className='mt-8'>
                    <div className='rounded-xl p-4'>
                      <video
                        src={newsData.video}
                        controls
                        className='h-[500px] w-full rounded-lg sm:h-[600px] lg:h-[540px] lg:max-h-[700px]'
                        title='Video'
                      />
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>

          <div className='lg:col-span-1'>
            <RelatedPosts currentId={newsData?.id} />
          </div>
        </div>

        <div className='mt-16 border-t border-gray-200 pt-8'>
          <AppLink
            to='/'
            className='group inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-gray-50 hover:text-blue-600 hover:shadow-md'
          >
            <ArrowLeft className='h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1' />
            <span className='font-medium'>{t('backToHome')}</span>
          </AppLink>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
