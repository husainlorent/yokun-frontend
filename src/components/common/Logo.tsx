import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <>
            <Link to={'/'} className='flex items-center'>
                <img
                    alt='logo'
                    src='images/logo.png'
                    width={80}
                    height={96}
                    loading='eager'
                    className='h-16 w-20 object-cover'
                />
                <h2 className='logo'>Yoshlar kundaligi</h2>
            </Link>
        </>
    )
}
export default Logo
