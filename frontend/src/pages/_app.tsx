import './styles/global.css'
import type { AppProps } from 'next/app'

// Custom Components
import Layout from '../components/Layout'

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname === '/shopstory-canvas') {
    return <Component {...pageProps} />
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
