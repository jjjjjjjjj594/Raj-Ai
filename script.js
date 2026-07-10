const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, type) {
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
    }, 500);

    input.value = "";
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
