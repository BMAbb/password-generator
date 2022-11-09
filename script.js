//ARRAYS

// array of lowercase characters
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// array of uppercase charaacters
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// array of numeric digits
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// array of special characters, list from owasp.org
var specialCharacters = [
  " ",
  "!",
  '"',
  "#", 
  "$",
  '%',
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

//FUNCTIONS

// function for getting a random element from an array
function getRandom(arr) {
  var randElement = arr[Math.floor(Math.random() * arr.length)];
  //console.log(randElement);
  return randElement;
}

//input options function
function inputOptions() {

  //console log to make sure the fucntion happened.....
  //console.log("Good job you called the function!!!");

  // user input length
  var length = parseInt(
    prompt("How many characters long should the password be? Input a number between 8 and 128.")
  );

  // check length of the password, quit the function if it's false
  if (length < 8) {
    alert("Please enter a number between 8 and 128.");
    return null;
  }

  if (length > 128) {
    alert("Please enter a number between 8 and 128.");
    return null;
  }

  //if it's not a number, quit the function
  if (Number.isNaN(length)) {
    alert("That is not a number!");
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var lowercaseOK = confirm(
    "Click OK to include lowercase characters."
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var uppercaseOK = confirm(
    "Click OK to include uppercase characters."
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var numbersOK = confirm(
    "Click OK to include numeric characters."
  );

  // Variable to store boolean regarding the inclusion of uppercase characters
  var specialOK = confirm(
    "Click OK to include special characters."
  );  
 

  //exit function if no types were selected
  if (
    lowercaseOK == false &&
    uppercaseOK == false &&
    numbersOK == false &&
    specialOK == false
  ) {
    alert("You must OK at least one type of character.");
    return null;
  }

  // user selected options
  var options = {
    length: length,
    lowercaseOK: lowercaseOK,
    uppercaseOK: uppercaseOK,
    numbersOK: numbersOK,
    specialOK: specialOK,
  };

  return options;
}


//password generation, this runs when you hit the button
function generatePassword() {

  // declare password ouput variable
  var passwordOutput = [];

  // Get the options
  var options = inputOptions();

  // This array will contain all elements from arrays that were OK'd
  var possibleCharacters = [];

  // This array contains one element from each OK'd array, to ensure at least one of each type is in the password
  var guaranteedCharacters = [];

  // If options returned nothing, exit the function
  if (!options) return null;


  //if lowercase is OK, add it to the list of characters to use in the password
  if (options.lowercaseOK) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    //add one random lowercase character to the guaranteed list
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

 //if uppercase is OK, add it to the list of characters to use in the password
  if (options.uppercaseOK) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    //add one random uppercase character to the guaranteed list
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }


 //if numbers are OK, add them to the list of characters to use in the password
  if (options.numbersOK) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    //add one random number to the guaranteed list
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  //if special characters are OK, add them to the list of characters to use in the password
  if (options.specialOK) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    //add one random special character to the guaranteed list
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  //adds a random character until the length of the password is long enough
  for (var i = 0; i < options.length; i++) {
    passwordOutput.push(getRandom(possibleCharacters));
  }

  // put in some of the guaranteed characters
  for (var x = Math.floor(options.length / 2), i = 0; i < guaranteedCharacters.length; i++, x++) {
    //console.log(guaranteedcharacters[i]);
    passwordOutput[x] = guaranteedCharacters[i];
  }

  //bring all the characters together into one string
  return passwordOutput.join("");
}

// generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
