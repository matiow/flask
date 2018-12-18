window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const alexa = new SpeechRecognition();
const ss = window.speechSynthesis;
let ssu = new SpeechSynthesisUtterance();
let glosy = [];

// dodaje event do okna przegladarki i spr czy go nie kliknelismy,
// po kliknieciu uruchamia alexe i zmienia htmla strony na alexa start
window.addEventListener('click', () => {
    document.body.innerHTML = "PseudoAlexa start";
    return alexa.start();
});

alexa.addEventListener('result', (event)=>{
    console.dir(event);
    console.log(event.results[0][0].transcript);
    alexaJobs(event.results[0][0].transcript);
});

alexa.addEventListener('end', ()=>{
    document.body.innerHTML = "PseudoAlexa end";
});

ss.addEventListener('voiceschanged', ()=>{
    glosy = ss.getVoices();
    console.dir(glosy);
});

function alexaJobs(text) {
    text = text.toLowerCase();
    if (text.includes("hello there")) {
        //cośtubedzie
        ssu.text = "general kenobi"
        ssu.lang = glosy[1];
        ss.speak(ssu);
    } else if (text.includes("witaj")) {
        //cośtubedzie
        ssu.text = "Co"
        ssu.lang = glosy[0];
        ss.speak(ssu);
    }
}