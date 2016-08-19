// Frontsies

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

var parsedNum = parseInt($("#userNumber").val());

// // Backsies

var pongArray = [];

if (parsedNum <= 0) {
  $("#result").append("Ping-pong will prove to be more enjoyable when counting to a number higher than 0. Please try again.");
}

for (var i = 1; i <= parsedNum; i++) {

  if (i % 15 === 0) {
  pongArray.push("ping-pong!")
  }
  else if (i % 3 === 0) {
  pongArray.push("ping!")
  }
  else if (i % 5 === 0) {
  pongArray.push("pong!")
  }
  else {
  pongArray.push(i);
  }
}

  var printPong = (pongArray).join("<br />");

  $("#result").append(printPong);

  });
});
