export const RelatedSkeleton = () => (
  <div className='space-y-4'>
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className='flex gap-4 rounded-xl py-2'>
        <div className='relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-200 animate-pulse' />
        <div className='min-w-0 flex-1 space-y-2'>
          <div className='h-3 w-16 bg-gray-200 rounded animate-pulse' />
          <div className='space-y-1'>
            <div className='h-4 bg-gray-200 rounded animate-pulse' />
            <div className='h-4 w-3/4 bg-gray-200 rounded animate-pulse' />
          </div>
        </div>
      </div>
    ))}
  </div>
)