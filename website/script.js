// Typing animation using JavaScript for accessibility and fallback
const text = "hi, i'm nihalika";
const typedText = document.getElementById('typed-text');
let idx = 0;

function type() {
    if (idx < text.length) {
        typedText.textContent += text.charAt(idx);
        idx++;
        setTimeout(type, 100);
    }
}

typedText.textContent = "";
type();
