let index = 0;
carousel();

function carousel() {

  //RECUPERATION DES PHOTOS ET DES POINTS
  var photos = document.getElementsByClassName("mySlides");
  var dot = document.getElementsByClassName("dot");

  //BOUCLE POUR MASQUER TOUTES LES PHOTOS
  for (let i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
    dot[i].style.backgroundColor = 'gray';  
  }
  //INCREMENTATION DE L'INDEX
  index++;
  //VERIFICATION DE LA TAILLE DE L'INDEX
  if (index > photos.length){
    index = 1
  }   
  //ON COMMENCE L'AFFICHAGE DES IMAGES ET DES POINTS EN CIBLANT L'INDEX-1
  photos[index-1].style.display = "block";
  dot[index-1].style.backgroundColor = '#f68b0e';

  //ON FAIT APPEL AU TIMER
  setTimeout(carousel, 2000); 
}

//RECUPERATIONS DES BUTTONS GAUCHE ET DROITE 
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");

//DESACTIVATION DU BUTTON GAUCHE
arrow1.disabled = true;

function slideFooter(){
  //RECUPERATION DES IMAGES GAUCHE ET DROITE
  const img1 = document.querySelectorAll('.img_footer1');
  const img2 = document.querySelectorAll('.img_footer2');

  //BOUCLE POUR MASQUER OU AFFICHER LES IMAGES
  for (let i = 0; i < img1.length; i++) {

    //RECUPERATION DU CONTENU DU TABLEAU D'IMAGES
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

function mobile() {
  //MASQUER ET AFFICHER LES MENUS EN VERSION MOBILE
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}