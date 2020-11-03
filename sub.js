var inputName = document.getElementById ("full-name");
var errorMessage = document.getElementsByClassName ("error-message");

function Name (event) {
    var comparationfullname = event.target.value;
       
    if ((comparationfullname.length < 6)||(!comparationfullname.includes(" "))) {
       errorMessage[0].style.display = "block";     
    }
     
}

inputName.addEventListener ("blur", Name);

function resetValidate (nameMessage) {
     document.getElementById(nameMessage).style.display = "none";
}
 
function email () {
    var email= document.getElementById("mailId").value;
    
  var a = email.indexOf("@");
  var com = email.indexOf(".com");
  var emailErrorMessage = document.getElementById("messageEmail");

  if (a === -1 || com === -1) {
    
    emailErrorMessage.style.display = "block";
    }    
   
}
