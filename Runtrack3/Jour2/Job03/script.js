var compteur = 0;
function addone() {
    compteur++;
    document.getElementById("compteur").innerHTML = compteur;
}
document.getElementById("button").addEventListener("click", addone);
