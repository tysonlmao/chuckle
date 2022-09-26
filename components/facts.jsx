import react from 'react';
import Script from 'next/script'


export default function Facts() {
    return (
        <div>
            <script src="https://scripts.chuckle.city/whaleFacts.js"></script>
            <marquee width="100%" direction="right" id="whale-facts">.</marquee>
            <h2 id="whale-facts"></h2>
        </div>
    )
}