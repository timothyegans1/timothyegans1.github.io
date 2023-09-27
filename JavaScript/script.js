const textElement = document.getElementById('typingText');
const textToType = "Timothy Egans";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 200); // Adjust the speed of typing by changing this value
    } else {
        // Start blinking cursor effect after typing is finished
        textElement.classList.add('blinking-cursor');
    }
}

typeText();


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,

  }
  )
  ;


  