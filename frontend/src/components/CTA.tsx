import Link from 'next/link'

const CTA = () => {
  return (
    <section>
      {/* Main Wrapper */}
      <div className='bg-gray-900 w-full my-16'>
        {/* Text Wrapper */}
        <div className='flex flex-col justify-center items-center font-poppins gap-y-8'>
          <h2 className='font-bold text-3xl text-white mt-12'>
            We are here to help
          </h2>
          {/* Underline Effect */}
          <p className='font-light text-white px-48'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            nam praesentium sed doloremque unde iusto accusamus aut incidunt
            expedita reiciendis ullam, quam tempora aperiam numquam omnis
            cupiditate quibusdam vel esse.
          </p>
          {/* CTA */}
          <div className='flex justify-center items-center mt-4 mb-12 rounded-xl bg-lime-600 w-40 h-10'>
            <Link href='/'>
              <span className='uppercase font-bold'>Get in touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTA
