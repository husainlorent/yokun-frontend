import { newsData } from '../../../constants/newsData'
import FeaturedNews from './FeaturedNews'
import SecondaryNews from './SecondaryNews'

const Hero = () => {
    const data = newsData

    const featuredNews = data[0]
    const sidebarNews = data.slice(1, 5)
    return (
        <section className='bg-hero-bg lg:h-[calc(100vh-4rem)] h-full w-full py-8 md:py-20'>
            <div className='container mx-auto px-1 flex h-full flex-col items-center gap-6 lg:flex-row'>
                <div className='order-1 h-1/2 w-full lg:order-2 lg:h-full lg:w-2/3 mb-4 lg:mb-0'>
                    <FeaturedNews data={featuredNews} />
                </div>
                <div className='order-2 h-1/2 w-full lg:order-1 lg:h-full lg:w-1/3'>
                    <SecondaryNews items={sidebarNews} />
                </div>
            </div>
  
        </section>
    )
}
export default Hero
