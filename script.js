// array of numeric digits
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


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
    prompt('How many characters long should the password be? Input a number between 8 and 128.')
  );

  // check length of the password, quit the function if it's false
  if (length < 8) {
    alert('Please enter a number between 8 and 128.');
    return null;
  }

  if (length > 128) {
    alert('Please enter a number between 8 and 128.');
    return null;
  }

  //if it's not a number, quit the function
  if (Number.isNaN(length)) {
    alert('That is not a number!');
    return null;
  }

  var  lowercaseOK

  var  uppercaseOK

  var  numbersOK

  var  specialOK

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

  // If options returned null, exit the function
  if (!options) return null;

  //adds a random number until the length of the password is long enough
  for (var i = 0; i < options.length; i++) {
    var numericAdd = getRandom(numericCharacters)
    passwordOutput.push(numericAdd);
  }

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
