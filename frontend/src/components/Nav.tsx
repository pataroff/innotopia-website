import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import innotopiaLogo from '../../public/innotopia-logo-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      {/* Navbar Container */}
      <div className='bg-dark-blue sticky top-0 w-full z-20'>
        {/* Navbar (mobile + tablet) */}
        <nav className='lg:hidden'>
          {/* Main Wrapper */}
          <div className='flex flex-row justify-center py-4 px-8'>
            {/* Logo */}
            <div className='shrink-0 w-full'>
              <Link href='/'>
                <Image
                  className='w-24 h-12 xl:w-32 hover:scale-110 transition-transform duration-150'
                  priority
                  src={innotopiaLogo}
                  alt='Innotopia'
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            {/* Hamburger Menu */}
            {isOpen ? (
              <>
                {/* xMark Icon */}
                <div
                  onClick={toggleMenu}
                  className='flex shrink-0 justify-center items-center'
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={30}
                    height={30}
                    color='white'
                  />
                </div>
              </>
            ) : (
              <>
                {/* Hamburger Icon */}
                <div
                  onClick={toggleMenu}
                  className='flex shrink-0 justify-center items-center'
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    width={30}
                    height={30}
                    color='white'
                  />
                </div>
              </>
            )}
          </div>
          {/* Navbar Links (mobile + tablet) */}
          {isOpen && (
            <>
              {/* Menu Items */}
              <div className='flex flex-col justify-center items-center gap-y-6 p-4 bg-dark-blue font-poppins text-white text-md font-bold'>
                <Link href='/'>
                  <span>About</span>
                </Link>

                <Link href='/#services'>
                  <span>Services</span>
                </Link>

                <Link href='/#projects'>
                  <span>Projects</span>
                </Link>

                <Link href='/#testimonials'>
                  <span>Testimonials</span>
                </Link>

                <Link href='/blog'>
                  <span>Blog</span>
                </Link>

                <Link href='/'>
                  <span>Events</span>
                </Link>
              </div>
            </>
          )}
        </nav>
        {/* Navbar (desktop) */}
        <nav className='hidden p-4 lg:flex lg:justify-center lg:gap-x-64 xl:max-w-screen-2xl xl:mx-auto'>
          {/* Logo */}
          <div className='shrink-0'>
            <Link href='/'>
              <Image
                className='w-24 h-12 xl:w-32 hover:scale-110 transition-transform duration-150'
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
                  className='inline-block h-full w-full hover:text-lime-green'
                >
                  About
                </Link>
              </li>
            </div>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/#services'
                  className='inline-block h-full w-full hover:text-lime-green'
                >
                  Services
                </Link>
              </li>
            </div>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/#projects'
                  className='inline-block h-full w-full hover:text-lime-green'
                >
                  Projects
                </Link>
              </li>
            </div>
            {/* Menu Item */}
            <div className='inline-block relative'>
              <li className='relative'>
                <Link
                  href='/#testimonials'
                  className='inline-block h-full w-full hover:text-lime-green'
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
                  className='inline-block h-full w-full hover:text-lime-green'
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
                  className='inline-block h-full w-full hover:text-lime-green'
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
