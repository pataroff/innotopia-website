import { Poppins } from 'next/font/google'
import Nav from './Nav'

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
    </div>
  )
}
export default Layout
