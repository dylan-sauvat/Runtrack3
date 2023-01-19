let texte;
const afficherBouton = document.getElementById("afficherBouton");
afficherBouton.addEventListener("click", function() {
  texte = document.createElement("p");
  texte.innerHTML = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";
  document.body.appendChild(texte);
});
const cacherBouton = document.getElementById("cacherBouton");
cacherBouton.addEventListener("click", function() {
  texte.style.display = "none";
});
