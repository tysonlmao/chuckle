import 'w3-css/w3.css';

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>whale</title>
        <meta name="description" content="not whales ;)" />
      </Head>

      <main>
        <header>
          <div className="w3-display-middle">
            <h1>WELCOME TO <a href="https://chuckle.city">CHUCKLE.CITY</a></h1>
            <h2>BEGIN LEARNING ABOUT WHALES</h2>
            <h4 className="w3-red"> (disclaimer: you probably won't learn much about whales)</h4>
          </div>
        </header>
      </main>
    </div> 
  )
}
