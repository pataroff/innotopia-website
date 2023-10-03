import { useState, useEffect } from 'react'
import * as Icons from 'react-icons/fa'

const Services = ({ services }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section id='services' className='scroll-mt-16'>
      {/* Main Wrapper */}
      <div className='flex justify-center items-center'>
        {/* Main Container */}
        <div className='flex flex-col justify-center items-center overflow-x-hidden lg:px-32 py-14'>
          {/* Text Container */}
          <div className='flex flex-col p-14'>
            <h1 className='relative font-poppins lg:text-3xl text-2xl font-bold z-10'>
              How We Can Help You
            </h1>
            {/* Underline Effect */}
            <div className='bg-lime-green h-2 w-full z-0 -mt-2'></div>
          </div>
          {/* Services Wrapper */}
          <div className='flex flex-col font-poppins justify-center items-center gap-y-32'>
            {/* Service Item */}
            {services.map((service, index) => {
              const isOddIndex = index % 2 !== 0

              const DynamicIcon = Icons[service.icon]
              return (
                <div
                  className={`flex flex-col-reverse lg:flex-row gap-x-40 gap-y-16 ${
                    isOddIndex ? 'lg:flex-row-reverse' : ''
                  }`}
                  key={service._id}
                >
                  {/* Service Text */}
                  <div className='flex flex-col gap-y-4 justify-center'>
                    <h2 className='text-2xl font-bold'>
                      {service.title ? service.title : 'Untitled'}
                    </h2>
                    {service.body && service.body[0]?.children[0]?.text ? (
                      <p>{service.body[0].children[0].text}</p>
                    ) : (
                      <p>No Description Available</p>
                    )}
                  </div>
                  {/* Service Icon */}
                  <div className='flex justify-center items-center hover:scale-110 transition-transform duration-150'>
                    <DynamicIcon size={150} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services
