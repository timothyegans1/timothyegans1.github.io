const textElement = document.getElementById('typingText');
const textToType = "Timothy Egans";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index)
        index++;
        setTimeout(typeText, 200) // Adjust the speed of typing by changing this value
    } else {
        // Start blinking cursor effect after typing is finished
        textElement.classList.add('blinking-cursor')
    }
}

typeText();





  //switch function
  const switchTheme = () => {
    //get root element and data-theme attribute
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme
    newTheme = (dataTheme === 'light') ? 'dark' : 'light'

    //set new data-theme attribute
    rootElem.setAttribute('data-theme', newTheme)
    //set new local storage item
    localStorage.setItem('theme', newTheme)

  }


  //add event listener
  document.querySelector('#theme-switcher').addEventListener('click', switchTheme)