import Head from 'next/head'

import { Poppins } from 'next/font/google'
import Nav from './common/Nav'
import Footer from './common/Footer'
import PageScrollTop from './common/PageScrollTop'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const Layout = ({ children }) => {
  return (
    <div className={`${poppins.variable}`}>
      <Head>
        <title>
          Innotopia | Empowering Digital Transformation and Innovation
          Acceleration
        </title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
      <PageScrollTop />
    </div>
  )
}
export default Layout
