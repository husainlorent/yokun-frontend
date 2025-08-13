import LogoPng from "@/assets/images/logo.png"
import { AppLink } from './AppLink'
const Logo = () => {
    return (
        <>
            <AppLink to={'/'} className='flex items-center'>
                <img
                    alt='logo'
                    src={LogoPng}
                    width={80}
                    height={96}
                    loading='eager'
                    className='h-16 w-20 object-cover'
                />
                <h2 className='logo'>Yoshlar kundaligi</h2>
            </AppLink>
        </>
    )
}
export default Logo
