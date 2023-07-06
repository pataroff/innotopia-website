import Image from 'next/image'
import _5GroningenLogo from '../../public/company-logos/5Groningen Logo.svg'
import provinceGroningenLogo from '../../public/company-logos/Province Groningen.svg'
import marketingGroningenLogo from '../../public/company-logos/Marketing Groningen Logo.png'
import hanzeLogo from '../../public/company-logos/Hanze Logo.svg'
import nhlLogo from '../../public/company-logos/NHL Stenden Logo.svg'

const Experience = () => {
  return (
    <section>
      {/* Main Wrapper */}
      <div className='flex flex-col justify-center items-center md:my-20 md:mx-32'>
        {/* Text Container */}
        <div>
          <h3 className='font-poppins font-bold text-xs uppercase mb-16'>
            Companies that have innovated with us
          </h3>
        </div>
        {/* Companies Container */}
        <div className='flex flex-col gap-y-24 md:flex-row justify-center items-center gap-x-20 2xl:gap-x-44'>
          {/* Company Logo */}
          <div>
            <Image
              className='grayscale'
              priority
              src={_5GroningenLogo}
              alt='5Groningen'
              width={100}
              height={100}
            />
          </div>
          {/* Company Logo */}
          <div>
            <Image
              className='grayscale'
              priority
              src={provinceGroningenLogo}
              alt='Province Groningen'
              width={100}
              height={100}
            />
          </div>
          {/* Company Logo */}
          <div>
            <Image
              className='grayscale'
              priority
              src={marketingGroningenLogo}
              alt='Marketing Groningen'
              width={100}
              height={100}
            />
          </div>
          {/* Company Logo */}
          <div>
            <Image
              className='grayscale'
              priority
              src={hanzeLogo}
              alt='Hanze Hogeschool'
              width={140}
              height={140}
            />
          </div>
          {/* Company Logo */}
          <div>
            <Image
              className='grayscale'
              priority
              src={nhlLogo}
              alt='NHL Stenden'
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
