import Link from 'next/link'
import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const emailRef = useRef()

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: emailRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    })

    setIsSubscribed(true)
    setTimeout(resetForm, 5000)
  }

  const resetForm = () => {
    setIsSubscribed(false)
    setEmail('')
  }

  return (
    <footer>
      <div className='flex justify-center items-center bg-dark-blue w-full'>
        {/* Main Wrapper */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-y-8 p-8 w-full h-full container'>
          {/* Social Media Links */}
          <div className='flex flex-row justify-center gap-x-2 w-full h-full lg:order-1 order-2'>
            <Link
              target='_blank'
              href='https://www.linkedin.com/company/indietopia'
            >
              <FontAwesomeIcon
                className='text-white hover:text-lime-green transition-colors duration-300'
                icon={faLinkedin}
                width={30}
                height={30}
              />
            </Link>
            <Link target='_blank' href='https://www.facebook.com/indietopia/'>
              <FontAwesomeIcon
                className='text-white hover:text-lime-green transition-colors duration-300'
                icon={faSquareFacebook}
                width={30}
                height={30}
              />
            </Link>
            <Link target='_blank' href='https://twitter.com/IndietopiaNL'>
              <FontAwesomeIcon
                className='text-white hover:text-lime-green transition-colors duration-300'
                icon={faSquareTwitter}
                width={30}
                height={30}
              />
            </Link>
            <Link target='_blank' href='https://www.instagram.com/indietopia'>
              <FontAwesomeIcon
                className='text-white hover:text-lime-green transition-colors duration-300'
                icon={faSquareInstagram}
                width={30}
                height={30}
              />
            </Link>
          </div>
          {/* 2023© Innotopia. All rights reserved */}
          <div className='flex flex-col justify-center items-center font-poppins text-sm font-semibold text-white w-full h-full gap-y-2 lg:order-2 order-3'>
            <h3>{new Date().getFullYear()}© Innotopia. All rights reserved.</h3>
            <div className='flex flex-row justify-center items-center text-xs font-light'>
              <h3>
                Web design by{' '}
                <Link href='https://pataroff.com' className='hover:font-medium'>
                  Pataroff
                </Link>
              </h3>
              {/* <Image
                src={pataroffLogo}
                width={30}
                height={30}
                alt='Pataroff Logo'
              /> */}
            </div>
          </div>
          {/* Subscribe to our newsletter! */}
          <div className='flex flex-col font-poppins justify-center items-center lg:items-start gap-y-2 w-full lg:order-3 order-1'>
            <h2 className='text-white text-md font-bold whitespace-nowrap'>
              Subscribe To Our Newsletter!
            </h2>
            {isSubscribed && (
              <h3 className='text-white text-sm'>
                Thank you for your subscription!
              </h3>
            )}

            <form
              className='flex flex-col lg:flex-row gap-x-2 gap-y-3'
              onSubmit={handleSubmit}
            >
              <input
                className='rounded-xl bg-white w-60 text-sm h-8 p-2 outline-none z-10'
                type='email'
                placeholder='email@example.com'
                value={email}
                ref={emailRef}
                onChange={handleChange}
                required
              />
              {/* Subscribe Button */}
              <input
                className='flex justify-center items-center rounded-xl bg-lime-green uppercase font-bold w-60 lg:w-32 h-8 px-4 cursor-pointer hover:brightness-110 transition-all duration-500'
                type='submit'
                value='Subscribe'
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
