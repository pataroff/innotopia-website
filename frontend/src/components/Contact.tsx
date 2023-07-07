const Contact = () => {
  return (
    <section>
      <div className='bg-gray-900'>
        {/* Main Wrapper */}
        <div className='p-16 pl-32'>
          {/* Heading Container */}
          <div className='flex justify-start mb-8'>
            <h2 className='font-poppins font-bold text-3xl text-white'>
              Contact us
            </h2>
          </div>

          <div className='flex flex-row gap-x-32'>
            {/* Form */}
            <div className='rounded-lg bg-white w-full h-64'></div>
            {/* Contact Information */}
            <div className='flex flex-col gap-y-4 justify-center items-center w-full font-poppins '>
              <h2 className='text-xl text-white font-semibold'>
                Contact Information
              </h2>
              <p className='text-white'>Lubeckweg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
