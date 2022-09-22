import react from 'react';
import Script from 'next/script'


export default function Facts() {
    return(
        <div>
            <Script src="https://scripts.chuckle.city/whaleFacts.js"></Script>
            <marquee width="100%" direction="right" className="whale-facts">replace me</marquee>
        </div>
    )
}