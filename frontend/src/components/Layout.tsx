import { Poppins } from 'next/font/google'
import Nav from './Nav'
import PageScrollTop from './common/PageScrollTop'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const Layout = ({ children }) => {
  return (
    <div className={`${poppins.variable}`}>
      <Nav />
      <main>{children}</main>
      <PageScrollTop />
    </div>
  )
}
export default Layout
