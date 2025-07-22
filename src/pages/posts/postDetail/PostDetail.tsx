import { useNavigate, useParams } from 'react-router-dom'
import { usePost, usePostByCategory } from '@/hook/usePost'
import { PostDetailHeader } from './PostDetailHeader'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LoadingState } from './LoadingState'
import { RelatedPosts } from './RelatedPosts'
import { getYoutubeEmbedUrl } from '@/utils/getYoutubeEmbedUrl'

const PostDetail = () => {
  const { postId } = useParams()
  const navigate = useNavigate();
  

  const { data: postData, isLoading } = usePost(postId ?? '')
  const { data: morePosts } = usePostByCategory(postData?.category?.category_id || '')
  const relatedPosts = morePosts?.data
    ? morePosts?.data.filter(item => item.id !== (postData?.id || 0)).slice(0, 6)
    : []

  if (isLoading) { return <LoadingState /> }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <div className='container mx-auto py-8'>
        <nav className='mb-8 flex items-center space-x-2 overflow-x-auto text-sm text-gray-600'>
          <Link to='/' className='font-medium transition-colors duration-200 hover:text-blue-600'>
            Asosiy
          </Link>
          <ChevronRight className='h-4 w-4 text-gray-400' />
          <button
            onClick={() => navigate(-1)}
            className='font-medium transition-colors duration-200 hover:text-blue-600 cursor-pointer'
          >
            Postlar
          </button>
          <ChevronRight className='h-4 w-4 text-gray-400' />
          <span className='truncate font-medium text-gray-900'>{postData?.title}</span>
        </nav>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          <div className='lg:col-span-3'>
            <article className='overflow-hidden'>
              <PostDetailHeader postData={postData} />

              <div>
                <div
                  className='prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg max-w-none [&_img]:my-6 [&_img]:rounded-xl [&_img]:border [&_img]:border-gray-200 [&_img]:shadow-lg'
                  dangerouslySetInnerHTML={{ __html: postData?.content || '' }}
                />

                {postData?.file && (
                  <div className='mt-8'>
                    <div className='rounded-xl bg-gray-50 p-4'>
                      <h3 className='mb-4 text-lg font-semibold text-gray-900'>
                        Qo'shimcha hujjat
                      </h3>
                      <iframe
                        src={postData.file}
                        className='h-[500px] w-full rounded-lg border border-gray-200 shadow-sm sm:h-[600px] lg:h-[540px] lg:max-h-[700px]'
                        title='Hujjat'
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {postData?.video_link_youtube && getYoutubeEmbedUrl(postData.video_link_youtube) && (
                  <div className='mt-8 rounded-xl'>

                    <iframe
                      src={getYoutubeEmbedUrl(postData.video_link_youtube)!}
                      className='h-[500px] w-full rounded-lg border border-gray-200 shadow-sm sm:h-[600px] lg:h-[540px] lg:max-h-[700px]'
                      title='YouTube video'
                      allowFullScreen
                    />

                  </div>
                )}

                {postData?.video && (
                  <div className='mt-8'>
                    <div className='rounded-xl p-4'>
                      <h3 className='mb-4 text-lg font-semibold text-gray-900'>Video material</h3>
                      <video
                        src={postData.video}
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
            <RelatedPosts relatedPosts={relatedPosts} />
          </div>
        </div>

        <div className='mt-16 border-t border-gray-200 pt-8'>
          <Link
            to='/'
            className='group inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-gray-50 hover:text-blue-600 hover:shadow-md'
          >
            <ArrowLeft className='h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1' />
            <span className='font-medium'>Asosiy sahifaga qaytish</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
