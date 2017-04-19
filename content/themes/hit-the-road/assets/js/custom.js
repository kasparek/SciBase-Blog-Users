$(document).ready(function() {
  $("#newsletter-signup").on('submit',function(){
    //@TODO ajax to scibase api to store email
    $(this).html("<hr>Thank You for Your Email. We'll get in touch as soon as possible.");
    return false;
  });
});