let speech = new SpeechSynthesisUtterance();
let sound = [];
let voiceSelect = document.querySelector("select"); // Corrected selector

window.speechSynthesis.onvoiceschanged = () => {
    sound = window.speechSynthesis.getVoices();
    speech.voice = sound[0]; // Set a default voice, you can change this as needed

    sound.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i); // Corrected assignment
    });
};


voiceSelect.addEventListener("change",()=>{
    speech.voice=sound[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
