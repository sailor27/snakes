//back end logic//





//front end logic//

$(document).ready(function() {
  $("form#question1").submit(function(event) {
    event.preventDefault();
    var legNumber = parseInt($("input#legs").val());
      if (legNumber < 1) {
        $('#snk').show();
      } else {
        $('#question2').show();
      }
  });

  $("form#question2").submit(function(event) {
    event.preventDefault();
    var shellQuest = $("input#shell").val();
      if (shellQuest === "yes") {
        $('#trt').show();
      } else {
        $('#question3').show();
      }
  });

  $("form#question3").submit(function(event) {
    event.preventDefault();
    var tailQuest = $("input#tail").val();
      if (tailQuest === "yes") {
        $('#liz').show();
      } else {
        $('#none').show();
      }
  });



});
