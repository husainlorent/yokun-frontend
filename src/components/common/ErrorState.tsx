import { useTranslation } from 'react-i18next'

const ErrorState = () => {
  const { t } = useTranslation('common')

  return (
    <div className='py-12 text-center'>
      <div className='mx-auto max-w-md'>
        <div className='mb-4 text-red-500'>
          <svg className='mx-auto h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 19.5c-.77.833.192 2.5 1.732 2.5z'
            />
          </svg>
        </div>
        <h3 className='mb-2 text-lg font-semibold text-gray-900'>{t("errorOccurred")}</h3>
        <p className='mb-6 text-gray-600'>
          {t("dataLoadError")}
        </p>
      </div>
    </div>
  )
}

export default ErrorState
