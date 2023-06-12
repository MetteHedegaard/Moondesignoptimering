/* Burgermenu Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  //hvis myLinks har en style der hedder block skal den have en styling som hedder none
  if (x.style.display === "block") {
    x.style.display = "none";
  } else { //ellers skal stylingen være block 
    x.style.display = "block";
  }
}


/* slideshow   
credit https://www.w3schools.com/howto/howto_js_slideshow.asp*/

// let er variable som er = 1 
let slideIndex = 1;
showSlides(slideIndex);
// showSlides er en function som tager variblen slideIndex som en paramter 

// Next/previous controls
// plusSlides function som tager parameteren (n) - 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  // slides er en variable som ligger i htlm - variablen er vores billeder
  if (n > slides.length) {
    slideIndex = 1
  }
  // hvis n er mindre end 1 er slideIndex slides.lenght dvs. vores 3 billeder
  if (n < 1) {
    slideIndex = slides.length
  }
  // i dette for lopp sætter vi i = 0 og hvis i er større end længden af slides lægger den en til i 
  // variblen i bestemmer hvilket billedet som skal vises i html Myslides. dvs når en nyt billede vises skal de andre  skjules (display none)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // dots tager variblen i (1/3) - dots tager numret og replacer klassenavnet med aktiv, og ingenting 
  // .replace er en indbygget js metode som erstatter klassen
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // hvis variablen slides, har parameteren slideIndex-1 skal style være block
  // hvis variablen dots med parameteren slideIndex-1 skal klassenavnet være aktiv 
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


