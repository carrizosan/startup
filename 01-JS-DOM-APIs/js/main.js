//Exersise 1

function fadeIn(id) {
    var x = document.getElementById(id);
    x.classList.add('on-load');
}

//window.addEventListener("load", fadeIn("hidden-element")); // Why it don't works?

window.addEventListener("load", function(){
    fadeIn("hidden-element");
});

//Exersise 2

function showcaseAlert() {
    window.alert("This is an alert");
}

// In this case elem returns null. I added an atribute "onclick" on HTML button
/*
var elem = document.getElementById("but");  

elem.addEventListener("onclick", function(){
    showcaseAlert();
});
*/

