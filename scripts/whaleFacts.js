let whaleCum = [
    "EVERY MINUTE A WHALE SNEEZES SO HARD A PEGUIN DIES VIA BLOWHOLE EXPLOSION",
    "Whales Sometimes Eat Sushi on days of the week that end in “Day”",
    "EVERY 34.485 Second a whale discovers cocaine in the ocean floors left by Pablo Whale"
]

const random = whaleCum[Math.floor(Math.random() * whaleCum.length)];
console.log(random);    

window.addEventListener("load", () => {
    document.getElementByClass("whale-facts").innerHTML = random;   
});


