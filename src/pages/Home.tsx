import PopularNews from '@/components/sections/popularNews/PopularNews'
import { SEOHead } from '../components/common/SEOHead'
import Hero from '../components/sections/hero/Hero'
import PopularNewsSection from '@/components/sections/popularPosts/PopularPosts'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation('common')
  return (
    <main>
      <SEOHead
        title={t('seo.homeTitle')}
        description={t('seo.homeDescription')}
        ogTitle={t('seo.homeOgTitle')}
        ogDescription={t('seo.homeOgDescription')}
        canonicalUrl='https://www.yokun.uz/'
      />
      <Hero />
      <PopularNews />
      <PopularNewsSection />
    </main>
  )
}
export default Home
