// Frontsies

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#userNumber").val();

// Backsies

var parsedPong = isNaN(userNumber);
var pongArray = [];
for (var i = 1; i <= maxPong; i++) {

  if (i % 15 == 0) {
  pongArray.push("ping-pong!")
  }
  else if (i % 3 == 0) {
  pongArray.push("ping!")
  }
  else if (i % 5 == 0) {
  pongArray.push("pong!")
  }
  else {
  pongArray.push(i);
  }
}

if (isNan(parsedPong) = true) {
  $("#result").append("Try again using only numbers.");
}
if (userNumber < 0) {
  $("#result").append("Ping-pong will prove to be more enjoyable when counting to a number higher than 0. Please try again.");
}

  var printPong = (pongArray).join("<br />");

  $("#result").append(printPong);

  });
});
