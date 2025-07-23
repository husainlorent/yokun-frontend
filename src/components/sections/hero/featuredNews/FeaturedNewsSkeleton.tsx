const FeaturedNewsSkeleton = () => {
    return (
        <div className='h-full'>
            <div className='relative flex h-full cursor-pointer flex-col '>
                <div className='relative flex-1 overflow-hidden rounded-lg'>
                    <div className='absolute top-2 left-2 z-10 md:top-3 md:left-3'>
                        <div className='h-6 w-20 animate-pulse bg-white backdrop-blur-sm border border-white rounded-full' />
                    </div>

                    <div className='h-full w-full  animate-pulse bg-white backdrop-blur-sm border border-border-grey rounded-lg' />
                </div>

                <div className='pt-2 space-y-2'>
                    <div className='h-6 w-full animate-pulse bg-white rounded md:h-8 lg:h-10 ' />
                    <div className='h-6 w-4/5 animate-pulse bg-white rounded md:h-8 lg:h-10' />
                    <div className='h-6 w-3/5 animate-pulse bg-white rounded md:h-8 lg:h-10 lg:hidden' />
                </div>
            </div>
        </div>
    )
}
export default FeaturedNewsSkeleton