const melangerBouton = document.getElementById("melangerBouton");
let images = ["arc1.png", "arc2.png", "arc3.png", "arc4.png", "arc5.png", "arc6.png"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

melangerBouton.addEventListener("click", function() {
  images = shuffle(images);
  //afficher les images mélangées dans la page
});
const verificationBouton = document.getElementById("verificationBouton");

verificationBouton.addEventListener("click", function() {
  let imagesOrdonnees = [];
  // remplir le tableau imagesOrdonnées avec les images dans l'ordre des conteneurs
  if (JSON.stringify(images) === JSON.stringify(imagesOrdonnees)) {
    //afficher "Vous avez gagné" en vert
  } else {
    //afficher "Vous avez perdu" en rouge
}
});
