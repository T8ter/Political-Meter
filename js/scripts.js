function partisan(a, b, c) {
  var result = a + b + c;
  return result;
};


$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var soc = parseInt($("input#social").val());
    var econ = parseInt($("input#economic").val());
    var relig = parseInt($("input#religious").val());

    if (partisan(soc, econ, relig) > 8) {
      $("#conservative").show();
      $("#liberal").hide();
      $("#moderate").hide();
    } else if (partisan(soc, econ, relig) < 8) {
      $("#liberal").show();
      $("#conservative").hide();
      $("#moderate").hide();
    } else if (partisan(soc, econ, relig) === 8) {
      $("#moderate").show();
      $("#conservative").hide();
      $("#liberal").hide();
    };





  });
});
