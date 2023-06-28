import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const Layout = ({ children }) => {
  return (
    <div className={`${poppins.variable}`}>
      <main>{children}</main>
    </div>
  )
}
export default Layout
