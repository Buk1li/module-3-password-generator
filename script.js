// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password Length Validation
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Invalid length! Please enter a number between 8 and 128:");
}

var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

// Check to see that atleast one character type has been selected

while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
  alert("At least one character type must be selected to proceed");
  includeLowercase = confirm("Include lowercase characters?");
  includeUppercase = confirm("Include uppercase characters?");
  includeNumeric = confirm("Include numeric characters?");
  includeSpecial = confirm("Include special characters?");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
