function fadeIn(id) {
    var x = document.getElementById(id);
    x.classList.add('on-load');
}

//window.addEventListener("load", fadeIn("hidden-element")); // Why it don't works?

window.addEventListener("load", function(){
    fadeIn("hidden-element");
});

