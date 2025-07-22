import { Link } from 'react-router-dom'
import { useCategories } from '@/hook/useCategory'

const Navbar = () => {
    const { data: categories } = useCategories()
    return (
        <nav className='flex gap-6'>
            {categories?.map(item => (
                <Link
                    to={`/posts/${item.id}`}
                    key={item.name}
                    className='hover:text-midnight font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-105'
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}

export default Navbar
