import Image from 'next/image'
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
      <div className='flex flex-col justify-center items-center'>
        {/* Text Container */}
        <div className='relative my-24'>
          <h1 className='relative font-poppins text-3xl font-bold z-10'>
            How We Can Help You
          </h1>
          {/* Underline Effect */}
          <div className='absolute bg-lime-600 z-0 h-2'></div>
        </div>
        {/* Services Wrapper */}
        <div className='flex flex-col font-poppins justify-center items-center gap-y-32'>
          {/* Service Item */}
          <div className='flex flex-col-reverse md:flex-row gap-x-36 px-24'>
            {/* Service Text */}
            <div>
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
            <div className='mb-16 px-8'>
              <FontAwesomeIcon icon={faLightbulb} width={150} height={150} />
            </div>
          </div>

          {/* Service Item */}
          <div className='flex flex-col-reverse md:flex-row-reverse gap-x-36 px-24'>
            {/* Service Text */}
            <div>
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
            <div className='mb-16 px-8'>
              <FontAwesomeIcon icon={faRocket} width={150} height={150} />
            </div>
          </div>

          {/* Service Item */}
          <div className='flex flex-col-reverse md:flex-row gap-x-36 px-24'>
            {/* Service Text */}
            <div>
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
            <div className='mb-16 px-8'>
              <FontAwesomeIcon icon={faGamepad} width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services
