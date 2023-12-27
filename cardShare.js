// flip the card
const rotateBtn = document.querySelector("#rotate");
const cardFront = document.querySelector("#cardFront");
const cardBack = document.querySelector("#cardBack");

rotateBtn.addEventListener("click", function () {
  if (cardFront.style.display === "none") {
    cardFront.style.display = "flex";
    cardBack.style.display = "none";
  } else {
    cardFront.style.display = "none";
    cardBack.style.display = "flex";
  }
});


// coppy text
var copyBtns = document.querySelectorAll('.copyBtn');

copyBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var altText = this.alt;

    var textarea = document.createElement('textarea');
    textarea.value = altText;
    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand('copy');

    document.body.removeChild(textarea);

    this.classList.add('clicked');

        setTimeout(function() {
          btn.classList.remove('clicked');
        }, 300);
  });
});