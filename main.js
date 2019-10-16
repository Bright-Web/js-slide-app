


let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');

let slides = [
  {
    slide: slide1
  },
  {
    slide: slide2
  },
  {
    slide: slide3
  }
]
// slide1.addEventListener("click", slideOneClick);

// function slideOneClick() {
//   slide1.classList.remove("visable")
//   slide1.classList.add("exiting")
//   slide2.classList.add("visable")
// }

// slide2.addEventListener("click", slideTwoClick);

// function slideTwoClick() {
//   slide2.classList.remove("visable")
//   slide2.classList.add("exiting")
//   slide3.classList.add("visable")
// }

checkSlides()
function checkSlides() {
  for (let i = 0; i < slides.length; i++) {
    
    setTimeout(() => {
      console.log(slides[i]);
    }, 1000);

    }
}


function moveSlide(currentSlide, nextSlide) {
  currentSlide.classList.remove("visable")
  currentSlide.classList.add("exiting")
  nextSlide.classList.add("visable")
}





