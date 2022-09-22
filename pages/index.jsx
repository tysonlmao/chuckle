import 'w3-css/w3.css';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Facts from '../components/facts';

export default function Home() {
  return (
    <div>
      <Head>
        <title>whale</title>
        <meta name="description" content="not whales ;)" />
        <meta property="og:image" content="https://i.ibb.co/4jjgPyP/whale1.jpg" />
      </Head>
      <Header/>
      <br />
      <Facts/>
      <div className="whalelmao">
        <main>
          <div className="w3-display-middle w3-center">
            <h1>WELCOME TO <a href="https://chuckle.city">CHUCKLE.CITY</a></h1>
            <h2 className="w3-center">BEGIN LEARNING ABOUT WHALES</h2>
            <h4 className="w3-text-red">disclaimer: you probably wont learn much about whale</h4>
          </div>
        </main> 

        <Footer/>
      </div>

    </div>
  )
}
