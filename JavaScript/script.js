<script src="https://kit.fontawesome.com/22b1aec6e8.js" crossorigin="anonymous"></script>

const textElement = document.getElementById('text');
const textToType = "Hello World!";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 200); // Adjust the speed of typing by changing this value
    }
}

typeText();

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,

  }
  )
  ;