$(document).ready(function() {
  $('#evaluate').on('click', function() {
    evaluateEquation();

  });

  function evaluateEquation() {
    var inputOne = $('#inputOneIn').val();
    var inputTwo = $('#inputTwoIn').val();
    var operation = $('#operation').val();

//puts inputs and operator into an object
    var inputObject = {
      "x": inputOne,
      "y": inputTwo,
      "type": operation
    };
    console.log(inputObject);

    $.ajax({
      type: "POST",
         data: inputObject,
         url: "/pathPost",
         success: function(data){
                console.log("data is: " + data);

          }
    });
  }

});
