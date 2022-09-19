
// modal1
// modal open

const openButton = document.getElementById("open")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".modal_overlay")
// const closeBtn = modal.querySelector("button")
const openModal = () => {
  console.log('open')
  modal.classList.remove("hidden");
}
const closeModal = () => {
  console.log('close')
  modal.classList.add("hidden");
}

overlay.addEventListener("click", closeModal)
openButton.addEventListener("click", openModal)

// modal open
// modal slide

const slideList1 = document.querySelector('.modal-center');
// Slide parent dom
const slideContents1 = document.querySelectorAll('.modal-img1'); // each slide dom
const slideBtnNext1 = document.querySelector('.next-btn'); // next button
const slideBtnPrev1 = document.querySelector('.prev-btn'); // prev button
const slideLen1 = slideContents1.length; // slide length
const slideWidth1 = 800; // slide width
const slideSpeed1 = 300; // slide speed
const startNum1 = 0; // initial slide index (0 ~ 4)
slideList1.style.width = slideWidth1 * (slideLen1 + 12) + "px";
// Copy first and last slide
let firstChild1 = slideList1.firstElementChild;
let lastChild1 = slideList1.lastElementChild;
let clonedFirst1 = firstChild1.cloneNode(true);
let clonedLast1 = lastChild1.cloneNode(true);
// Add copied Slides
slideList1.appendChild(clonedFirst1);
slideList1.insertBefore(clonedLast1, slideList1.firstElementChild);
slideList1.style.transform = "translate3d(-" + (slideWidth1 * (startNum1 + 1)) + "px, 0px, 0px)";
let curIndex1 = startNum1; // current slide index (except copied slide)
let curSlide1 = slideContents1[curIndex1]; // current slide dom
curSlide1.classList.add('slide_active1');
/** Next Button Event */
slideBtnNext1.addEventListener('click', function () {
  console.log('슬라이드1 확인');
  console.log(slideLen1);
  console.log(curIndex1, curSlide1);
  if (curIndex1 <= slideLen1 - 1) {
    slideList1.style.transition = slideSpeed1 + "ms";
    slideList1.style.transform = "translate3d(-" + (slideWidth1 * (curIndex1 + 2)) + "px, 0px, 0px)";
  }
  if (curIndex1 === slideLen1 - 1) {
    setTimeout(function () {
      slideList1.style.transition = "0ms";
      slideList1.style.transform = "translate3d(-" + slideWidth1 + "px, 0px, 0px)";
    }, slideSpeed1);
    curIndex1 = -1;
  }
  curSlide1 = slideContents1[++curIndex1];
});
/** Prev Button Event */
slideBtnPrev1.addEventListener('click', function () {
  if (curIndex1 >= 0) {
    slideList1.style.transition = slideSpeed1 + "ms";
    slideList1.style.transform = "translate3d(-" + (slideWidth1 * curIndex1) + "px, 0px, 0px)";
  }
  if (curIndex1 === 0) {
    setTimeout(function () {
      slideList1.style.transition = "0ms";
      slideList1.style.transform = "translate3d(-" + (slideWidth1 * slideLen1) + "px, 0px, 0px)";
    }, slideSpeed1);
    curIndex1 = slideLen1;
  }
  curSlide1.classList.remove('slide_active1');
  curSlide1 = slideContents1[--curIndex1];
  curSlide1.classList.add('slide_active1');
});
// modal slide
// modal1


// modal2
// modal open

const openButton2 = document.getElementById("open2")
const modal2 = document.querySelector(".modal2")
const overlay2 = document.querySelector(".modal_overlay2")
// const closeBtn = modal.querySelector("button")
const openModal2 = () => {
  console.log('open2')
  modal2.classList.remove("hidden");
}
const closeModal2 = () => {
  console.log('close')
  modal2.classList.add("hidden");
}

overlay2.addEventListener("click", closeModal2)
openButton2.addEventListener("click", openModal2)

// modal open
// modal slide

const slideList2 = document.querySelector('.modal-center2'); // Slide parent dom
const slideContents2 = document.querySelectorAll('.modal-img2'); // each slide dom
const slideBtnNext2 = document.querySelector('.next-btn2'); // next button
const slideBtnPrev2 = document.querySelector('.prev-btn2'); // prev button
const slideLen2 = slideContents2.length; // slide length
const slideWidth2 = 800; // slide width
const slideSpeed2 = 300; // slide speed
const startNum2 = 0; // initial slide index (0 ~ 4)
slideList2.style.width = slideWidth2 * (slideLen2) + "px";
// Copy first and last slide
let firstChild2 = slideList2.firstElementChild;
let lastChild2 = slideList2.lastElementChild;
let clonedFirst2 = firstChild2.cloneNode(true);
let clonedLast2 = lastChild2.cloneNode(true);
// Add copied Slides
slideList2.appendChild(clonedFirst2);
slideList2.insertBefore(clonedLast2, slideList2.firstElementChild);
slideList2.style.transform = "translate3d(-" + (slideWidth2 * (startNum2 + 1)) + "px, 0px, 0px)";
let curIndex2 = startNum2; // current slide index (except copied slide)
let curSlide2 = slideContents2[curIndex2]; // current slide dom
curSlide2.classList.add('slide_active2');
/** Next Button Event */
slideBtnNext2.addEventListener('click', function () {
  if (curIndex2 <= slideLen2 - 1) {
    console.log('슬라이드2 확인');
    console.log(slideLen2);
    console.log(curIndex2, curSlide2);
    slideList2.style.transition = slideSpeed2 + "ms";
    slideList2.style.transform = "translate3d(-" + (slideWidth2 * (curIndex2 + 2)) + "px, 0px, 0px)";
  }
  if (curIndex2 === slideLen2 - 1) {
    setTimeout(function () {
      slideList2.style.transition = "0ms";
      slideList2.style.transform = "translate3d(-" + slideWidth2 + "px, 0px, 0px)";
    }, slideSpeed2);
    curIndex2 = -1;
  }
  curSlide2 = slideContents2[++curIndex2];
});
/** Prev Button Event */
slideBtnPrev2.addEventListener('click', function () {
  if (curIndex2 >= 0) {
    slideList2.style.transition = slideSpeed2 + "ms";
    slideList2.style.transform = "translate3d(-" + (slideWidth2 * curIndex2) + "px, 0px, 0px)";
  }
  if (curIndex2 === 0) {
    setTimeout(function () {
      slideList2.style.transition = "0ms";
      slideList2.style.transform = "translate3d(-" + (slideWidth2 * slideLen2) + "px, 0px, 0px)";
    }, slideSpeed2);
    curIndex2 = slideLen2;
  }
  curSlide2.classList.remove('slide_active2');
  curSlide2 = slideContents2[--curIndex2];
  curSlide2.classList.add('slide_active2');
});
// modal slide
// modal2


// modal3
// modal open

const openButton3 = document.getElementById("open3")
const modal3 = document.querySelector(".modal3")
const overlay3 = document.querySelector(".modal_overlay3")
// const closeBtn = modal.querySelector("button")
const openModal3 = () => {
  console.log('open')
  modal3.classList.remove("hidden");
}
const closeModal3 = () => {
  console.log('close')
  modal3.classList.add("hidden");
}

overlay3.addEventListener("click", closeModal3)
openButton3.addEventListener("click", openModal3)

// modal open
// modal slide

const slideList3 = document.querySelector('.modal-center3');
// Slide parent dom
const slideContents3 = document.querySelectorAll('.modal-img3'); // each slide dom
const slideBtnNext3 = document.querySelector('.next-btn3'); // next button
const slideBtnPrev3 = document.querySelector('.prev-btn3'); // prev button
const slideLen3 = slideContents1.length; // slide length
const slideWidth3 = 400; // slide width
const slideSpeed3 = 300; // slide speed
const startNum3 = 0; // initial slide index (0 ~ 4)
slideList3.style.width = slideWidth3 * (slideLen3 + 12) + "px";
// Copy first and last slide
let firstChild3 = slideList3.firstElementChild;
let lastChild3 = slideList3.lastElementChild;
let clonedFirst3 = firstChild3.cloneNode(true);
let clonedLast3 = lastChild3.cloneNode(true);
// Add copied Slides
slideList3.appendChild(clonedFirst3);
slideList3.insertBefore(clonedLast3, slideList3.firstElementChild);
slideList3.style.transform = "translate3d(-" + (slideWidth3 * (startNum3 + 1)) + "px, 0px, 0px)";
let curIndex3 = startNum3; // current slide index (except copied slide)
let curSlide3 = slideContents3[curIndex3]; // current slide dom
curSlide3.classList.add('slide_active3');
/** Next Button Event */
slideBtnNext3.addEventListener('click', function () {
  if (curIndex3 <= slideLen3 - 1) {
    slideList3.style.transition = slideSpeed3 + "ms";
    slideList3.style.transform = "translate3d(-" + (slideWidth3 * (curIndex3 + 2)) + "px, 0px, 0px)";
  }
  if (curIndex3 === slideLen3 - 1) {
    setTimeout(function () {
      slideList3.style.transition = "0ms";
      slideList3.style.transform = "translate3d(-" + slideWidth3 + "px, 0px, 0px)";
    }, slideSpeed3);
    curIndex3 = -1;
  }
  curSlide3 = slideContents3[++curIndex3];
});
/** Prev Button Event */
slideBtnPrev3.addEventListener('click', function () {
  if (curIndex3 >= 0) {
    slideList3.style.transition = slideSpeed3 + "ms";
    slideList3.style.transform = "translate3d(-" + (slideWidth3 * curIndex3) + "px, 0px, 0px)";
  }
  if (curIndex3 === 0) {
    setTimeout(function () {
      slideList3.style.transition = "0ms";
      slideList3.style.transform = "translate3d(-" + (slideWidth3 * slideLen3) + "px, 0px, 0px)";
    }, slideSpeed3);
    curIndex3 = slideLen3;
  }
  curSlide3.classList.remove('slide_active3');
  curSlide3 = slideContents3[--curIndex3];
  curSlide3.classList.add('slide_active3');
});
// modal slide
// modal3