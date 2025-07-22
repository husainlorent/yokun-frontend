const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
    <div className='text-center py-12'>
        <div className='max-w-md mx-auto'>
            <div className='text-red-500 mb-4'>
                <svg className='mx-auto h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 19.5c-.77.833.192 2.5 1.732 2.5z' />
                </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>Xatolik yuz berdi</h3>
            <p className='text-gray-600 mb-6'>Ma'lumotlarni yuklashda muammo bo'ldi</p>
            <button
                onClick={onRetry}
                className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium'
            >
                Qayta urinish
            </button>
        </div>
    </div>
)

export default ErrorState