import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  return (
    <section>
      {/* Main Wrapper */}
      {/* overflow-x-hidden fixes the weird white space on the right side in mobile view! */}
      <div className='flex flex-col justify-center items-center bg-dark-blue w-full overflow-x-hidden'>
        {/* Text Wrapper */}
        <div className='flex flex-col justify-center items-center text-center font-poppins p-14'>
          <div className='flex flex-col py-4'>
            <h1 className='font-poppins text-white md:text-2xl lg:text-3xl text-2xl font-bold z-10'>
              We are here to help
            </h1>
            <div className='bg-lime-green h-2 w-full z-0 -mt-2'></div>
          </div>
          {/* Underline Effect */}
          <p className='font-light text-white px-10 py-4 pb-10 md:px-24 max-w-3xl'>
            Innotopia helps the northern digital creative industry blossom,
            bridging the gap between schools and the industry. Companies that
            want to innovate through gamification, receive support from starting
            and professional game developers. Examples of projects are
            digitizing art, setting up a virtual world for training purposes or
            giving rewards for repeat purchases.
          </p>
          {/* CTA */}
          <Link href='#contact'>
            <div className='group flex justify-center items-center gap-x-2 rounded-xl bg-lime-green w-40 h-10 hover:scale-110 transition-transform duration-150'>
              <span className='uppercase font-bold'>Get in touch</span>
              {/* <FaArrowRight className='hidden group-hover:inline-block' /> */}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CTA;
