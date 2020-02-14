$(document).ready(function() {
    $("#formOne").submit(function(event) {
      var auditfirmInput = $("input#auditfirm").val();
      var auditorInput = $("input#auditor").val();
      var addressInput = $("input#address").val();
      var date1Input = $("input#date1").val();
      var date2Input = $("input#date2").val();
      var date3Input = $("input#date3").val();
      var date4Input = $("input#date4").val();
      var client1Input = $("input#client1").val();
      var shortInput = $("input#short").val();
      var title1Input= $("input#title1").val(); 
  
      $(".auditfirm").text(auditfirmInput);
      $(".auditor").text(auditorInput);
      $(".address").text(addressInput);
      $(".date1").text(date1Input);
      $(".date2").text(date2Input);
      $(".date3").text(date3Input);
      $(".date4").text(date4Input);
      $(".client1").text(client1Input);
      $(".short").text(shortInput);
      $(".title1").text(title1Input);
      
  
      $("#auditletter").show();
  
      event.preventDefault();
    });
  });