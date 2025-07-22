import { Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FormattedDate } from '@/components/common/FormattedDate'
import type { IPost } from '@/types/post'

interface PostDetailSidebarProps {
  relatedPosts: IPost[]
}

export const  RelatedPosts = ({ relatedPosts }: PostDetailSidebarProps) => {
  return (
    <div className='sticky top-14 space-y-4 '>
      <div className='pl-3 h-full '>
        <div className='mb-5 flex items-center'>
          <div className='mr-3 h-6 w-1 rounded bg-blue-500' />
          <h3 className='text-xl font-bold text-gray-900'>O'xshash m'aqolalar</h3>
        </div>

        <div className='space-y-4'>
          {relatedPosts.length > 0 ? (
            relatedPosts.map((item) => (
              <Link key={item.id} to={`/post/${item.id}`} className='group block'>
                <div className='flex gap-4 rounded-xl py-2 transition-all duration-200 hover:bg-gray-50'>
                  <div className='relative h-16 w-20 shrink-0 overflow-hidden rounded-lg'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-xs font-medium text-gray-500'>
                      <FormattedDate date={item.createdAt} />
                    </p>
                    <h4 className='mb-2 line-clamp-2 text-sm font-semibold transition-colors duration-200 group-hover:text-blue-600'>
                      {item.title}YAQIN SHARQDAGI OSMON JANGI: Millionlarga ishlaydigan
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
              <p className='text-gray-500'>O'xshash m'aqolalar topilmadi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
