function fadeIn(e) {
    var x = document.getElementById(e);
    x.style.visibility = "visible";
}

//window.addEventListener("load", fadeIn("hidden-element"));
window.addEventListener("load", function(){
    fadeIn("hidden-element");
});