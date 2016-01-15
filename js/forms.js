$(function () {
  $("#nameForm").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var fullname = firstNameInput + " " + lastNameInput;
// debugger;
    // $("#firstNameText").text(firstNameInput);
    // $("#lastNameText").text(lastNameInput);

    $("#fullname").text(fullname);
    event.preventDefault();

  });
});
