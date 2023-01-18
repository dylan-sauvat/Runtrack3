var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var enteredCode = [];

document.addEventListener("keydown", function(event) {
    enteredCode.push(event.keyCode);
    if (enteredCode.length > 10) {
        enteredCode.shift();
    }
    if (enteredCode.toString() === konamiCode.toString()) {
        document.body.style.background = "#ffcc33";
        document.body.style.color = "#000000";
    }
});
