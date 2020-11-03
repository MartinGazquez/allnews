//Name Validation

var inputName = document.getElementById ("full-name");
var errorMessage = document.getElementsByClassName ("error-message");

function name (event) {
    var comparationfullname = event.target.value;
       
    if ((comparationfullname.length < 6)||(!comparationfullname.includes(" "))) {
       errorMessage[0].style.display = "block";     
    }
     
}

inputName.addEventListener ("blur", name);

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

var lettersRegExp = /[a-z]/i;
var numbersRegExp = /\d/g;

function password() {
    var password = document.getElementById("passwordId").value;
    var passwordInvalid = document.getElementById("messagePassword");
    var letters = password.length;
    var contentLetters = lettersRegExp.test(password);
    var contentNumbers = numbersRegExp.test(password);
    
  
    if (letters < 8 || !contentLetters || !contentNumbers) {
     passwordInvalid.style.display = "block";

    }
  } 

//Repeat Password Validation

function repeatPassword () {
    var password = document.getElementById("passwordId").value;
    var repeatpas = document.getElementById("repeatPasswordId").value;
    var repeatInvalid = document.getElementById("messageRepeatPassword");
    
    if (repeatpas !== password) {
        repeatInvalid.style.display = "block";
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

//Adress Validation

function address () {
    
    var inputAdress = document.getElementById ("addressId").value;
    var errorMessage = document.getElementById ("messageAddress");   
    var contentLetters = lettersRegExp.test(inputAdress);
    var contentNumbers = numbersRegExp.test(inputAdress);
    var letters = inputAdress.length;
    var space = inputAdress.indexOf (' ');
    var firstWord = inputAdress.substring (0 , space);
    var secondword = inputAdress.substring (space + 1);
    
    if (letters <5 || space === -1 || !contentLetters || !contentNumbers || firstWord.length === 0 || secondword.length === 0 ){
       errorMessage.style.display = "block";     
    }
     
}
