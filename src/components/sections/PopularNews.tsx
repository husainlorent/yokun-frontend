import { popularNewsData } from '@/constants/newsData'
import SectionHeader from '../common/SectionHeader'
import { Link } from 'react-router-dom'

const PopularNews = () => {
    return (
        <section className='py-8 md:py-20'>
            <div className='container mx-auto px-1'>
                <div className='flex justify-between items-center mb-8 '>
                    <SectionHeader title='Dolzarb yangiliklar' />
                    <Link
                        to='/all-news'
                        className='group flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600'
                    >
                        <span className='text-sm font-medium'>Barcha yangilliklar</span>
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
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4'>
                    {popularNewsData.map((item, index) => (
                        <article key={index} className='group cursor-pointer'>
                            <div className='relative mb-4'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='h-32 w-full rounded-lg object-cover md:h-36'
                                />
                            </div>

                            <div className='space-y-2'>
                                <span className='text-xs text-gray-500'>{item.date}</span>
                                <h4 className='line-clamp-3 text-sm leading-tight font-semibold text-black transition-colors group-hover:text-blue-600 md:text-base'>
                                    {item.name}
                                </h4>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularNews
