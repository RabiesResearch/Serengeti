// ----------------------------------------------------------------------------
// LIGHTBBOX 1 - VACCINATION (12 PHOTOS)

// Open the Modal
function openModal1() {
  document.getElementById('myModal1').style.display = "block";
}

// Close the Modal
function closeModal1() {
  document.getElementById('myModal1').style.display = "none";
}

var slideIndex1 = 1; // Set slide default to 1
showSlides1(slideIndex1); // Set slide selection to image that was clicked

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

// Select slides
function showSlides1(n) {
  var First_slide1 = 1;
  var Last_slide1 = 12;
  var i1;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("demo1");
  var captionText1 = document.getElementById("caption1");
  if (n > Last_slide1 & n < 100) {slideIndex1 = First_slide1} // slides.length
  if (n < First_slide1) {slideIndex1 = Last_slide1} // slides.length
  for (i1 = 0; i1 < Last_slide1; i1++) { // slides.length
      slides1[i1].style.display = "none";
  }
  for (i1 = 0; i1 < dots1.length; i1++) {
      dots1[i1].className = dots1[i1].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
  captionText1.innerHTML = dots1[slideIndex1-1].alt;
}

// ----------------------------------------------------------------------------
// LIGHTBBOX 2 - CONTACT TRACING (4 PHOTOS)

// Open the Modal
function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

// Close the Modal
function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

// Select slides
function showSlides2(n) {
  var First_slide2 = 1;
  var Last_slide2 = 4;
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("demo2");
  var captionText2 = document.getElementById("caption2");
  if (n > Last_slide2) {slideIndex2 = First_slide2}
  if (n < First_slide2) {slideIndex2 = Last_slide2}
  for (i2 = 0; i2 < Last_slide2; i2++) {
      slides2[i2].style.display = "none";
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
      dots2[i2].className = dots2[i2].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
  captionText2.innerHTML = dots2[slideIndex2-1].alt;
}

// ----------------------------------------------------------------------------
// LIGHTBBOX 3 - LAB ANALYSIS (3 PHOTOS)

// Open the Modal
function openModal3() {
  document.getElementById('myModal3').style.display = "block";
}

// Close the Modal
function closeModal3() {
  document.getElementById('myModal3').style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

// Select slides
function showSlides3(n) {
  var First_slide3 = 1;
  var Last_slide3 = 3;
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("demo3");
  var captionText3 = document.getElementById("caption3");
  if (n > Last_slide3) {slideIndex3 = First_slide3}
  if (n < First_slide3) {slideIndex3 = Last_slide3}
  for (i3 = 0; i3 < Last_slide3; i3++) {
      slides3[i3].style.display = "none";
  }
  for (i3 = 0; i3 < dots3.length; i3++) {
      dots3[i3].className = dots3[i3].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
  captionText3.innerHTML = dots3[slideIndex3-1].alt;
}

// ----------------------------------------------------------------------------
// LIGHTBBOX 4 - TRAINING & CONFERENCES (3 PHOTOS)

// Open the Modal
function openModal4() {
  document.getElementById('myModal4').style.display = "block";
}

// Close the Modal
function closeModal4() {
  document.getElementById('myModal4').style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

// Select slides
function showSlides4(n) {
  var First_slide4 = 1;
  var Last_slide4 = 3;
  var i4;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("demo4");
  var captionText4 = document.getElementById("caption4");
  if (n > Last_slide4) {slideIndex4 = First_slide4}
  if (n < First_slide4) {slideIndex4 = Last_slide4}
  for (i4 = 0; i4 < Last_slide4; i4++) {
      slides4[i4].style.display = "none";
  }
  for (i4 = 0; i4 < dots4.length; i4++) {
      dots4[i4].className = dots4[i4].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
  captionText4.innerHTML = dots4[slideIndex4-1].alt;
}
