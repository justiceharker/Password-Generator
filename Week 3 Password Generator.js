// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
// Prompt for password length
var length = parseInt(prompt("How long should the password be? (Enter a number between 8 and 128)"));
if (isNaN(length) || length < 8 || length > 128) {
alert("Please enter a valid password length between 8 and 128.");
return;
}

// Prompt for character types to include
var includeLowercase = confirm("Should the password include lowercase characters?");
var includeUppercase = confirm("Should the password include uppercase characters?");
var includeNumeric = confirm("Should the password include numeric characters?");
var includeSpecial = confirm("Should the password include special characters?");

if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
alert("Please select at least one character type to include in the password.");
return;
}

var password = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Generate password with selected criteria
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
var charset = "";
if (includeLowercase) {
charset += "abcdefghijklmnopqrstuvwxyz";
}
if (includeUppercase) {
charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (includeNumeric) {
charset += "0123456789";
}
if (includeSpecial) {
charset += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

var password = "";
for (var i = 0; i < length; i++) {
var randomIndex = Math.floor(Math.random() * charset.length);
password += charset[randomIndex];
}
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



