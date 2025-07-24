import ErrorState from '@/components/common/ErrorState'
import { FormattedDate } from '@/components/common/FormattedDate'
import { OptimizedImage } from '@/components/ui/optimized-image'
import type { INews } from '@/types/news.interface'
import { Link } from 'react-router-dom'
import FeaturedNewsSkeleton from './FeaturedNewsSkeleton'

interface FeaturedNewsProps {
    data?: INews
    isLoading: boolean
    error?: Error | string | null
}
const FeaturedNews: React.FC<FeaturedNewsProps> = ({ data, isLoading, error }) => {
    if (isLoading) {
        return <FeaturedNewsSkeleton />
    }

    if (error || !data) {
        return (
            <ErrorState />
        )
    }



    return (
        <div className='h-full'>
            <Link to={`/news/${data.id}`} className='group relative flex h-full cursor-pointer flex-col'>
                <div className='relative flex-1 overflow-hidden rounded-lg'>
                    <span className='border-border-grey bg-bwhite absolute top-2 left-2 z-10 rounded-full border px-3 py-1 text-xs text-white backdrop-blur-lg md:top-3 md:left-3 md:text-sm'>
                        <FormattedDate date={data?.createdAt} />
                    </span>
                    {
                        data?.image ?
                            <OptimizedImage
                                src={data.image}
                                alt='news image'
                                className='h-full w-full transition-transform duration-500 group-hover:scale-105'
                            /> : null
                    }
                </div>
                <h2 className='line-clamp-3 pt-2 text-xl leading-tight font-semibold text-black transition-colors duration-200 group-hover:text-blue-600 md:text-3xl lg:line-clamp-2'>
                    {data.title}
                </h2>
            </Link>
        </div>
    )
}

export default FeaturedNews
