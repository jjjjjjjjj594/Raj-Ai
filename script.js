const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
function addMessage(text, type) {function speak(text){
const statusText = document.getElementById("statusText");
    const speech = new SpeechSynthesisUtterance();

    speech.text = text;

    speech.lang = "hi-IN";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}
    const div = document.createElement("div");
    div.className = type;
    div.innerHTML = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function aiReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "👋 Hello Rajpal! मैं Raj AI हूँ।";
    }

    if (message.includes("kaise ho")) {
        return "😊 मैं ठीक हूँ। आप कैसे हैं?";
    }

    if (message.includes("time")) {
        return "🕒 अभी समय है: " + new Date().toLocaleTimeString();
    }

    if (message.includes("date")) {
        return "📅 आज की तारीख: " + new Date().toLocaleDateString();
    }

    return "🤖 अभी मैं सीख रहा हूँ। अगले Version में मैं AI से जवाब दूँगा।";
}

function sendMessage() {

    const message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user");

    const reply = aiReply(message);

    setTimeout(() => {

    addMessage(reply, "ai");

    speak(reply);

}, 500);

    input.value = "";
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "hi-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
document.querySelector(".ai-orb").classList.add("listening");
statusText.innerText = "🎤 Listening...";
    micBtn.addEventListener("click", () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
document.querySelector(".ai-orb").classList.remove("listening");
statusText.innerText = "🤖 Thinking...";
        const text = event.results[0][0].transcript;

        input.value = text;

        sendMessage();
    };

} else {

    alert("Speech Recognition इस ब्राउज़र में उपलब्ध नहीं है.");

}
