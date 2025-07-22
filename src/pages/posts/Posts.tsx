import { FormattedDate } from '@/components/common/FormattedDate'
import SectionHeader from '@/components/common/SectionHeader'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { usePostByCategory } from '@/hook/usePost'
import { MoveRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

const Posts = () => {
  const { categoryId } = useParams()
  const { data, isLoading, error } = usePostByCategory(categoryId || "")


  if (isLoading) {
    return (
      <div className='container mx-auto px-4 py-8 min-h-screen'>
        <SectionHeader title='Posts' className='py-8' />
        <div className='space-y-6'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className='border border-gray-200 flex flex-col md:flex-row animate-pulse'>
              <div className='w-full md:w-1/3 bg-gray-300 h-52 md:h-72'></div>
              <div className='flex-1 p-4 space-y-3'>
                <div className='h-4 bg-gray-300 rounded w-24'></div>
                <div className='h-6 bg-gray-300 rounded w-3/4'></div>
                <div className='h-4 bg-gray-300 rounded w-full'></div>
                <div className='h-4 bg-gray-300 rounded w-2/3'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }


  if (error) {
    return (
      <div className='container mx-auto px-4 py-8 min-h-screen'>
        <SectionHeader title='Posts' className='py-8' />
        <div className='text-center py-12'>
          <p className='text-gray-600 text-lg'>Ma'lumotlarni yuklashda xatolik yuz berdi</p>
          <button 
            onClick={() => window.location.reload()} 
            className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'
          >
            Qayta urinish
          </button>
        </div>
      </div>
    )
  }


  if (!data || data.length === 0) {
    return (
      <div className='container mx-auto px-4 py-8 min-h-screen'>
        <SectionHeader title='Posts' className='py-8' />
        <div className='text-center py-12'>
          <p className='text-gray-600 text-lg'>Hozircha maqolalar mavjud emas</p>
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8 min-h-screen'>
      <SectionHeader title='Posts' className='py-8' />
      <div className='space-y-6'>
        {data.map((item) => (
          <Link
            key={item.id} 
            to={`/post/${item.id}`}
            className='border-border-grey flex flex-col overflow-hidden border md:flex-row transition-all duration-200 group hover:shadow-md rounded-lg'
            aria-label={`${item.title} maqolasini o'qish`}
          >
            <div className='w-full md:w-1/3 overflow-hidden'>
              <OptimizedImage
                src={item.image || ""} 
                alt={item.title || 'News image'}
                className='h-52 w-full object-cover md:h-72 group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='flex-1 p-6'> {/* p-4 o'rniga p-6 ko'proq joy beradi */}
              <div className='flex h-full flex-col'>
                <FormattedDate 
                  date={item.createdAt} 
                  className="text-xs text-gray-500 mb-2" 
                />
                <h2 className='mb-3 line-clamp-2 text-xl font-bold text-gray-900 md:text-2xl group-hover:text-blue-600 transition-colors leading-tight'>
                  {item.title}
                </h2>
                <p className='mb-4 line-clamp-3 flex-grow text-gray-600 leading-relaxed'>
                  {item.sub_title}
                </p>
                <div className='mt-auto flex items-center justify-between'>
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
    </div>
  )
}

export default Posts