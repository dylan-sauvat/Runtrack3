const cases = document.querySelectorAll(".case");
let vide;

for (let i = 0; i < cases.length; i++) {
  if (cases[i].querySelector("img") === null) {
    vide = cases[i];
  } else {
    cases[i].addEventListener("click", function() {
      let image = this.querySelector("img");
      let casesVides = [];
      if(this.previousElementSibling !== null && this.previousElementSibling.querySelector("img") === null) casesVides.push(this.previousElementSibling);
      if(this.nextElementSibling !== null && this.nextElementSibling.querySelector("img") === null) casesVides.push(this.nextElementSibling);
      if(this.parentElement.previousElementSibling !== null && this.parentElement.previousElementSibling.children[this.cellIndex].querySelector("img") === null) casesVides.push(this.parentElement.previousElementSibling.children[this.cellIndex]);
      if(this.parentElement.nextElementSibling !== null && this.parentElement.nextElementSibling.children[this.cellIndex].querySelector("img") === null) casesVides.push(this.parentElement.nextElementSibling.children[this.cellIndex]);
      if(casesVides.length !== 0) {
        vide = casesVides[0];
        vide.appendChild(image);
        this.appendChild(document.createElement("img"));
        if(isSolved()) {
          alert("Vous avez gagné!");
          for (let j =0; j < cases.length; j++) {
            cases[j].removeEventListener("click", function() {});
            }
            var recommencerBouton = document.createElement("button");
            recommencerBouton.innerHTML = "Recommencer";
            recommencerBouton.addEventListener("click", function() {
            location.reload();
            });
            document.body.appendChild(recommencerBouton);
            }
            }
            });
            }
            }
            
            function isSolved() {
            let solved = true;
            for (let i = 0; i < cases.length - 1; i++) {
            if (cases[i].querySelector("img").src !== "image" + (i + 1) + ".png") {
            solved = false;
            }
            }
            return solved;
            }
