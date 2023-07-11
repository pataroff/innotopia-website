import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLightbulb,
  faRocket,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <section>
      {/* Main Wrapper */}
      <div className='flex flex-col justify-center items-center overflow-x-hidden'>
        {/* Text Container */}
        <div>
          <h1 className='relative font-poppins md:text-2xl lg:text-3xl text-2xl font-bold z-10 p-14'>
            How We Can Help You
          </h1>
          {/* Underline Effect */}
          <div className='absolute bg-lime-600 z-0 h-2'></div>
        </div>
        {/* Services Wrapper */}
        <div className='flex flex-col container font-poppins justify-center items-center gap-y-32 p-14'>
          {/* Service Item */}
          <div className='flex flex-col-reverse md:flex-row gap-x-40 gap-y-16 px-24'>
            {/* Service Text */}
            <div className='flex flex-col gap-y-4'>
              <h2 className='text-2xl font-bold'>
                Custom interactive products for you and your business
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                laborum doloribus expedita. Odit, impedit! Iste enim facere
                inventore iusto quibusdam quidem provident exercitationem
                praesentium.
              </p>
            </div>
            {/* Service Icon */}
            <div className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faLightbulb} width={150} height={150} />
            </div>
          </div>

          {/* Service Item */}
          <div className='flex flex-col-reverse md:flex-row-reverse gap-x-36 gap-y-16 px-24'>
            {/* Service Text */}
            <div className='flex flex-col gap-y-4'>
              <h2 className='text-2xl font-bold'>
                Kickstart your career in the industry
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                laborum doloribus expedita. Odit, impedit! Iste enim facere
                inventore iusto quibusdam quidem provident exercitationem
                praesentium.
              </p>
            </div>
            {/* Service Icon */}
            <div className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faRocket} width={150} height={150} />
            </div>
          </div>

          {/* Service Item */}
          <div className='flex flex-col-reverse md:flex-row gap-x-36 gap-y-16 px-24'>
            {/* Service Text */}
            <div className='flex flex-col gap-y-4'>
              <h2 className='text-2xl font-bold'>
                Gamification and game-based experiences
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                laborum doloribus expedita. Odit, impedit! Iste enim facere
                inventore iusto quibusdam quidem provident exercitationem
                praesentium.
              </p>
            </div>
            {/* Service Icon */}
            <div className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faGamepad} width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services
