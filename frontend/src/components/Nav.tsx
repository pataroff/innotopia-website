import Link from 'next/link'
import Image from 'next/image'
import innotopiaLogo from '../../public/innotopia-logo-white.svg'

const Nav = () => {
  return (
    <>
      {/* Navbar Container */}
      <div className='bg-gray-900 w-full'>
        {/* Navbar (tablets + desktop) */}
        <nav className='hidden p-4 md:flex md:justify-center md:gap-x-64 xl:max-w-screen-2xl xl:mx-auto'>
          {/* Logo */}
          <div className='shrink-0'>
            <Link href='/'>
              <Image
                className='w-24 h-12 xl:w-32'
                priority
                src={innotopiaLogo}
                alt='Innotopia'
                width={100}
                height={100}
              />
            </Link>
          </div>
          {/* Menu */}
          <div className='list-none flex justify-center items-center gap-x-8 px-4 text-xs text-white font-poppins font-semibold xl:text-sm xl:gap-x-12 xl:pl-10'>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/'
                  className='inline-block h-full w-full hover:text-lime-500'
                >
                  About
                </Link>
              </li>
            </div>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/'
                  className='inline-block h-full w-full hover:text-lime-500'
                >
                  Services
                </Link>
              </li>
            </div>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/'
                  className='inline-block h-full w-full hover:text-lime-500'
                >
                  Projects
                </Link>
              </li>
            </div>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/'
                  className='inline-block h-full w-full hover:text-lime-500'
                >
                  Testimonials
                </Link>
              </li>
            </div>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/blog'
                  className='inline-block h-full w-full hover:text-lime-500'
                >
                  Blog
                </Link>
              </li>
            </div>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/'
                  className='inline-block h-full w-full hover:text-lime-500'
                >
                  Events
                </Link>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Nav
