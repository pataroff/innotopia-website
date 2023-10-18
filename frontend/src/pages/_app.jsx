import './styles/global.css';

// Custom Components
import Layout from '../components/Layout';

export default function App({ Component, pageProps, router }) {
  if (router.pathname === '/shopstory-canvas') {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
