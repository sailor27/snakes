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
});
