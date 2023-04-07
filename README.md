This JavaScript program allows users to generate secure passwords based on their selected criteria.

How to Use:
To use the program, simply click the "Generate Password" button. You will then be prompted to enter the desired length of the password (between 8 and 128 characters) and select which character types to include (lowercase, uppercase, numeric, and/or special characters).

After all prompts have been answered, the password will be generated and displayed in the password field.

Code Explanation:
The program begins by obtaining a reference to the #generate button and adding an event listener to it.

When the button is clicked, the writePassword function is called. This function prompts the user for the length of the password and which character types to include. User input is then validated to ensure that the length is between 8 and 128 characters and at least one character type is selected.

The generatePassword function is then called, which uses the selected criteria to generate a random password. This function creates a charset string based on the selected character types and then randomly selects characters from the charset to build the password.

Finally, the generated password is displayed in the password field.

Author:
This program was created by Justice Harker to help users generate secure passwords.
