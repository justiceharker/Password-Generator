// This is a JavaScript program that generates a secure password based on user-selected criteria.

// Get a reference to the button that will trigger password generation
var generateButton = document.querySelector("#generate");

// Function that prompts the user for password criteria and writes the generated password to the page
function writePassword() {
// Prompt for password length
var passwordLength = parseInt(prompt("How many characters would you like your password to be? (Enter a number between 8 and 128)"));
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
alert("Please enter a valid password length between 8 and 128 characters.");
return;
}

// Prompt for character types to include
var includeLowercase = confirm("Should the password include lowercase letters?");
var includeUppercase = confirm("Should the password include uppercase letters?");
var includeNumeric = confirm("Should the password include numbers?");
var includeSpecial = confirm("Should the password include special characters?");

if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
alert("Please select at least one character type to include in the password.");
return;
}

// Generate the password based on the selected criteria
var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

// Write the password to the page
var passwordField = document.querySelector("#password");
passwordField.value = password;
}

// Function that generates a random password based on the selected criteria
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
var characterSet = "";
if (includeLowercase) {
characterSet += "abcdefghijklmnopqrstuvwxyz";
}
if (includeUppercase) {
characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (includeNumeric) {
characterSet += "0123456789";
}
if (includeSpecial) {
characterSet += "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

var password = "";
for (var i = 0; i < length; i++) {
var randomIndex = Math.floor(Math.random() * characterSet.length);
password += characterSet[randomIndex];
}
return password;
}

// Attach an event listener to the generate button to trigger password generation
generateButton.addEventListener("click", writePassword);
