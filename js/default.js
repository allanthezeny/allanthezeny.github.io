$(document).ready(function() {
  $("#age").val(calcularidade());
  $(".jump").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 600);

  });

});



function calcularidade() {
  var dob = new Date("1993/01/11");
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
  var age = currentYear - dob.getFullYear();
  if(birthdayThisYear > currentDate) {
    age--;
  }
  return age;
}
