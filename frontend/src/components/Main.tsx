import Link from 'next/link'
import Image from 'next/image'

import hexTile from '../../public/hex-tile.png'
import bgAccent from '../../public/main-bg-accent.png'

const Main = () => {
  return (
    <>
      <section>
        {/* Main Wrapper */}
        {/* overflow-x-hidden fixes the weird white space on the right side in mobile view! */}
        <div className='flex flex-col-reverse md:flex-row justify-center items-center overflow-x-hidden'>
          {/* Text Container */}
          <div className='flex flex-col font-poppins gap-y-4 p-24 lg:ml-14'>
            <h3 className='text-sm font-semilight'>
              Innovate your company with Innotopia
            </h3>
            <h1 className='text-2xl font-bold'>
              Empowering Digital Transformation and Innovation Acceleration
            </h1>
            <p className='text-sm font-medium'>
              Are you a business owner ready to revolutionize your industry
              through the limitless possiblities of creative digital solutions?
            </p>
            {/* CTA */}
            <div className='flex justify-center items-center mt-4 rounded-xl bg-lime-green w-40 h-10'>
              <Link href='/'>
                <span className='uppercase font-bold'>Get in touch</span>
              </Link>
            </div>
          </div>
          {/* Hero Container */}
          <div className='relative container h-[600px] w-[600px]'>
            <div className='absolute inset-0 z-10 p-14 pr-0 flex justify-end'>
              <Image
                priority
                className='h-full w-full max-w-lg object-scale-down'
                src={hexTile}
                alt='Hex Tile'
              />
            </div>
            <div className='absolute inset-0 z-0 p-14 pr-0 flex justify-end'>
              <Image
                priority
                className='h-full w-full max-w-lg object-scale-down object-right'
                src={bgAccent}
                alt='Background Image'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Main
