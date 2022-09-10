import head from "next/head"
import react from "react"
import Head from "next/head"

export default function rick() {
    return (
        <div>
            <Head>
                <title>got you</title>
                <meta name="description" content="not a rickroll, i swear" />
                <meta httpEquiv="Refresh" content="0; url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'" />
            </Head>
        
        <main>
            <p>never gonna give you up</p>
        </main>
    </div>
    )
}