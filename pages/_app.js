import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS Events APP</title>
        <meta name='viewport' content='initial-scale=1.0,width=device-width' />
        <meta name='discription' content='This is all Event Page Content.' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
