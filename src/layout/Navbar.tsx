import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <nav className='flex gap-6'>
            {navLinks.map(item => (
                <Link
                    to={'/posts'}
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
