import Link from 'next/link'
import { useState } from 'react'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:hello@indietopia.org?subject=Contact Request - ${firstName} ${lastName}&body=This email was automatically generated from the form you filled in.%0A%0APlease ensure that the information you have provided is correct.%0A%0AFirst Name: ${firstName}%0A%0ALast Name: ${lastName}%0A%0AEmail: ${email}%0A%0APhone (optional): ${phone}%0A%0AHow we can help you?:%0A%0A${message}%0A%0A`
    window.location.href = mailtoLink
  }

  return (
    <section id='contact' className='scroll-mt-4'>
      <div className='flex justify-center items-center bg-dark-blue w-full h-full overflow-x-hidden lg:px-32'>
        {/* Main Wrapper */}
        <div className='flex flex-col lg:flex-row justify-center gap-x-8 gap-y-16 items-center lg:py-16 py-8 lg:px-40 px-12 w-full container'>
          {/* Left Container Wrapper */}
          <div className='flex flex-col justify-center lg:items-start items-center font-poppins w-full gap-y-6 container'>
            {/* Heading Container */}
            <div className='flex flex-col py-6'>
              <h1 className='text-3xl text-white font-bold'>Contact us</h1>
              {/* Underline Effect */}
              <div className='bg-lime-green h-2 w-full z-0 -mt-2'></div>
            </div>
            {/* Form Container */}
            <div className='rounded-xl bg-white w-full h-full z-0 p-6'>
              {/* Heading Container */}
              <div className='p-2 pl-3'>
                <h3 className='text-md font-bold uppercase'>Get in touch!</h3>
              </div>
              <form className='flex flex-col p-2' onSubmit={handleSubmit}>
                {/* Input Wrapper */}
                <div className='flex flex-col lg:flex-row gap-x-6'>
                  {/* Left Side Input */}
                  <div className='w-full'>
                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-1.5'>
                        First Name
                      </label>
                      <input
                        className='rounded-xl bg-slate-200 text-sm w-full h-8 p-2 outline-none z-10'
                        type='text'
                        name='fname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>

                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-1.5'>
                        Last Name
                      </label>
                      <input
                        className='rounded-xl bg-slate-200 text-sm w-full h-8 p-2 outline-none z-10'
                        type='text'
                        name='lname'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/* Right Side Input */}
                  <div className='w-full'>
                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-1.5'>
                        Email
                      </label>
                      <input
                        className='rounded-xl bg-slate-200 w-full text-sm h-8 p-2 outline-none z-10'
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-1.5 whitespace-nowrap'>
                        Phone (optional)
                      </label>
                      <input
                        className='rounded-xl bg-slate-200  w-full h-8 p-2 outline-none z-10'
                        type='tel'
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* Text Area */}
                <div className='flex flex-col'>
                  <label className='text-sm font-semibold px-1.5 py-1.5'>
                    How we can help you?
                  </label>
                  <textarea
                    className='bg-slate-200 rounded-xl outline-none p-2'
                    cols={7}
                    rows={7}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  {/* Send Button */}
                  <input
                    className='flex justify-center items-center rounded-xl bg-lime-green uppercase font-bold cursor-pointer w-full h-10 mt-4 mb-0 hover:brightness-110 transition-all duration-500'
                    type='submit'
                    value='Send'
                  />
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
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19114.02485503884!2d6.5890960000000005!3d53.21331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9d2adf7c0bde1%3A0x6537de64570dee4d!2sL%C3%BCbeckweg%202%2C%209723%20HE%20Groningen%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1693154914442!5m2!1sen!2sus'
              width='400'
              height='300'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
