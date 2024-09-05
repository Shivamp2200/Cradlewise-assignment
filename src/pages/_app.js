import '@/style/globals.css'
import Head from 'next/head';
import Header from '../../components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return(
    <>
        <Header/>
        <Component {...pageProps} />
    </>
  )

}
