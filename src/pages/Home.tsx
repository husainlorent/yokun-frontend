import PopularNews from '@/components/sections/popularNews/PopularNews'
import { SEOHead } from '../components/common/SEOHead'
import Hero from '../components/sections/hero/Hero'
import PopularNewsSection from '@/components/sections/popularPosts/PopularPosts'



const Home = () => {

    return (
        <main>
            <SEOHead
                title='Bosh sahifa'
                description='Yoshlar kundaligida eng so‘nggi yangiliklar va maqolalar'
                ogTitle='Yoshlar kundaligi - Bosh sahifa'
                ogDescription='Yoshlar kundaligida eng so‘nggi va qiziqarli yangiliklarni toping.'
                canonicalUrl='https://www.yokun.uz/'
            />
            <Hero />
            <PopularNews/>
            <PopularNewsSection/>
        </main>
    )
}
export default Home
