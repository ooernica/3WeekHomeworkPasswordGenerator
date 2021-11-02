// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Click to generate a password")

// 1. prompt the user for the password criteria
//    a. password length 8-128
//    b. lowercase, uppercase, numbers, special characters
// 2. Validate the input 
// 3. Generate the password based on critera
// 4. Diplay password on the page 
  return "Generated Password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
