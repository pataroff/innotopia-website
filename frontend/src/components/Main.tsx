import Link from 'next/link'
import Image from 'next/image'

import hexTile from '../../public/hex-tile.png'
import bgAccent from '../../public/main-bg-accent.png'

const Main = () => {
  return (
    <>
      <section>
        {/* Main Wrapper */}
        <div className='flex flex-col-reverse md:flex-row justify-center gap-x-16'>
          {/* Text Container */}
          <div className='flex flex-col font-poppins gap-y-2 my-24 p-24'>
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
            <div className='flex justify-center items-center mt-4 rounded-xl bg-lime-600 w-40 h-10'>
              <Link href='/'>
                <span className='uppercase font-bold'>Get in touch</span>
              </Link>
            </div>
          </div>
          {/* Hero Container */}
          {/* h-56 is not ideal, but it solves mobile responsiveness for now! */}
          <div className='relative h-56 md:w-full lg:w-96 my-24 p-4'>
            {/* Hero Image Container */}
            <div className='absolute m-0 z-10'>
              <Image priority src={hexTile} alt='Hex Tile' />
            </div>
            {/* Background Image Container */}
            <div className='absolute right-0 z-0'>
              <Image priority src={bgAccent} alt='Background Image' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Main
