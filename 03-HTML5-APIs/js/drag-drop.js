function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.
    var reader = new FileReader();  
    reader.onload = function(event) {            
         document.getElementById('drop-area').value = event.target.result;
    }        
    reader.readAsText(files[0],"UTF-8");
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}


  var dropZone = document.getElementById('drop-area');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);