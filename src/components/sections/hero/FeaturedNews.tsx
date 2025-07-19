import { OptimizedImage } from '@/components/ui/optimized-image'
import { Link } from 'react-router-dom'

interface NewsData {
    date: string
    image: string
    name: string
}

interface FeaturedNewsProps {
    data: NewsData
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({ data }) => {
    return (
        <div className='h-full'>
            <Link to={"/news/2"} className='group relative flex h-full cursor-pointer flex-col'>
                <div className='relative flex-1 overflow-hidden rounded-lg'>
                    <span className='absolute border border-border-grey top-2 left-2 md:top-3 md:left-3 z-10 rounded-full bg-bwhite px-3 py-1 text-xs md:text-sm text-white backdrop-blur-lg'>
                        {data.date}
                    </span>
                    <OptimizedImage
                        src={data.image}
                        alt='news image'
                        className='h-full w-full transition-transform duration-500 group-hover:scale-105'
                    />
                </div>
                <h2 className='pt-2 text-xl line-clamp-3 lg:line-clamp-2 leading-tight font-semibold text-black transition-colors duration-200 group-hover:text-blue-600 md:text-3xl lg:text-4xl'>
                    {data.name}
                </h2>
            </Link>
        </div>
    )
}

export default FeaturedNews
