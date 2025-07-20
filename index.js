var sidenav = document.querySelector(".side-navbar")
var signup = document.querySelector(".sign-up")

function showNavbar()
{
    sidenav.style.left = "0"
}

function closeNavbar()
{
    sidenav.style.left = "-60%"
}

function closethesignup()
{
    signup.style.display = "none"
}

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function toggleheart(element){
  element.classList.toggle("active")

  if(element.classList.contains("fa-regular"))
  {
    element.classList.remove("fa-regular")
    element.classList.add("fa-solid")
  }
  else{
    element.classList.remove("fa-solid")
    element.classList.add("fa-regular")
  }
}
