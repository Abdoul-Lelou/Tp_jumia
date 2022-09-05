let index = 0;
carousel();

function carousel() {
  var photos = document.getElementsByClassName("mySlides");
  var dot = document.getElementsByClassName("dot");

  for (let i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
    dot[i].style.backgroundColor = 'gray';  
  }
  index++;
  if (index > photos.length){
    index = 1
  }    
  photos[index-1].style.display = "block";
  dot[index-1].style.backgroundColor = '#f68b0e';

  setTimeout(carousel, 2000); 
}

const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
arrow1.disabled = true;

function slideFooter(){
  const img1 = document.querySelectorAll('.img_footer1');
  const img2 = document.querySelectorAll('.img_footer2');

  for (let i = 0; i < img1.length; i++) {
    const slide1 = img1[i];
    const slide2 = img2[i];
    if (slide1.style.display == 'block') {
      slide1.style.display = 'none';
      slide2.style.display = 'block';
      arrow2.disabled = true;
      arrow1.disabled = false;
    } else {
      slide1.style.display = 'block';
      slide2.style.display = 'none';
      arrow1.disabled = true;
      arrow2.disabled = false;
    }
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}