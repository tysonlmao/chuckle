import 'w3-css/w3.css';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>A Whale of a Time</title>
        <meta name="description" content="not whales ;)" />
      </Head>
      <Header/>
      
      <Footer/>

    </div>
  )
}
