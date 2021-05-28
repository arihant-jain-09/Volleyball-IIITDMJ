window.onload=function(){
  scrollup = document.getElementsByClassName('scrollup')[0];
  scrollup.className = 'scrollup hide';
  document.getElementById("loading").style.display = "none" 
  let mainView = document.getElementById("mainView");
  mainView.style.display="block"
  document.getElementById("navRight").style.display="block"
  document.getElementById("navLeft").style.display="block"

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y <= 800) {
    scrollup.className = "scrollup hide"
  } else {
    scrollup.className = "scrollup show"
  }
};

window.addEventListener("scroll", myScrollFunc);

let imgObject = [
  // "https://placeimg.com/450/450/any",
  "https://placeimg.com/450/450/animals",
  // "https://placeimg.com/450/450/architecture",
  // "https://placeimg.com/450/450/nature",
  // "https://placeimg.com/450/450/people",
  // "https://placeimg.com/450/450/tech",
  // "https://picsum.photos/id/1/450/450",
  // "https://picsum.photos/id/8/450/450",
  // "https://picsum.photos/id/12/450/450",
  // "https://picsum.photos/id/15/450/450",
  // "https://picsum.photos/id/5/450/450",
  "./assets/gusto_equal.webp",
  "./assets/IMG_1700_equal.webp"
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {
  // mainView.style.background = "url(" + imgObject[mainImg] + ")";
  let imageTag=document.getElementById("imageTag");
  imageTag.src=imgObject[mainImg];
  imageTag.style.display="block";
  imageTag.style.width="100%";
  
  // mainView.style.paddingTop=(image-height(" + imgObject[mainImg] + ") / image-width(" + imgObject[mainImg] + "))*100; 

  let leftView = document.getElementById("leftView");
  leftView.style.display="block"
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  leftView.style.filter="grayscale(20%) brightness(50%) sepia(70%) hue-rotate(-50deg) saturate(500%) contrast(.8)";
  
  let rightView = document.getElementById("rightView");
  rightView.style.display="block"
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  rightView.style.filter="grayscale(20%) brightness(50%) sepia(70%) hue-rotate(-50deg) saturate(500%) contrast(.8)";
  // let linkTag = document.getElementById("linkTag")
  // linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();




}
