document.addEventListener("keypress", function(event) {
    var keylogger = document.getElementById("keylogger");
    if (event.key.match(/[a-z]/i)) {
        if (document.activeElement === keylogger) {
            keylogger.value += event.key + event.key;
        } else {
            keylogger.value += event.key;
        }
    }
});
