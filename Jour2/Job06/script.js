var footer = document.getElementsByTagName("footer")[0];

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 100;
    footer.style.backgroundColor = "hsl(" + scrolled + ", 100%, 50%)";
};

