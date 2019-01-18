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



    // if (soc > 5 || soc < 1 || econ > 5 || econ < 1 || relig > 5 || relig < 1 || soc) {
    //   $("#moderate").hide();
    //   $("#conservative").hide();
    //   $("#liberal").hide();
    //   if (soc > 5 || soc <= 0) {
    //     $("#invalid-number").show();
    //   }
    //   if (econ > 5 || econ <= 0) {
    //     $("#invalid-number2").show();
    //   }
    //   if (relig > 5 || relig <= 0) {
    //     $("#invalid-number3").show();
    //   }
    // }

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
    }







  });
});
