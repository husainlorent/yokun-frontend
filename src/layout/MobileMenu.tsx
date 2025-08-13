import { AlignJustify, X, Search } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '@/components/common/Logo'
import { useCategories } from '@/hook/useCategory'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { useLanguage } from '@/hook/useLanguage'
import { AppLink } from '@/components/common/AppLink'

const MobileMenu = () => {
  const { t } = useTranslation()
  const { data: categories } = useCategories()
  const { isKyrillic } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={toggleMenu} className='cursor-pointer p-2'>
        <AlignJustify />
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/80 transition-opacity duration-300'
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-full w-[80%] transform bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='border-border-grey flex items-center justify-between border-b p-4'>
          <Logo />
          <button onClick={toggleMenu} className='cursor-pointer p-2'>
            <X size={24} />
          </button>
        </div>

        <div className='border-border-grey space-y-4 border-b p-4'>
          <div className='relative'>
            <Search
              className='absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-300'
              size={18}
            />
            <input
              type='text'
              placeholder={t('common.search')}
              className='w-full rounded-lg border py-2 pr-4 pl-10 focus:border-0 focus:ring-1 focus:ring-blue-500 focus:outline-none'
            />
          </div>

          <LanguageSwitcher variant='buttons' />
        </div>

        <nav className='p-4'>
          {categories?.map(category => {
            const linkPath = isKyrillic ? `/kr/posts/${category.id}` : `/posts/${category.id}`
            return (
              <AppLink
                key={category.id}
                to={linkPath}
                className='block rounded-lg px-3 py-3 text-gray-700 transition-colors hover:bg-gray-100'
                onClick={toggleMenu}
              >
                {category.name}
              </AppLink>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
