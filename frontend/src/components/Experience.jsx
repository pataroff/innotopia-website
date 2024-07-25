import Image from 'next/image'

const Experience = ({ companies }) => {
  return (
    <section>
      <div className='flex justify-center items-center'>
        {/* Main Container */}
        <div className='flex flex-col justify-center items-center container'>
          {/* Text Container */}
          <div>
            <h3 className='font-poppins text-center px-14 py-12 font-bold text-md uppercase'>
              Companies that have innovated with us
            </h3>
          </div>
          {/* Companies Container */}
          <div className='flex flex-col gap-y-24 md:flex-row justify-center items-center lg:gap-x-20 md:gap-x-14 lg:py-14 lg:px-24 md:py-7 md:px-20'>
            {/* Company Logo */}
            {companies.map((company) => (
              <div key={company._id}>
                <Image
                  className='grayscale hover:scale-125 hover:grayscale-0 transition-transform duration-150'
                  priority
                  src={company.logo}
                  alt={company.title}
                  width={125}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
