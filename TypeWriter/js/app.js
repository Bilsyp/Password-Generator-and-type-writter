const TypeWritter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};
//    Type Method
TypeWritter.prototype.type = function () {
  // Current index  of word
  const current = this.wordIndex % this.words.length;

  // Get full text pf current word
  const fulltxt = this.words[current];
  // Check if deleting
  if (this.isDeleting) {
    // remove char
    this.txt = fulltxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fulltxt.substring(0, this.txt.length + 1);
    // console.log(this.txt)
  }
  // Insert txt into element
  this.txtElement.innerHTML = `<span>${this.txt}</span>`;

  // Type Speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fulltxt) {
    // Make pause at end

    typeSpeed = this.wait;

    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;

    // Move next word
    this.wordIndex++;
    // Pause before start typing

    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};
// Init on Dom Load
document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector("#txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  const i = new TypeWritter(txtElement, words, wait);
  console.log(words);
}
