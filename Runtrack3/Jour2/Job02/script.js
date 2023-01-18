var article;
function showhide() {
    if(!article){
        article = document.createElement("article");
        var text = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
        article.appendChild(text);
        document.body.appendChild(article);
    }else{
        document.body.removeChild(article);
        article=null;
    }
}
document.getElementById("button").addEventListener("click", showhide);
