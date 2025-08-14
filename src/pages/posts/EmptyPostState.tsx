import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const EmptyPostState = () => {
  const { t } = useTranslation('common')
  return (
    <div className='py-12 text-center'>
      <div className='mx-auto max-w-md'>
        <div className='mb-4 text-gray-400'>
          <svg className='mx-auto h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
            />
          </svg>
        </div>
        <h3 className='mb-2 text-lg font-semibold text-gray-900'>{t('noArticles')}</h3>
        <p className='mb-2 text-gray-600'>{t('noArticlesInCategory')}</p>
        <Link className='text-blue-600' to='/'>
          {t('backToHome')}
        </Link>
      </div>
    </div>
  )
}

export default EmptyPostState
