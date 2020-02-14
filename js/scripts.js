$(document).ready(function() {
    $("#formOne").submit(function(event) {
      var addressInput = $("input#address").val();
      var auditfirmInput = $("input#auditfirm").val();
      var auditorInput = $("input#auditor").val();
      var attorneyInput = $("input#attorney").val();
      var clientInput = $("input#client").val();
      var date1Input = $("input#date1").val();
      var date2Input = $("input#date2").val();
      var date3Input = $("input#date3").val();
      var date4Input = $("input#date4").val();
      var entityInput = $("input#entity").val();
      var laInput = $("input#la").val();
      var shortInput = $("input#short").val();
      var titleInput= $("input#title").val(); 
  
      $(".address").text(addressInput);
      $(".auditfirm").text(auditfirmInput);
      $(".auditor").text(auditorInput);
      $(".attorney").text(attorneyInput);
      $(".client").text(clientInput);
      $(".date1").text(date1Input);
      $(".date2").text(date2Input);
      $(".date3").text(date3Input);
      $(".date4").text(date4Input);
      $(".entityInput").text(entityInput);
      $(".laInput").text(laInput);
      $(".short").text(shortInput);
      $(".title").text(titleInput);
      
  
      $("#auditletter").show();
  
      event.preventDefault();
    });
  });