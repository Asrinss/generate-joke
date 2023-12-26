const jokeContainer = document.getElementById("joke");
const  btn= document.getElementById("btn");
const url ="https://v2.jokeapi.dev/joke/Any";

let getJoke = () =>{
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
        speakJoke(item.joke);
    });
}

btn.addEventListener("click",getJoke);
getJoke();

function speakJoke(text) {
    const speechSynthesis = window.speechSynthesis;

    
    if (!speechSynthesis) {
        console.error("Seslendirme özelliği desteklenmiyor.");
        return;
    }

    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.text = text;
    utterance.lang = "en-US";

    
    speechSynthesis.speak(utterance);
    
}