//Name Validation

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
 
//Email Validation
function email () {
  var email = document.getElementById("mailId").value;
    
  var a = email.indexOf("@");
  var com = email.indexOf(".com");
  var emailErrorMessage = document.getElementById("messageEmail");

  if (a === -1 || com === -1) {
    
    emailErrorMessage.style.display = "block";
    }    
   
}

//Password Validation
//<input id= "passwordId" onblur="password ()" onfocus="resetValidate ('messagePassword')" type="password" placeholder="Password">
//<sub id="messagePassword" class="error-message">Al menos 8 caracteres, formados por letras y números</sub>
function validate_password() {
    var password = document.getElementById("passwordId").value;
    var passwordInvalid = document.getElementById("messagePassword");
    var Letters = password.length;
    var contentLetters = lettersRegExp.test(password);
    var contentNumbers = numbersRegExp.test(password);
    
  
    if (Letters < 8 || !contentLetters || !contentNumbers) {
      passwordInvalid.innerHTML = passwordIncorrect;
      passwordInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
      return passwordIncorrect;
    } else {
      reset_validate("password", "messagePassword");
      return true;
    }
  } 

//Age Validation
function age () {
    var validateAge = document.getElementById("ageId").value;
    
    var ageErrorMessage = document.getElementById("messageAge");

    if (validateAge <18) {
    
    ageErrorMessage.style.display = "block";
                         }    
   
}