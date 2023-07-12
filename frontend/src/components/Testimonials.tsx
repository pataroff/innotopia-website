import Image from 'next/image'

import oscarSahunImage from '../../public/oscar-sahun.jpeg'
import jesusFabreImage from '../../public/jesus-fabre.jpg'
import hanSteenbruggenImage from '../../public/han-steenbruggen.jpg'

import gameBcnLogo from '../../public/game-bcn-logo.png'
import blitworksLogo from '../../public/blitworks-logo.png'
import museumBelvedereLogo from '../../public/museum-belvedere-logo.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      {/* Main Wrapper */}
      <div className='flex flex-col justify-center items-center p-14 overflow-x-hidden'>
        {/* Heading Container */}
        <div className='flex justify-center items-center font-poppins px-14'>
          <h2 className='text-center lg:text-3xl text-2xl font-bold z-10 py-4'>
            What our customers say
          </h2>
        </div>

        {/* Testimonials Wrapper */}
        <div className='grid lg:grid-cols-3 gap-y-16 lg:gap-x-8 justify-center items-center p-14 pb-48'>
          {/* Testimonial Item */}
          <div className='flex flex-col flex-1 rounded-md bg-slate-100 h-full w-72'>
            {/* Person Image */}
            <div className='relative rounded-full overflow-hidden bg-slate-500 w-20 h-20 -mt-6 ml-8'>
              <Image
                className='relative object-cover w-full h-full'
                src={oscarSahunImage}
                width={0}
                height={0}
                alt='Oscar Sahun'
                style={{ objectPosition: '40% 10%' }}
              />
            </div>
            {/* Testimonial Content Container */}
            <div className='flex flex-col justify-center grow'>
              {/* Text */}
              <div className='px-8 py-4'>
                <p className='font-poppins text-sm font-normal'>
                  “It's a pleasure to collaborate in initiatives such as
                  Indietopia, sharing my experience and knowledge with indie
                  teams trying to succeed in the video game industry.”
                </p>
              </div>
            </div>
            {/* Company Info Wrapper */}
            <div className='flex flex-row justify-center gap-x-4 p-6'>
              {/* Company Logo */}
              <div className='relative bg-white h-9'>
                <Image
                  className='object-contain w-full h-full px-4'
                  src={gameBcnLogo}
                  width={40}
                  height={40}
                  alt='GameBCN Logo'
                />
              </div>
              {/* Person Name and Position */}
              <div className='flex flex-col font-poppins'>
                <h3 className='text-sm font-medium'>Oscar Sahun</h3>
                <h3 className='text-sm font-semilight'>Program Manager</h3>
              </div>
            </div>
          </div>

          {/* Testimonial Item */}
          <div className='flex flex-col flex-1 rounded-md bg-slate-100 h-full w-72'>
            {/* Person Image */}
            <div className='relative rounded-full overflow-hidden bg-slate-500 w-20 h-20 -mt-6 ml-8'>
              <Image
                className='relative object-cover w-full h-full'
                src={jesusFabreImage}
                width={0}
                height={0}
                alt='Jesus Fabre'
                style={{ objectPosition: '40% 10%' }}
              />
            </div>
            {/* Testimonial Content Container */}
            <div className='flex flex-col justify-center grow'>
              {/* Text */}
              <div className='px-8 py-4'>
                <p className='font-poppins text-sm font-normal'>
                  "I really enjoyed my time at Indietopia, I believe the project
                  is a fundamental piece to create a solid gamedev community in
                  Groningen and thus, build a true videogame entrepreneurial
                  ecosystem in the region. Thanks for letting me be part of it."
                </p>
              </div>
            </div>
            {/* Company Info Wrapper */}
            <div className='flex flex-row justify-center gap-x-4 p-6'>
              {/* Company Logo */}
              <div className='relative bg-white h-9'>
                <Image
                  className='object-contain w-full h-full px-4'
                  src={blitworksLogo}
                  width={100}
                  height={100}
                  alt='Blitworks Logo'
                />
              </div>
              {/* Person Name and Position */}
              <div className='flex flex-col font-poppins'>
                <h3 className='text-sm font-medium'>Jesús Fabre</h3>
                <h3 className='text-sm font-semilight'>Marketing Lead</h3>
              </div>
            </div>
          </div>

          {/* Testimonial Item */}
          <div className='flex flex-col flex-1 rounded-md bg-slate-100 h-full w-72'>
            {/* Person Image */}
            <div className='relative rounded-full overflow-hidden bg-slate-500 w-20 h-20 -mt-6 ml-8'>
              <Image
                className='relative object-cover w-full h-full'
                src={hanSteenbruggenImage}
                width={0}
                height={0}
                alt='Han Steenbruggen'
                style={{ objectPosition: '40% 10%' }}
              />
            </div>
            {/* Testimonial Content Container */}
            <div className='flex flex-col justify-center grow'>
              {/* Text */}
              <div className='px-8 py-4'>
                <p className='font-poppins text-sm font-normal'>
                  Museum Belvédère's collaboration with Indietopia resulted in a
                  successful exhibition with publication. In a museum that since
                  its inception had mainly focused on painting, the world of
                  games and digital art forms were new phenomena. We benefited
                  greatly from Indietopia's expertise in this and were more than
                  satisfied with how we were able to present the medium to 'our'
                  audience.
                </p>
              </div>
            </div>
            {/* Company Info Wrapper */}
            <div className='flex flex-row justify-center gap-x-4 p-6'>
              {/* Company Logo */}
              <div className='relative bg-white h-9'>
                <Image
                  className='object-contain w-full h-full px-4'
                  src={museumBelvedereLogo}
                  width={40}
                  height={40}
                  alt='Museum Belvedere Logo'
                />
              </div>
              {/* Person Name and Position */}
              <div className='flex flex-col font-poppins'>
                <h3 className='text-sm font-medium'>Han Steenbruggen</h3>
                <h3 className='text-sm font-semilight'>Director-conservator</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testimonials
