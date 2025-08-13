import { useTranslation } from 'react-i18next'
import MobileMenu from './MobileMenu'
import Navbar from './Navbar'
import Logo from '@/components/common/Logo'

const Header = () => {
  const { t } = useTranslation("common")

  return (
    <header className='border-border-grey w-full border-b'>
      <div className='container mx-auto px-1'>
        <div className='border-border-grey flex items-center justify-between py-1 lg:border-b'>
          <Logo />
          <div className='hidden lg:block'>
            <input type='text' placeholder={t('search')} className='search' />
          </div>
          <div className='block pr-2 lg:hidden'>
            <MobileMenu />
          </div>
        </div>

        <div className='hidden py-4 lg:block'>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
