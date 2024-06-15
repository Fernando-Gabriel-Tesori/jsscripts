let messages = ["Olá, mundo!", "Como vai?", "Bem-vindo ao projeto!", "Divirta-se!"];
let currentIndex = 0;
let intervalId;
let isRunning = false;

function changeMessage() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

function toggleInterval() {
    const button = document.getElementById("toggleButton");
    if (isRunning) {
        clearInterval(intervalId);
        button.textContent = "Iniciar";
    } else {
        intervalId = setInterval(changeMessage, 3000);
        button.textContent = "Parar";
    }
    isRunning = !isRunning;
}

document.getElementById("toggleButton").addEventListener("click", toggleInterval);
