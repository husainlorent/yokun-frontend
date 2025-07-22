import { Link } from "react-router-dom"

const EmptyPostState = () => (
    <div className='text-center py-12'>
        <div className='max-w-md mx-auto'>
            <div className='text-gray-400 mb-4'>
                <svg className='mx-auto h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>Maqolalar topilmadi</h3>
            <p className='text-gray-600 mb-2'>Bu kategoriyada hozircha maqolalar mavjud emas</p>
            <Link className="text-blue-600" to="/">Bosh sahifaga qaytish</Link>
        </div>
    </div>
)

export default EmptyPostState