import Image from 'next/image'

const Experience = ({ companies }) => {
  return (
    <section>
      {/* Main Wrapper */}
      <div className='flex flex-col justify-center items-center'>
        {/* Text Container */}
        <div>
          <h3 className='font-poppins text-center px-14 py-12 font-bold text-md uppercase'>
            Companies that have innovated with us
          </h3>
        </div>
        {/* Companies Container */}
        <div className='flex flex-col gap-y-24 md:flex-row justify-center items-center gap-x-16 2xl:gap-x-40 px-24 py-14'>
          {/* Company Logo */}
          {companies.map((company) => (
            <div key={company._id}>
              <Image
                className='grayscale hover:scale-125 hover:grayscale-0 transition-transform duration-150'
                priority
                src={company.logo}
                alt={company.title}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Experience
