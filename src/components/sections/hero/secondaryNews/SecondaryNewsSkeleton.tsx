const SecondaryNewsSkeleton = () => {
    return (
        <div className='h-full'>
            <article className='flex h-full flex-col gap-3 md:gap-4'>
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className='border-border-grey relative flex flex-1 gap-3 border-b pb-3 last:border-b-0 md:pb-4'
                    >
                        <div className='w-1/3 overflow-hidden rounded-lg md:w-1/4 lg:w-1/3'>
                            <div className='aspect-[4/3] h-full w-full animate-pulse rounded-lg border border-white bg-white backdrop-blur-sm' />
                        </div>

                        <div className='flex flex-1 flex-col gap-2 pt-0'>
                            <div className='mt-2 h-3 w-20 animate-pulse rounded bg-white' />

                            <div className='space-y-2'>
                                <div className='h-4 w-full animate-pulse rounded bg-white' />
                                <div className='h-4 w-4/5 animate-pulse rounded bg-white' />
                                <div className='h-4 w-3/5 animate-pulse rounded bg-white' />
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </div>
    )
}
export default SecondaryNewsSkeleton