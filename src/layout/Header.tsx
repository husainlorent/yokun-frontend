import MobileMenu from './MobileMenu'
import Navbar from './Navbar'
import Logo from '@/components/common/Logo'
import Search from '@/components/common/Search'

const Header = () => {

  return (
    <header className='border-border-grey w-full border-b'>
      <div className='container mx-auto px-1'>
        <div className='border-border-grey flex items-center justify-between py-1 lg:border-b'>
          <Logo />
          <div className='hidden lg:block md:w-lg'>
            <Search/>
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
