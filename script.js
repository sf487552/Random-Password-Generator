var charachterLength = 8;
var choiceArr = [];

var specialCharacterArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ",", ">", ".", "/", "?"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts= getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
  
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
// use prompts to generate password
  var password = "";
  for(var i = 0; i < charachterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
    return password;    
}


function getPrompts() {
  choiceArr = [];
  charachterLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters"));

  if(isNaN(charachterLength) || charachterLength < 8 || charachterLength > 128) {
    alert("Length must be between 8-128 characters. Please Try again.");
    return false;
  }

  if (confirm("would you like to use lower case letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("would you like to use upper case letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  
  }

  if (confirm("would you like to use any special characters?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }

  if (confirm("would you like to use any numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  
  return true;

}
