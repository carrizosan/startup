// Local Storage

if (typeof(Storage) !== "undefined") {    // If local storage is supported by browser
    
} else {
    console.log("Sorry! No Web Storage support");
}

function saveDataLocalStorage(key, value) {
    
    if(key && value) {
        localStorage.setItem(key, value);
    }
}

function deleteDataLocalStorage(key) {
    if(key) {
        localStorage.removeItem(key);
    }
}

window.addEventListener("load", function(){
    if(localStorage.textarea) {
        document.getElementById("text-area").innerHTML = localStorage.textarea;
    }
});

var saveButton = document.getElementById("save-btn");
var clearButton = document.getElementById("clear-btn");

saveButton.addEventListener("click", function(){
    let value = document.getElementById("text-area").value;
    saveDataLocalStorage("textarea", value);
});

clearButton.addEventListener("click", function() {
    deleteDataLocalStorage("textarea");
});


// IndexedDB Storage

var idbSupported = false;
var db;
 
document.addEventListener("DOMContentLoaded", function(){
 
    if("indexedDB" in window) {
        idbSupported = true;
    }
 
    if(idbSupported) {
        var openRequest = indexedDB.open("MyTestDatabase", 3);
 
        openRequest.onupgradeneeded = function(e) {
            console.log("running onupgradeneeded");
            var thisDB = e.target.result;
 
            if(!thisDB.objectStoreNames.contains("textarea")) {
                thisDB.createObjectStore("textarea", {autoIncrement : true});
            }
 
        }
 
        openRequest.onsuccess = function(e) {
            db = e.target.result;
        }
 
        openRequest.onerror = function(e) {
            console.log("Error opening database " + e.target.errorCode);
        }
    }
},false);


function saveDataIndexedDB(key, value) {
    let textObjectStore = db.transaction(key, "readwrite").objectStore(key);
    let request = textObjectStore.add(value, 1);

    request.onsuccess = function(event) {
        console.log("Saved succcess on IndexedDB");
    };

    request.onerror = function(event) {
        console.log("Error");
    };
}

function deleteDataIndexedDB(key) {
    let textObjectStore = db.transaction(key, "readwrite").objectStore(key);
    var request = textObjectStore.clear();

    request.onsuccess = function(event) {
        console.log("Cleared success on IndexDB");
    };

    request.onerror = function(event) {
        console.log("Error: " + event.target.errorCode);
    }
}

var saveButtonIDB = document.getElementById("save-btn-idb");
var clearButtonIDB = document.getElementById("clear-btn-idb");

saveButtonIDB.addEventListener("click", function(){
    let value = document.getElementById("text-area").value;
    saveDataIndexedDB("textarea", value);
});

clearButtonIDB.addEventListener("click", function() {
    deleteDataIndexedDB("textarea");
});