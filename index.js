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

  setTimeout(carousel, 2000); // Change image every 2 seconds
}

