import 'w3-css/w3.css';

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>whale</title>
        <meta name="description" content="not whales ;)" />
      </Head>
      <header>
        
      </header>
        <main>
          <div className="w3-display-middle smell">
            <h1>WELCOME TO <a href="https://chuckle.city">CHUCKLE.CITY</a></h1>
            <h2 className="w3-center">BEGIN LEARNING ABOUT WHALES</h2>
            <h4 className="w3-red w3-center">disclaimer: you probably wont learn much about whale</h4>
          </div>
        </main>

        <footer>
          <p className="w3-center">We accept <a href="dogecoin">dogecoin</a> and <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Turkish Lira!</a></p>
        </footer>
    </div> 
  )
}
