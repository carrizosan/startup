
const send = document.getElementById("ws-send");

send.addEventListener("click", function(){
  var msg = document.getElementById("msg").value;
  testWebSocket(msg);
});


function testWebSocket(msg)
{
  const websocket = new WebSocket("ws://echo.websocket.org");

  websocket.onopen = function(evt) { 
    writeToScreen("CONNECTED");
    doSend(msg, websocket);
  };

  websocket.onclose = function(evt) { 
    writeToScreen("DISCONNECTED");
  };

  websocket.onmessage = function(evt) { 
    writeToScreen('RESPONSE: ' + evt.data);
    websocket.close();
  };

  websocket.onerror = function(evt) { 
    writeToScreen('ERROR: ' + evt.data);
  };
}


function doSend(message, websocket)
{
  writeToScreen("SENT: " + message);
  websocket.send(message);
}

function writeToScreen(message)
{
  const output = document.getElementById("output");
  output.value += message;
  output.value += "\n";
}


