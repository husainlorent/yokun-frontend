const PostSkeleton = () => (
    <div className='border border-gray-200 flex flex-col md:flex-row animate-pulse rounded-lg overflow-hidden'>
        <div className='w-full md:w-1/3 bg-gray-300 h-52 md:h-72'></div>
        <div className='flex-1 p-6 space-y-3'>
            <div className='h-3 bg-gray-300 rounded w-24'></div>
            <div className='h-6 bg-gray-300 rounded w-3/4'></div>
            <div className='h-4 bg-gray-300 rounded w-full'></div>
            <div className='h-4 bg-gray-300 rounded w-2/3'></div>
            <div className='h-4 bg-gray-300 rounded w-32 mt-4'></div>
        </div>
    </div>
)

export default PostSkeleton