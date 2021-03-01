// Assignment Code

var generateBtn = document.querySelector("#generate");

var specialCheck = document.getElementById('symbols');
var numberCheck = document.getElementById('numbers');
var upperCheck = document.getElementById('uppercase');
var lowerCheck = document.getElementById('lowercase');
var lengthCheck = document.getElementById('length');

//specialCheck.addEventListener("check",specialChars);

// Add event listener to generate button

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);




function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

///

var chars = ""

function specialChars () {
    chars = chars + "!@#$%^&*";
    return chars
}

function upperChars () {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return chars
}

function lowerChars () {
    chars = chars + "abcdefghijklmnopqrstuvwxyz";
    return chars
}

function numberChars () {
    chars = chars + "0123456789";
    return chars
}

// 

function generatePassword (){
    var randChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"
    var password = "";
    var length = 20
    for (var i=0, n=randChars.length; i<length; i++ ) {

        var randomNumber = Math.floor(Math.random() * n);
        
        password += randChars.substring(randomNumber,randomNumber+1);
    }
    return password
}

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");
//
//  passwordText.value = password;
//}




