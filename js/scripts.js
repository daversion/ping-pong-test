var evaluateReplacement = function(pingPongEndNumber) {
  var divByThree = pingPongEndNumber % 3 === 0;
  var divByFive = pingPongEndNumber % 5 === 0;
  if (divByThree && divByFive) {
    return "Ping-Pong";
  } else if (divByThree) {
    return "Ping";
  } else if (divByFive) {
    return "Pong";
  } else {
    return pingPongEndNumber;
  }
}

$(document).ready(function() {
  $('#runButton').click(function() {
    pingPong($('#pingPongEndNumber').val());
  });
  function pingPong(pingPongEndNumber) {
    for (var i = 1; i <= parseInt(pingPongEndNumber); i++) {
        $("ul").append("<li>" + evaluateReplacement(i) + "</li>");
    }
  }
});
