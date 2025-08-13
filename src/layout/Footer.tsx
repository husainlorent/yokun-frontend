import { AppLink } from '@/components/common/AppLink'
import { socialLinks } from '@/constants/socialLinks'
import { useCategories } from '@/hook/useCategory'
import { useTranslation } from 'react-i18next'


const Footer = () => {
  const { t } = useTranslation('common')
  const { data: categories } = useCategories()

  return (
    <footer className='bg-midnight py-8'>
      <div className='container mx-auto px-2 lg:px-1'>
        <div className='justify-between space-y-4 lg:flex lg:space-y-0'>
          <div>
            <h3 className='text-white'>
              <strong className='text-lg'>{t('youthDiary')} </strong>
              {t('officialWebsite')}
            </h3>
            <ul className='inline-grid grid-cols-2 gap-4 pt-4'>
              {socialLinks.map(link => (
                <li className='social-item' key={link.name}>
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2'
                  >
                    <img src={link.icon} alt={link.name} loading='eager' className='h-6 w-6' />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-4 text-white md:grid-cols-3 lg:grid-cols-4'>
              {categories?.map(links => (
                <li key={links.name}>
                  <AppLink to={`/posts/${links.id}`} key={links.name}>
                    {links.name}
                  </AppLink>
                </li>
              ))}
            </ul>
            <p className='py-4 text-sm text-gray-300'>© 2023-2025 {t('allRightsReserved')}</p>
            <p className='text-gray-300'>
              {t('developed')}:{' '}
              <a
                href='https://akt-center.uz'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-semibold text-blue-100'
              >
                AKT center
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
