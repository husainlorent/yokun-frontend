
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ReactPaginate from 'react-paginate'

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange
}: {
  pageCount: number
  currentPage: number
  onPageChange: (page: number) => void
}) => {
  if (pageCount <= 1) return null

  return (
    <div className='flex justify-center mt-12'>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={(data) => onPageChange(data.selected + 1)}
        forcePage={currentPage - 1}

        containerClassName='flex items-center space-x-1'
        pageClassName='hidden sm:block'
        pageLinkClassName='px-3 py-2 text-sm font-medium   border border-gray-300 cursor-pointer hover:text-blue-600 transition-colors rounded-md'
        activeClassName='bg-blue-600 text-white '
        activeLinkClassName='bg-blue-600 text-white hover:bg-blue-700 hover:text-white'

        previousClassName='mr-2'
        nextClassName='ml-2'
        previousLinkClassName='flex items-center px-3 py-2 text-sm font-medium cursor-pointer   border border-gray-300  rounded-md transition-colors'
        nextLinkClassName='flex items-center px-3 py-2 text-sm font-medium cursor-pointer  border border-gray-300  rounded-md transition-colors'

        previousLabel={
          <span className='flex items-center'>
            <ChevronLeft className='h-4 w-4 mr-1' />
            <span className='hidden sm:inline'>Oldingi</span>
          </span>
        }
        nextLabel={
          <span className='flex items-center'>
            <span className='hidden sm:inline'>Keyingi</span>
            <ChevronRight className='h-4 w-4 ml-1' />
          </span>
        }

        disabledClassName='pointer-events-none'
        disabledLinkClassName='!text-gray-400 !bg-gray-100 !cursor-not-allowed hover:!bg-gray-100 hover:!text-gray-400'
      />

    </div>
  )
}

export default Pagination