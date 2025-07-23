const PopularNewsSkeleton = () => {
    return (
        <section className='py-8 md:py-20'>
            <div className='container mx-auto px-1'>
                <div className='flex justify-between items-center mb-8'>
                    <div className='h-8 w-48 bg-gray-200 rounded animate-pulse'></div>
                    <div className='h-6 w-32 bg-gray-200 rounded animate-pulse'></div>
                </div>
                <div className='grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <article key={index} className='group'>
                            <div className='relative mb-4'>
                                <div className='h-32 w-full bg-gray-200 rounded-lg animate-pulse md:h-36'></div>
                            </div>
                            <div className='space-y-2'>
                                <div className='h-3 w-20 bg-gray-200 rounded animate-pulse'></div>
                                <div className='space-y-1'>
                                    <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
                                    <div className='h-4 w-4/5 bg-gray-200 rounded animate-pulse'></div>
                                    <div className='h-4 w-3/5 bg-gray-200 rounded animate-pulse'></div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default PopularNewsSkeleton