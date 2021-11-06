// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Click to generate a password")

  let charLeg = prompt("Choose character length from 8 to 128");
  let special = confirm ("Use special characters? \nOkay for yes, Cancel for no")  
  let num = confirm ("Use numbers? \nOkay for yes, Cancel for no")
  let lower = confirm ("Use lowercase characters? \nOkay for yes, Cancel for no")
  let upper = confirm ("Use uppercase characters? \nOkay for yes, Cancel for no")
  console.log(charLeg)

  let charSpe = "";
  let charNum = "";
  let charLow = "";
  let charUpp = "";

  if (special === true) {
    charSpe="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  if (num === true) {
    charNum="1234567890";
  }

  if (lower === true) {
    charLow="abcdefghijklmnopqrstuvwxyz";
  }

  if (upper === true) {
    charUpp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  let charMin = 2;
  let randomCharSpe = "";
  let randomCharNum = "";
  let randomCharLow = "";
  let randomCharUpp = "";

  if (special === true) {
    for (let i=0; i < charMin; i++) {
      randomCharSpe += charSpe.charAt(Math.floor(Math.random() * charSpe.length));
    }
  }

  if (num === true) {
    for (let i=0; i < charMin; i++) {
      randomCharNum += charNum.charAt(Math.floor(Math.random() * charNum.length));
    }
  }

  if (lower === true) {
    for (let i=0; i < charMin; i++) {
      randomCharLow += charLow.charAt(Math.floor(Math.random() * charLow.length));
    }
  }

  if (upper === true) {
    for (let i=0; i < charMin; i++) {
      randomCharUpp += charUpp.charAt(Math.floor(Math.random() * charUpp.length));
    }
  }

  let randomCharAll=randomCharSpe+randomCharNum+randomCharLow+randomCharUpp;
  let loop = charLeg - randomCharAll.length; 
  let charAll=charSpe+charNum+charLow+charUpp;

  let genPass = "";

  for (let i=0; i< loop; i++) {
    console.log(i)
    genPass += charAll.charAt(Math.floor(Math.random() * charAll.length));
    console.log(genPass)
  }

  let pass=randomCharAll+genPass;

  let finalPass = pass.split('').sort(function(){return 0.5-Math.random()}).join('');


  return finalPass;
  


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
