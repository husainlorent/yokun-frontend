import { navLinks } from '@/constants'
import { socialLinks } from '@/constants/socialLinks'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-midnight py-8'>
            <div className='container mx-auto px-2 lg:px-1'>
                <div className='lg:flex space-y-4 lg:space-y-0 justify-between'>
                    <div>
                        <h3 className='text-white'>
                            <strong className='text-lg'>Yoshlar kundaligi </strong>rasmi veb sayti
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
                                        <img
                                            src={link.icon}
                                            alt={link.name}
                                            loading='eager'
                                            className='h-6 w-6'
                                        />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 text-white'>
                            {navLinks.map(links => (
                                <li>
                                    <Link to={links.name} key={links.name}>
                                        {links.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className='py-4 text-sm text-gray-300'>
                            © 2023-2025 Барча ҳуқуқлар ҳимояланган. Ушбу веб-сайтдаги
                            маълумотлардан фойдаланганда ҳавола кўрсатилиши шарт.
                        </p>
                        <p className='text-gray-300'>
                            Ishlab chiqiligan:{' '}
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
