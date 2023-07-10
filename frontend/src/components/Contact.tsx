import Link from 'next/link'

const Contact = () => {
  return (
    <section className='bg-dark-blue w-full flex justify-center items-center p-14'>
      {/* Main Wrapper */}
      <div className='flex flex-col md:flex-row justify-center gap-x-8 gap-y-16 items-center md:p-14 w-full container'>
        {/* Left Container Wrapper */}
        <div className='flex flex-col justify-center items-start font-poppins w-full gap-y-6 container'>
          {/* Heading Container */}
          <div>
            <h1 className='text-3xl text-white font-bold'>Contact us</h1>
            {/* Underline Effect */}
          </div>
          {/* Form Container */}
          <div className='rounded-xl bg-white w-full h-full z-0 p-6'>
            {/* Heading Container */}
            <div className='p-2 pl-3'>
              <h3 className='text-md font-bold uppercase'>Get in touch!</h3>
            </div>
            <form className='flex flex-col p-2'>
              {/* Input Wrapper */}
              <div className='flex flex-col md:flex-row gap-x-6'>
                {/* Left Side Input */}
                <div className='w-full'>
                  <div className='flex flex-col'>
                    <label className='text-sm font-semibold px-1.5 py-2'>
                      First Name
                    </label>
                    <input
                      className='rounded-xl bg-slate-200 text-sm w-full h-6 p-2 outline-none z-10'
                      type='text'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label className='text-sm font-semibold px-1.5 py-2'>
                      Last Name
                    </label>
                    <input
                      className='rounded-xl bg-slate-200 text-sm w-full h-6 p-2 outline-none z-10'
                      type='text'
                    />
                  </div>
                </div>
                {/* Right Side Input */}
                <div className='w-full'>
                  <div className='flex flex-col'>
                    <label className='text-sm font-semibold px-1.5 py-2'>
                      Email
                    </label>
                    <input
                      className='rounded-xl bg-slate-200 w-full text-sm h-6 p-2 outline-none z-10'
                      type='text'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label className='text-sm font-semibold px-1.5 py-2'>
                      Phone (optional)
                    </label>
                    <input
                      className='rounded-xl bg-slate-200  w-full h-6 p-2 outline-none z-10'
                      type='text'
                    />
                  </div>
                </div>
              </div>
              {/* Text Area */}
              <div className='flex flex-col'>
                <label className='text-sm font-semibold px-1.5 py-2'>
                  How we can help you?
                </label>
                <textarea
                  className='bg-slate-200 rounded-xl outline-none p-2'
                  cols='10'
                  rows='10'
                ></textarea>
                {/* Send Button */}
                <div className='flex justify-center items-center rounded-xl bg-lime-green w-full h-10 mt-4 mb-0'>
                  <Link href='/'>
                    <span className='uppercase font-bold'>Send</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Right Container Wrapper */}
        <div className='flex flex-col justify-center items-center gap-y-4 font-poppins text-white text-center w-full container'>
          <h2 className='text-2xl font-bold'>Contact Information</h2>
          {/* Contact Info Container */}
          <div className='flex flex-col gap-y-4'>
            <h3>Lübeckweg 2</h3>
            <h3>9723 HE Groningen</h3>
            <h3>0031-50-2113663</h3>
            <h3>hello@indietopia.org</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
