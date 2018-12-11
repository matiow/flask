window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let alexa = new SpeechRecognition()
let przycisk = document.querySelector('input');
function ucho(e){
    console.log("dziki dzik")
    console.dir(e.results[0][0].transcript)
}
alexa.addEventListener('result', ucho);
//alexa.addEventListener('end', alexa.start);

przycisk.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Ha ha ha! Uwolniłeś mnie, pradawnego dżina. Drżyjcie śmiertelnicy!')
    alexa.start()
});