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
      $("#invalid-number").hide();
      $("#invalid-number2").hide();
      $("#invalid-number3").hide();
    } else if (partisan(soc, econ, relig) < 8) {
      $("#liberal").show();
      $("#conservative").hide();
      $("#moderate").hide();
      $("#invalid-number").hide();
      $("#invalid-number2").hide();
      $("#invalid-number3").hide();
    } else if (partisan(soc, econ, relig) === 8) {
      $("#moderate").show();
      $("#conservative").hide();
      $("#liberal").hide();
      $("#invalid-number").hide();
      $("#invalid-number2").hide();
      $("#invalid-number3").hide();
    } else { (soc > 5 || soc <= 0 || econ > 5 || econ <= 0 || relig > 5 || relig <= 0 || soc) 
      $("#moderate").hide();
      $("#conservative").hide();
      $("#liberal").hide();
      if (soc > 5 || soc <= 0) {
        $("#invalid-number").show();
      }
      if (econ > 5 || econ <= 0) {
        $("#invalid-number2").show();
      }
      if (relig > 5 || relig <= 0) {
        $("#invalid-number3").show();
      }}





  });
});
