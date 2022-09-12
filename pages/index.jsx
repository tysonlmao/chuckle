import 'w3-css/w3.css';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>whale</title>
        <meta name="description" content="not whales ;)" />
        <meta property="og:image" content="https://i.ibb.co/4jjgPyP/whale1.jpg" />
      </Head>
      <div className="whalelmao">
        <header>
          <nav className="">
              <a href="#" className="nav-a">Facts</a>
              <a href="#" className="nav-a">Images</a>
              <a href="#" className="nav-a">Movies</a>
              <a href="#" className="nav-a">Anatomy</a>
          </nav>
        </header>
          <main>
            <div className="w3-display-middle w3-center">
              <h1>WELCOME TO <a href="https://chuckle.city">CHUCKLE.CITY</a></h1>
              <h2 className="w3-center">BEGIN LEARNING ABOUT WHALES</h2>
              <h4 className="w3-red w3-center">disclaimer: you probably wont learn much about whale</h4>
            </div>
          </main>

          <footer className="footer-index">
            <p className="w3-center">We accept <a href="dogecoin" className="w3-text-red ">Dogecoin</a> and <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="w3-text-red">Turkish Lira!</a></p>
          </footer>
      </div>

    </div> 
  )
}
