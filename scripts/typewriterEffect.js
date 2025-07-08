const text = "Your Personalized Revision Companion";
const element = document.getElementById("typewriter");
let index = 0;

// function typewriterEffect(text) {
//     element.textContent = ''; // Clear the previous text before restarting
//     index = 0; // Reset the index to start from the beginning

//     function type() {
//         if (index < text.length) {
//             element.textContent += text.charAt(index); // append each character
//             index++;
//             setTimeout(type, 75); // call the type function recursively
//         }
//     }

//     type(); // Call the type function once to start typing
// }

// // Start typing the text initially
// typewriterEffect(text);

// // Restart typing every 60 seconds (60000 ms)
// setInterval(() => {
//     typewriterEffect(text); // Restart the effect every minute
// }, 6000);

function typewriterEffect(text) {
  element.textContent = "";
  index = 0;

  let type = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(type);
    }
  }, 75);
}

typewriterEffect(text);

//Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const main_links = document.querySelector(".main-links");

hamburger.addEventListener("click", () => {
  main_links.classList.toggle("show");
});
