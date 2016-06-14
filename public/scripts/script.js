
$(document).ready(function() {
  $('#evaluate').on('click', function() {
    var x = $('#inputOneIn').val();
    var y = $('#inputTwoIn').val();
    var operation = $('#operation').val();

//puts inputs and operator into an object
    var inputObject = {
      "x": x,
      "y": y,
      "operation": operation
    };
    console.log(inputObject);
    sendObject(inputObject);
  });

  function showResult(result) {
    console.log(result);
    var newParagraph = document.createElement('p');
    newParagraph.textContent = "equation = " + result;
    $('#outputDiv').append(newParagraph);
    $('p').addClass('result');

  }

  function sendObject(objectToSend){
    $.ajax({
      type: "POST",
      data: objectToSend,
      url: "/pathPost",
      success: function(data){
        console.log("data is: " + data);
        showResult( data );


      }
    });
  }

  $('#clear').on('click', function() {
    $('.result').remove();
    $('#inputOneIn').val("");
    $('#inputTwoIn').val("");
  });
});
