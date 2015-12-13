$(document).ready(function(){
  $(window).load(function(){
        $('#userNameMod').modal('show');
    });

  $('.modal').on('shown.bs.modal', function () {
    $(this).find('input:text:visible:first').focus();
  })

  


  // user inputs choice of user name, on-click this user name will added to the paragraph element with 'userName' id//
  $(".btn-default").on("click", function(e){
    e.preventDefault();

    var userName =$("#userNameForm").val();
    $("#userName").html(userName);   
 
  });
});