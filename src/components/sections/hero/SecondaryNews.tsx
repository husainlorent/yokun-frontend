import { OptimizedImage } from '@/components/ui/optimized-image'
import { Link } from 'react-router-dom'

interface NewsData {
    date: string
    image: string
    name: string
}

interface SecondaryNewsProps {
    items: NewsData[]
}

const SecondaryNews: React.FC<SecondaryNewsProps> = ({ items }) => {
    return (
        <div className='h-full'>
            <article className='flex h-full flex-col gap-3 md:gap-4'>
                {items.map((item, index) => (
                    <Link
                        to={`/news/${index}`}
                        key={index}
                        className='group border-border-grey relative flex flex-1 cursor-pointer gap-3 border-b pb-3 last:border-b-0 md:pb-4'
                    >
                        <div className='w-1/3 overflow-hidden rounded-lg md:w-1/4 lg:w-1/3'>
                            <OptimizedImage
                                src={item.image}
                                alt='news image'
                                className='aspect-[4/3] h-full w-full transition-transform duration-500 group-hover:scale-105'
                            />
                        </div>
                        <div className='flex flex-1 flex-col gap-2 pt-0'>
                            <span className='mt-2 text-xs text-gray-500'>{item.date}</span>
                            <h2 className='line-clamp-3 text-sm leading-tight font-semibold text-black transition-colors duration-200 group-hover:text-blue-600 md:text-base'>
                                {item.name}
                            </h2>
                        </div>
                    </Link>
                ))}
            </article>
        </div>
    )
}
export default SecondaryNews
