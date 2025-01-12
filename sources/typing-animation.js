function setupTypingAnimation() {
    const texts = [
        "Začínající Software Developer",
        "Student SPŠ na Proseku(zatím)",
        "Innovátor",
        "C++ Programátor",
        "Designer",
        "Python programátor",
        "Webový Developer",
        "JavaScript amatér",
        "Milovník technologie"
    ];
    let currentTextIndex = 0;
    const typingElement = document.querySelector('.typing-text');

    function typeText(text, element) {
        let index = 0;
        element.textContent = '';
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Typing speed
            } else {
                setTimeout(erase, 2000); // Wait before erasing
            }
        }

        function erase() {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
                setTimeout(erase, 50); // Erasing speed
            } else {
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(() => typeText(texts[currentTextIndex], element), 500);
            }
        }

        type();
    }

    typeText(texts[currentTextIndex], typingElement);
}

document.addEventListener('DOMContentLoaded', setupTypingAnimation);
