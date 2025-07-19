import SectionHeader from '@/components/common/SectionHeader'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { popularNewsData } from '@/constants/newsData'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Posts = () => {
  return (
    <div className='container mx-auto px-4 py-8 min-h-screen'>
      <SectionHeader title='Posts' className='py-8'/>
      <div className='space-y-6'>
        {popularNewsData.map((item, index) => (
          <Link
            key={index}
            to='/post/1'
            className='border-border-grey flex flex-col overflow-hidden border md:flex-row transition-all duration-200 group'
          >
            <div className='w-full md:w-1/3 overflow-hidden'>
              <OptimizedImage
                src={item.image}
                alt={item.name || 'News image'}
                className='h-52 w-full object-cover md:h-72 group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='flex-1 p-4'>
              <div className='flex h-full flex-col'>
                <span className='text-sm text-gray-500'>{item.date}</span>
                <h2 className='mb-3 line-clamp-2 text-xl font-bold text-gray-900 md:text-2xl group-hover:text-blue-600 transition-colors'>
                  {item.name}
                </h2>
                <p className='mb-4 line-clamp-3 flex-grow text-gray-600'>
                  {item.description}
                </p>
                <div className='mt-auto flex items-center justify-between'>
                  <span className='inline-flex items-center font-medium text-blue-600 group-hover:text-blue-800 transition-colors'>
                    Batafsil
                    <MoveRight className='ml-2 group-hover:translate-x-1 transition-transform' />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Posts