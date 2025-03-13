

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.game-intro').classList.add('active');
    }, 1000); // 1 second delay before the box appears
});
// Function to display text one letter at a time
function typeWriter(element, text, speed) {
    let i = 0;
    let interval = setInterval(function() {
        element.innerHTML += text.charAt(i);
        i++;
        if (i === text.length) {
            clearInterval(interval);
        }
    }, speed);
}

// When the page loads, start the typewriter effect
window.onload = function() {
    const dialogueBox = document.getElementById("dialogue-box");
    const introText = "Welcome to the game! Get ready .";
    typeWriter(dialogueBox, introText, 100); // Speed is 100ms per letter
};

document.getElementById("guest-mode-btn").addEventListener("click", function() {
    window.location.href = "whack-the-mole.html";  // Redirect to whack-the-mole.html
});
