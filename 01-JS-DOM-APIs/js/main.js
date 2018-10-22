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

/*
elem.addEventListener("click", function(){
    showcaseAlert();
});
*/

//Exersise 3

//Create the XMLHttpRequest Object
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
}

function makeCorsRequest() {
    // This is the jokes API
    var url = 'http://api.icndb.com/jokes/random';
  
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      window.alert('CORS not supported');
      return;
    }
    
    // Response handlers.
    xhr.onload = function() {
      var _JSON = xhr.responseText;
      printResponse(_JSON);
    };
  
    xhr.onerror = function() {
        var section = document.getElementById("hidden-element");
        section.classList.add("error-request");
    };
  
    xhr.send();
}

//Is commented because now we call new AJAX funcion
/*
elem.addEventListener("click", function(){
    makeCorsRequest();
});
*/

function printResponse(res) {
    var section = document.getElementById("hidden-element");
    var newElement = document.createElement("p");
    var content = JSON.parse(res);
    var joke = document.createTextNode(content.value.joke);
    newElement.appendChild(joke);
    section.appendChild(newElement);
}


// Create a reusable function to perform AJAX calls. Acepting config objetct and returning a promise.

var config = new Object();
config.method = 'GET';
config.url = 'http://api.icndb.com/jokes/random';

function makeAJAXRequest(config) {
    // This is the jokes API
  
    var xhr = createCORSRequest(config.method, config.url); // delcared createCORSRequest function above

    if (!xhr) {
      window.alert('CORS not supported');
      return;
    }
    
    xhr.send();

    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function() {
            
            if(xhr.readyState === 4) {
                if(xhr.status === 200){
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status, xhr.statusText);
                }
            }
            
        }
    });    
}

elem.addEventListener("click", function(){
    makeAJAXRequest(config).then(resolve => printResponse(resolve))
                        .catch(reject => console.log(reject));
});


