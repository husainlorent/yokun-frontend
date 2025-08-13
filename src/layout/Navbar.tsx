import { useCategories } from '@/hook/useCategory'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { AppLink } from '@/components/common/AppLink'


const Navbar = () => {
  const { data: categories } = useCategories()
  return (
    <nav className='flex justify-between'>
      <div className='flex gap-6'>
        {categories?.map(item => (
          <AppLink
            to={`/posts/${item.id}`}
            key={item.name}
            className='hover:text-midnight font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-105'
          >
            {item.name}
          </AppLink>
        ))}
      </div>
      <div>
        <LanguageSwitcher variant="dropdown" />
      </div>
    </nav>
  )
}

export default Navbar
