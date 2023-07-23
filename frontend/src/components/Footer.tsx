import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-center items-center bg-dark-blue w-full'>
        {/* Main Wrapper */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-y-6 py-8 w-full container'>
          {/* 2023 | Innotopia */}
          <div className='flex justify-center font-poppins text-sm font-semibold text-white w-full h-full'>
            <h3>{new Date().getFullYear()} | Innotopia</h3>
          </div>
          {/* All Rights Reserved */}
          <div className='flex justify-center font-poppins text-sm font-semibold  text-white w-full h-full'>
            <h3>All rights reserved.</h3>
          </div>
          {/* Social Media Links */}
          <div className='flex flex-row justify-center gap-x-2 w-full h-full'>
            <Link
              target='_blank'
              href='https://www.linkedin.com/company/indietopia'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                width={30}
                height={30}
                color='white'
              />
            </Link>
            <Link target='_blank' href='https://www.facebook.com/indietopia/'>
              <FontAwesomeIcon
                icon={faSquareFacebook}
                width={30}
                height={30}
                color='white'
              />
            </Link>
            <Link target='_blank' href='https://twitter.com/IndietopiaNL'>
              <FontAwesomeIcon
                icon={faSquareTwitter}
                width={30}
                height={30}
                color='white'
              />
            </Link>
            <Link target='_blank' href='https://www.instagram.com/indietopia'>
              <FontAwesomeIcon
                icon={faSquareInstagram}
                width={30}
                height={30}
                color='white'
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
