import Link from 'next/link'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='flex justify-center items-center bg-dark-blue w-full h-full overflow-x-hidden'>
        {/* Main Wrapper */}
        <div className='flex flex-col lg:flex-row justify-center gap-x-8 gap-y-16 items-center py-16 lg:px-40 px-12 w-full container'>
          {/* Left Container Wrapper */}
          <div className='flex flex-col justify-center lg:items-start items-center font-poppins w-full gap-y-6 container'>
            {/* Heading Container */}
            <div>
              <h1 className='text-3xl text-white font-bold py-6'>Contact us</h1>
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
                <div className='flex flex-col lg:flex-row gap-x-6'>
                  {/* Left Side Input */}
                  <div className='w-full'>
                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-3'>
                        First Name
                      </label>
                      <input
                        className='rounded-xl bg-slate-200 text-sm w-full h-8 p-2 outline-none z-10'
                        type='text'
                      />
                    </div>

                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-3'>
                        Last Name
                      </label>
                      <input
                        className='rounded-xl bg-slate-200 text-sm w-full h-8 p-2 outline-none z-10'
                        type='text'
                      />
                    </div>
                  </div>
                  {/* Right Side Input */}
                  <div className='w-full'>
                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-3'>
                        Email
                      </label>
                      <input
                        className='rounded-xl bg-slate-200 w-full text-sm h-8 p-2 outline-none z-10'
                        type='text'
                      />
                    </div>

                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-3 whitespace-nowrap'>
                        Phone (optional)
                      </label>
                      <input
                        className='rounded-xl bg-slate-200  w-full h-8 p-2 outline-none z-10'
                        type='text'
                      />
                    </div>
                  </div>
                </div>
                {/* Text Area */}
                <div className='flex flex-col'>
                  <label className='text-sm font-semibold px-1.5 py-3'>
                    How we can help you?
                  </label>
                  <textarea
                    className='bg-slate-200 rounded-xl outline-none p-2'
                    cols='5'
                    rows='5'
                  ></textarea>
                  {/* Send Button */}

                  <Link href='/'>
                    <div className='flex justify-center items-center rounded-xl bg-lime-green w-full h-10 mt-4 mb-0'>
                      <span className='uppercase font-bold'>Send</span>
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* Right Container Wrapper */}
          <div className='flex flex-col justify-center items-center gap-y-12 font-poppins text-white text-center w-full container'>
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
      </div>
    </section>
  )
}
export default Contact
