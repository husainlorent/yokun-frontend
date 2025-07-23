const PopularPostsSkeleton = () => {
    return (
        <section className='bg-hero-bg py-8 md:py-20'>
            <div className='container mx-auto'>
                <div className='mt-4'>
                    <div className='flex gap-4 overflow-hidden'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0'>
                                <article className="rounded-lg border border-border-grey overflow-hidden">

                                    <div className='relative overflow-hidden rounded-t-lg'>
                                        <div className='lg:aspect-[16/12] aspect-[16/9] w-full bg-gray-200 animate-pulse'></div>
                                    </div>

                                    <div className='p-4 space-y-2 h-32 bg-white'>
                                        <div className='h-3 w-20 bg-gray-200 rounded animate-pulse'></div>

                                        <div className='space-y-1'>
                                            <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
                                            <div className='h-4 w-4/5 bg-gray-200 rounded animate-pulse'></div>
                                            <div className='h-4 w-3/5 bg-gray-200 rounded animate-pulse'></div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PopularPostsSkeleton