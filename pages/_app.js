import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Layout from '../components/Layout.jsx'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (<>
  <Script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-KLG37VTXLT`} />
        <Script strategy="afterInteractive" id='ga-init'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KLG37VTXLT');
          `}
      </Script>
  <Layout >
  <Component {...pageProps} />
  </Layout>
  </>)
}

export default MyApp

