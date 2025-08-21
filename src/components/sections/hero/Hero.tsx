
import { useLatestNews } from '@/hook/useNews'
import FeaturedNews from './featuredNews/FeaturedNews'
import SecondaryNews from './secondaryNews/SecondaryNews'
const Hero = () => {

    const { data: newsData, isLoading, error } = useLatestNews()

    return (
        <section className='bg-hero-bg lg:h-[calc(100vh-5rem)] h-full w-full py-8 md:py-20'>
            <div className='container mx-auto px-1 flex h-full flex-col items-center gap-6 lg:flex-row'>
                <div className='order-1 h-1/2 w-full lg:order-2 lg:h-full lg:w-2/3 mb-4 lg:mb-0'>
                    <FeaturedNews
                        data={newsData?.latest}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
                <div className='order-2 h-1/2 w-full lg:order-1 lg:h-full lg:w-1/3'>
                    <SecondaryNews
                        data={newsData?.secondary}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
            </div>

        </section>
    )
}
export default Hero
