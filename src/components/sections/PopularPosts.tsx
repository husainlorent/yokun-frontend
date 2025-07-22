import { useLatestPosts } from '@/hook/usePost';
import SectionHeader from '../common/SectionHeader'
import PostsCard from '../ui/post-card'
import PostsCarousel from '../ui/post-carousel'

const PopularNewsSection = () => {

    const { data } = useLatestPosts();
  console.log(data)
    return (
        <section className='bg-hero-bg py-8 md:py-20'>
            <div className='container mx-auto'>
                <SectionHeader title='Maqolalar' />
                <PostsCarousel
                    options={{
                        align: 'start',
                        slidesToScroll: 1,
                        breakpoints: {
                            '(min-width: 640px)': { slidesToScroll: 2 },
                            '(min-width: 1024px)': { slidesToScroll: 3 }
                        }
                    }}
                    className='mt-6'
                >
                    {data?.map((item) => (
                        <PostsCard
                            key={item.id}
                            data={item}
                            className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'
                        />
                    ))}
                </PostsCarousel>
            </div>
        </section>
    )
}

export default PopularNewsSection
