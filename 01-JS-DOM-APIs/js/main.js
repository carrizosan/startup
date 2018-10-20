//Exersise 1

function fadeIn(id) {
    var x = document.getElementById(id);
    x.classList.add('on-load');
}

//window.addEventListener("load", fadeIn("hidden-element")); // Why it don't works?

window.addEventListener("load", function(){
    fadeIn("hidden-element");
});

//Exersise 2  v.2

function showcaseAlert() {
    window.alert("This is an alert");
}

var elem = document.getElementById("but");  

elem.addEventListener("click", function(){
    showcaseAlert();
});


